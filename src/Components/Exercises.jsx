import { Box, Stack, Typography } from "@mui/material";
import {Pagination} from "@mui/material";

import React, { useState, useEffect } from "react";
import { ExercisesOptions, fetchData } from "../utils/Api";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisesPerPage = 9;

  const indexOfLastExercise = currentPage * ExercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisesPerPage;




 const currentExercises = exercises.slice( indexOfFirstExercise,indexOfLastExercise);


  const paginate = (e , value) => {
    setCurrentPage(value);
    window.scrollTo({top : 1500 , behavior : 'smooth'})
  }
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
          ExercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExercisesOptions
        );
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart]) 
  

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h4" mb="42px">
        Showing Reasult
      </Typography>
     { currentExercises.length ?
      <Stack
        direction="row"
        sx={{ gap: { lg: "100px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      : <Loader />}
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / ExercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );

  
};

export default Exercises;
