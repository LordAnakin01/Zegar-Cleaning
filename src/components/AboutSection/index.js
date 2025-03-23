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

const StyledImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .customer-count': {
    position: 'absolute',
    bottom: -20,
    right: -20,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    textAlign: 'center',
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('sm')]: {
      right: 20,
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
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <StyledImage>
              <Box
                component="img"
                src="/assets/about-cleaning.jpg"
                alt="Professional Cleaner"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box className="customer-count">
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  1.3K
                </Typography>
                <Typography>
                  Happy<br />Customers
                </Typography>
              </Box>
            </StyledImage>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{ display: 'block', mb: 2 }}
              >
                About Goclean
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                We Are Best Company<br />In Cleaning
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Efficient, Friendly, Residential & Commercial Cleaners Near Australia, your satisfaction is guaranteed!
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