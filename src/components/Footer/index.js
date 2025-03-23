import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Zegar Elite Cleaning. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 