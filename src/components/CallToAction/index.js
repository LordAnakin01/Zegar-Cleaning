import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const CallToAction = () => {
  return (
    <Box component="section" id="cta" sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Contact us today for a free quote
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="secondary" size="large" href="#contact">
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction; 