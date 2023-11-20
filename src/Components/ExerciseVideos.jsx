import React from "react";

import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exercisevideos, name }) => {
    if (!exercisevideos.length) return 'Loading...'
      return (
        <Box sx={{ marginTop: { lg: "180px", xs: "20px" } }} p="18px">
          <Typography variant="h4" mb="30px">
            Watch{" "}
            <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
              {" "}
              {name}{" "}
            </span>{" "}
            exercise videos
          </Typography>
          <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            alignItems="center"
            sx={{ flexDirection: { lg: "row" }, gap: { lg: "75px", xs: "0" } }}
          >
            {exercisevideos?.slice(0, 9).map((item, index) => (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography variant="h5" color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h6" color="#000">
                    {item.video.channel}
                  </Typography>
                </Box>
              </a>
            ))}
          </Stack>
        </Box>
      );
};

export default ExerciseVideos;
