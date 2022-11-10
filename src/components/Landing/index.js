import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.scss';
import Rules from '../Rules/index';

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = (difficulty) => {
    navigate(`./${difficulty}`);
  };

  return (
    <Box className="landing">
      <Rules />
      <Button variant="contained" onClick={() => handleNavigate('easy')}>
        Easy (3x3)
      </Button>
      <Button variant="contained" onClick={() => handleNavigate('medium')}>
        Medium (4x4)
      </Button>
      <Button variant="contained" onClick={() => handleNavigate('hard')}>
        Hard (5x5)
      </Button>
    </Box>
  );
};

export default Landing;
