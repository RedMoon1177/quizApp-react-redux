import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant='h2' fontWeight="bold" textAlign="center">Quiz App</Typography>
      <Router>
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Router>
    </Container>
  )
}

export default App
