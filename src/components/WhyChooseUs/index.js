import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeatureIcon = styled('img')({
  width: '60px',
  height: '60px',
  marginBottom: '20px',
});

const features = [
  {
    icon: '/assets/icons/disinfectant-icon.svg',
    title: 'Professional Grade Disinfectant',
    description: 'Scelerisque purus parturient mauris malesuada condimentum porttitor. Magna vitae scelerisque et neque.',
  },
  {
    icon: '/assets/icons/team-icon.svg',
    title: 'Healthy Teams And Social Distance',
    description: 'Pretium vulputate est scelerisque pharetra facilisis vitae vel imperdiet enim. Mauris lacus malesuada vel sem.',
  },
  {
    icon: '/assets/icons/tools-icon.svg',
    title: 'Sterilized & Disinfected Tools',
    description: 'Diam sit odio lobortis dui. Ipsum sollicitudin quis vitae nisi porttitor quis. Risus viverra nibh lacus amet.',
  },
  {
    icon: '/assets/icons/satisfaction-icon.svg',
    title: '100% Satisfaction Guarantee',
    description: 'Lectus vitae eu ut volutpat. Volutpat elit ultricies ac ultrices ac erat a. Est quis adipiscing blandit quam.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box component="section" id="why-choose-us" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{ 
                  display: 'block', 
                  mb: 2,
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                Why Choose Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  color: 'primary.main'
                }}
              >
                Why You Should Hire Us
              </Typography>
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ mb: 4 }}>
                      <FeatureIcon
                        src={feature.icon}
                        alt={feature.title}
                      />
                      <Typography
                        variant="h6"
                        sx={{ 
                          mb: 1, 
                          fontWeight: 600,
                          color: 'primary.main',
                          fontSize: '1.25rem'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/assets/cleaner-with-supplies.jpg"
              alt="Professional Cleaner with Supplies"
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