import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from '@mui/icons-material';
import BoardBox from './BoardBox/index';
import { useNavigate } from 'react-router-dom';
import './Board.scss';

const Board = (props) => {
  const { difficultyVal } = props;

  const [arrOfDirections, setArrOfDirecitions] = useState([]);
  const [startValue, setStartValue] = useState(
    Math.ceil(Math.random() * Math.pow(difficultyVal, 2))
  );
  const [endValue, setEndValue] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isNotClickable, setIsNotClickable] = useState(true);
  const [showCorrect, setShowCorrect] = useState(false);
  const [counter, setCounter] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [directions, setDirections] = useState([]);
  const navigate = useNavigate();

  const directionsObject = {
    1: <ArrowUpward className="board__directopms__box__direction" />,
    2: <ArrowForward className="board__directopms__box__direction" />,
    3: <ArrowDownward className="board__directopms__box__direction" />,
    4: <ArrowBack className="board__directopms__box__direction" />,
  };

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        setCounter((oldCounter) => oldCounter + 1);

        if (arrOfDirections.length < 10) {
          const randDirection = Math.ceil(Math.random() * 4);

          if (!endValue) setEndValue(startValue);

          if (randDirection === 1 && endValue > difficultyVal) {
            setEndValue((oldEndValue) => oldEndValue - difficultyVal);
            setArrOfDirecitions((oldArrOfDirections) => [
              ...oldArrOfDirections,
              randDirection,
            ]);
          } else if (
            randDirection === 2 &&
            endValue !== Math.pow(difficultyVal, 2)
          ) {
            setEndValue((oldEndValue) => oldEndValue + 1);
            setArrOfDirecitions((oldArrOfDirections) => [
              ...oldArrOfDirections,
              randDirection,
            ]);
          } else if (
            randDirection === 3 &&
            endValue < Math.pow(difficultyVal, 2) - difficultyVal + 1
          ) {
            setEndValue((oldEndValue) => oldEndValue + 3);
            setArrOfDirecitions((oldArrOfDirections) => [
              ...oldArrOfDirections,
              randDirection,
            ]);
          } else if (randDirection === 4 && endValue !== 1) {
            setEndValue((oldEndValue) => oldEndValue - 1);
            setArrOfDirecitions((oldArrOfDirections) => [
              ...oldArrOfDirections,
              randDirection,
            ]);
          }
        } else {
          setTimeout(() => {
            setArrOfDirecitions([]);
            setIsStarted(false);
          }, Math.floor(4000 / difficultyVal));
        }
      }, Math.floor(2000 / difficultyVal));
    }

    console.log('Counter: ', counter);
  }, [
    arrOfDirections,
    endValue,
    isStarted,
    startValue,
    counter,
    difficultyVal,
  ]);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setDirections((oldDirections) => [...oldDirections, '']);
    }

    for (let i = 0; i < Math.pow(difficultyVal, 2); i++) {
      setBoxes((oldBoxes) => [...oldBoxes, '']);
    }
  }, [difficultyVal]);

  const handleStart = () => {
    setStartValue(Math.ceil(Math.random() * Math.pow(difficultyVal, 2)));
    setShowCorrect(false);
    setCounter(0);
    setEndValue(null);
    setIsStarted(true);
  };

  useEffect(() => {
    console.log('End Value', endValue);
  }, [arrOfDirections, endValue, startValue]);

  return (
    <Box className="board">
      <Typography variant="h4">Easy Mode</Typography>
      <Box
        className="board__container"
        style={{
          gridTemplateColumns: `repeat(${difficultyVal}, 5vw)`,
        }}
      >
        {boxes.map((el, ind) => {
          return (
            <BoardBox
              key={ind}
              id={ind}
              startValue={startValue}
              endValue={endValue}
              counter={counter}
              directions={arrOfDirections}
              isNotClickable={isNotClickable}
              setIsNotClickable={setIsNotClickable}
              showCorrect={showCorrect}
              setShowCorrect={setShowCorrect}
            />
          );
        })}
      </Box>
      <Box className="board__directions">
        {directions.length
          ? directions.map((el, ind) => {
              return (
                <Box key={ind} className="board__directions__box">
                  {directionsObject[arrOfDirections[ind]]}
                </Box>
              );
            })
          : null}
      </Box>

      <Box className="board__btn__container">
        <Button
          disabled={isStarted}
          variant="contained"
          color={isStarted ? 'warning' : 'primary'}
          onClick={handleStart}
        >
          Start
        </Button>

        <Button
          onClick={() => {
            navigate('/');
          }}
          variant="contained"
        >
          Difficulties
        </Button>
      </Box>
    </Box>
  );
};

export default Board;
