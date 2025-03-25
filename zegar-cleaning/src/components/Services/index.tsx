import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBuilding, 
  faWindowMaximize, 
  faPaintRoller, 
  faBroom, 
  faCity,
  faSprayCanSparkles,
  faLeaf,
  faCouch,
  faHouseMedical
} from '@fortawesome/free-solid-svg-icons';

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  width: 80,
  height: 80,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  '& svg': {
    fontSize: 32,
  },
}));

const services = [
  {
    icon: faHome,
    title: 'Home Cleaning',
    description: 'Professional home cleaning services tailored to your needs and schedule.',
  },
  {
    icon: faBuilding,
    title: 'Office Cleaning',
    description: 'Keep your workplace clean and productive with our office cleaning services.',
  },
  {
    icon: faWindowMaximize,
    title: 'Window Cleaning',
    description: 'Crystal clear windows for your home or business, inside and out.',
  },
  {
    icon: faPaintRoller,
    title: 'Renovation Cleaning',
    description: 'Post-renovation cleanup to make your newly renovated space spotless.',
  },
  {
    icon: faBroom,
    title: 'Carpet Cleaning',
    description: 'Deep carpet cleaning to remove stains and refresh your carpets.',
  },
  {
    icon: faCity,
    title: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for all types of commercial spaces.',
  },
  {
    icon: faSprayCanSparkles,
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning service that reaches every corner and surface.',
  },
  {
    icon: faLeaf,
    title: 'Green Cleaning',
    description: 'Eco-friendly cleaning solutions that are safe for your family and the environment.',
  },
  {
    icon: faCouch,
    title: 'Upholstery Cleaning',
    description: 'Professional cleaning for furniture, sofas, and other upholstered items.',
  },
  {
    icon: faHouseMedical,
    title: 'Sanitization Services',
    description: 'Complete sanitization and disinfection for a healthier environment.',
  },
];

const Services = () => {
  return (
    <Box component="section" id="services" sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ display: 'block', mb: 2 }}
          >
            Company Features
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Why Will You Choose Our Services?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Our agency can only be as strong as our people & because of this, our team have designed game changing products.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard elevation={2}>
                <IconWrapper>
                  <FontAwesomeIcon icon={service.icon} />
                </IconWrapper>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 