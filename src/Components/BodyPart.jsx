import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../Assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  //   console.log(bodyPart);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "220px",
        cursor: "pointer",
        gap: "44px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="20px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
