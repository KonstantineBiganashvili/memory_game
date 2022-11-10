import { Flag, CheckBox, Clear } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const BoardBox = (props) => {
  const {
    id,
    startValue,
    endValue,
    counter,
    directions,
    isNotClickable,
    setIsNotClickable,
    showCorrect,
    setShowCorrect,
  } = props;
  const [clicked, setClicked] = useState(false);

  const [isCorrect, setIsCorrect] = useState(false);

  const handleGuess = () => {
    setClicked(true);
    setIsNotClickable(true);

    if (endValue === id + 1) {
      setIsCorrect(true);
    } else {
      setShowCorrect(true);
    }
  };

  const dynamicClass = () => {
    if (isCorrect && clicked) {
      return 'board__container__box correct';
    } else if (!isCorrect && clicked) {
      return 'board__container__box incorrect';
    } else {
      return 'board__container__box';
    }
  };

  useEffect(() => {
    if (directions.length === 10) setIsNotClickable(false);
    if (counter === 0) {
      setIsNotClickable(true);
      setClicked(false);
    }
  }, [counter, directions, setIsNotClickable]);

  return (
    <Button
      disabled={isNotClickable}
      onClick={handleGuess}
      sx={{ margin: 0, padding: 0 }}
    >
      <Box className={dynamicClass()}>
        {startValue === id + 1 && !isCorrect && !clicked && !showCorrect && (
          <Flag />
        )}
        {isCorrect && clicked && <CheckBox />}
        {!isCorrect && id === endValue && !clicked && showCorrect && (
          <CheckBox />
        )}
        {!isCorrect && clicked && showCorrect && <Clear />}
      </Box>
    </Button>
  );
};

export default BoardBox;
