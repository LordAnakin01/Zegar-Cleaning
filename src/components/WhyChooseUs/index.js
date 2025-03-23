import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan, faUsers, faTools, faStar } from '@fortawesome/free-solid-svg-icons';

const FeatureIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
}));

const features = [
  {
    icon: faSprayCan,
    title: 'Professional Grade Disinfectant',
    description: 'Scelerisque purus parturient mauris malesuada condimentum porttitor. Magna vitae scelerisque et neque.',
  },
  {
    icon: faUsers,
    title: 'Healthy Teams And Social Distance',
    description: 'Pretium vulputate est scelerisque pharetra facilisis vitae vel imperdiet enim. Mauris lacus malesuada vel sem.',
  },
  {
    icon: faTools,
    title: 'Sterilized & Disinfected Tools',
    description: 'Diam sit odio lobortis dui. Ipsum sollicitudin quis vitae nisi porttitor quis. Risus viverra nibh lacus amet.',
  },
  {
    icon: faStar,
    title: '100% Satisfaction Guarantee',
    description: 'Lectus vitae eu ut volutpat. Volutpat elit ultricies ac ultrices ac erat a. Est quis adipiscing blandit quam.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box component="section" id="why-choose-us" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="subtitle1"
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
            Why You Should Hire Us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <FeatureIcon>
                  <FontAwesomeIcon icon={feature.icon} />
                </FeatureIcon>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ 
          mt: 8,
          p: 4,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          textAlign: 'center'
        }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Ready to Experience Our Professional Cleaning Services?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Contact us today to schedule your cleaning service or get a free quote.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box component="a" href="#contact" sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                bgcolor: 'secondary.main',
                color: 'white',
              },
            }}>
              Contact Us
            </Box>
            <Box component="a" href="tel:+61234567899" sx={{
              bgcolor: 'transparent',
              border: '2px solid white',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                bgcolor: 'white',
                color: 'primary.main',
              },
            }}>
              Call Now
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 