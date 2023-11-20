import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Bannerimg from '../Assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "155px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="800" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "40px", xs: "40px" },
        }}
        mb ='18px'  mt='25px'
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most Effective Exercise
      </Typography>
      <Button href="#exercises" variant='contained' color='error' background= '#FF2625'  padding= '14px' fontSize= '22px' borderradius= '4px'>Explore Exercise</Button>
      <Typography
        fontWeight={600} color='#ff2625' 
        sx={{
          opacity: 0.1,
          display : {lg : 'block' , sm : 'none', xs : 'none'},
          fontSize:  "150px" ,
           
        }}
      >
        Exercises
      </Typography>
      <img src={Bannerimg} alt="bannerimg" className="hero-banner-img"  />
    </Box>
  );
};

export default HeroBanner;
