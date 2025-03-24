import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const CallToAction = () => {
  return (
    <>
      {/* Order a Free Call Section */}
      <Box 
        component="section" 
        id="free-call" 
        sx={{ 
          py: 8,
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/cleaner-dots.jpg"
                alt="Professional Cleaner"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 2,
                  color: 'primary.main'
                }}
              >
                Order a Free Call from Our Innovative Team
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Cursus facilisis arcu est lacus dictumst ullamcorper quam. Orci eu cursus quam amet fermentum augue vulputate id elementum. Aliquam aenean sagittis consequat posuere blandit non iaculis. Nulla faucibus.
              </Typography>
              <Box component="form" sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  placeholder="Enter Your Mobile Number*"
                  fullWidth
                  sx={{
                    bgcolor: 'background.default',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'divider',
                      },
                    },
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
                  Request A Call
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Get Started Section */}
      <Box 
        component="section" 
        id="cta" 
        sx={{ 
          py: 8, 
          bgcolor: 'primary.main',
          backgroundImage: 'linear-gradient(rgba(0, 71, 204, 0.95), rgba(0, 71, 204, 0.95)), url(/assets/cleaning-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 4
            }}
          >
            Get Started with Your Free Estimate
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="#estimate"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600
            }}
          >
            Get An Estimate
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default CallToAction; 