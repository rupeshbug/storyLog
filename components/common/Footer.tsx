import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#058cab' }}>
      <Container>
        <Box
          paddingY="1rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography letterSpacing={5} variant="h4">
            STORY LOG
          </Typography>
          <Typography>Personal Portfolio / Blog @ Dipesh Chaulagain</Typography>
          <Typography>Copyright &#169; - {new Date().getFullYear()}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
