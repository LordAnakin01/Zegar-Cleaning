import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {
  const reasons = [
    'Professional & Experienced Team',
    'Eco-Friendly Cleaning Products',
    'Flexible Scheduling Options',
    '100% Satisfaction Guarantee',
    'Competitive Pricing',
    'Insured & Bonded Service'
  ];

  return (
    <Box component="section" id="why-choose-us" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{ display: 'block', mb: 2 }}
              >
                Why Choose Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Experience the Best in Professional Cleaning
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                We take pride in delivering exceptional cleaning services that exceed your expectations. Our commitment to quality and customer satisfaction sets us apart.
              </Typography>
              <Box>
                {reasons.map((reason, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: '#0047CC', marginRight: '8px' }} />
                    <Typography>{reason}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/why-choose-us.jpg"
              alt="Professional Cleaning Service"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 