import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
}));

const FloatingStats = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -20,
  right: -40,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%': {
      transform: 'translateX(0px)',
    },
    '50%': {
      transform: 'translateX(10px)',
    },
    '100%': {
      transform: 'translateX(0px)',
    },
  },
}));

const services = [
  'Residential Cleaning Services Near You!',
  'Commercial Cleaning Service In Australia',
  'Professional Floor & Carpet Cleaning',
];

const AboutSection = () => {
  return (
    <Box component="section" id="about" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="/assets/about-image.jpg"
                alt="About Our Cleaning Service"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <FloatingStats>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  1.3K+
                </Typography>
                <Typography>Happy Customers</Typography>
              </FloatingStats>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{ display: 'block', mb: 2 }}
              >
                About Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Professional Cleaning Service You Can Trust
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                We are dedicated to providing top-quality cleaning services with attention to detail and customer satisfaction. Our experienced team uses professional-grade equipment and eco-friendly products to ensure the best results.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Augue tortor mauris tempus pretium nunc eget sit. Malesuada ultricies tellus massa aliquam turpis. Phasellus orci ac habitant cras vitae in cursus neque habitasse. Neque velit dapibus magnis at. Lectus nec.
              </Typography>
              <Box sx={{ mb: 4 }}>
                {services.map((service, index) => (
                  <CheckItem key={index}>
                    <FontAwesomeIcon icon={faCheck} />
                    <Typography>{service}</Typography>
                  </CheckItem>
                ))}
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ px: 4 }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection; 