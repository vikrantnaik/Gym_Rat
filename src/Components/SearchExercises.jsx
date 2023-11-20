import React, { useEffect, useState } from "react";
import { Stack, Box, Typography, Button, TextField } from "@mui/material";

import { ExercisesOptions, fetchData } from "../utils/Api";
import HorizontalScrollBaar from "./HorizontalScrollBaar";

const SearchExercises = ({bodyPart,setBodyPart , setExercises}) => {
  const [search, setSearch] = useState(" ");
  const [bodyParts, setBadyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
    // This will Load at the first time of the webPage
      const bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExercisesOptions);
      
      setBadyParts(['all' , ...bodyPartData]);
    }
    
    fetchExercisesData();

  }, [])
  // console.log(bodyParts)

  const handleclick = async () => {
    if (search) {
      const ExerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1300",
        ExercisesOptions
      );

      const searchedExercises = ExerciseData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.includes(search) ||
          exercise.equipment.includes(search) ||
          exercise.bodyPart.includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" mt="32px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        mb="46px"
        textAlign="center"
        sx={{
          fontSize: { lg: "40px", xs: "28px" },
        }}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          type="text"
          height="72px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          sx={{
            width: { lg: "786px", xs: "320px" },
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "76px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "54px",
            alignItems: "center",
            position: "absolute",
            right: 0,
          }}
          onClick={handleclick}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position : 'relative', width : '100%', p : '20px'}}>

        <HorizontalScrollBaar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
       
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
