import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange, handleScoreChange, handleAmountChange } from '../redux/actions';

const FinalScreen = () => {
  const { score } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    navigate("/");
  }

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight="bold" mb={3}>Final Score: { score }</Typography>
      <Button onClick={handleBackToSettings} variant='outlined'>Back To Settings</Button>
    </Box>
  )
}

export default FinalScreen