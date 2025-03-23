import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const CallToAction = () => {
  return (
    <Box component="section" id="cta" sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container>
        <Typography variant="h2">Call to Action Section</Typography>
        <Typography variant="body1">Coming soon...</Typography>
      </Container>
    </Box>
  );
};

export default CallToAction; 