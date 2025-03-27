import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',
}));

const CallToAction = () => {
  return (
    <CTASection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                mb: 3,
                color: 'primary.main'
              }}
            >
              Transform Your Space with Professional Cleaning
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: '1.1rem' }}
            >
              Experience the Zegar Elite difference today. Our expert team is ready to deliver exceptional cleaning services tailored to your needs. Schedule your consultation now.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                placeholder="Enter your phone number"
                fullWidth
                sx={{
                  maxWidth: 300,
                  bgcolor: 'background.default',
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  whiteSpace: 'nowrap'
                }}
              >
                Schedule Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/assets/cta-image.jpg"
              alt="Professional Cleaning"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </CTASection>
  );
};

export default CallToAction; 