import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import LOGO from '../Assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="36px" alignItems="center" px="40px" pt="24px">
        <img src={LOGO} alt="logo" width="200px" height="100px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with 🧡 BY Vikrant Naik
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer