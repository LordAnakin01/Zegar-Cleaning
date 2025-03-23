import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan, faUsers, faTools, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const FeatureIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
}));

const features = [
  {
    icon: faSprayCan,
    title: 'Professional Grade Disinfectant',
    description: 'We use high-quality, professional-grade cleaning products that effectively eliminate germs and bacteria.',
  },
  {
    icon: faUsers,
    title: 'Healthy Teams And Social Distance',
    description: 'Our teams follow strict health protocols and maintain social distancing for everyone\'s safety.',
  },
  {
    icon: faTools,
    title: 'Sterilized & Disinfected Tools',
    description: 'All our cleaning tools and equipment are thoroughly sterilized and disinfected before each use.',
  },
  {
    icon: faThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work with a 100% satisfaction guarantee on all our services.',
  },
];

const Features = () => {
  return (
    <Box component="section" id="features" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
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
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 3,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  1.3K
                </Typography>
                <Typography>Happy Customers</Typography>
              </Box>
            </Box>
          </Grid>
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
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Why You Should Hire Us
              </Typography>
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FeatureIcon>
                      <FontAwesomeIcon icon={feature.icon} />
                    </FeatureIcon>
                    <Typography
                      variant="h6"
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {feature.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 