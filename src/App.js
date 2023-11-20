import './App.css';
import {Routes , Route} from 'react-router-dom'

import Box from '@mui/material/Box'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import ExerciseDetails from "./Pages/ExerciseDetails";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
