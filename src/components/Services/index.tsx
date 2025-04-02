import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, 
  faBuilding, 
  faWindowMaximize, 
  faPaintRoller, 
  faBroom, 
  faCity,
  faSprayCanSparkles,
  faLeaf,
  faCouch
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

interface ServiceItem {
  type?: 'custom';
  icon?: IconDefinition;
  iconSrc?: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
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
    title: 'Upholstery & Carpet Cleaning',
    description: 'Professional cleaning for carpets, furniture, sofas, and other upholstered items.',
  },
  {
    type: 'custom',
    iconSrc: '/assets/icons/sanitization-disinfection.svg',
    title: 'Sanitization & Disinfection',
    description: 'Professional sanitization and disinfection services to eliminate germs and create a healthier environment.',
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
            Excellence in Service
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Elevating Cleanliness to an Art Form
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Experience the difference with Zegar Elite Cleaning, where precision meets passion. Our expert team delivers exceptional results through innovative methods and unwavering commitment to quality.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          sx={{ 
            justifyContent: { 
              xs: 'center',
              sm: 'flex-start'
            } 
          }}
        >
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                maxWidth: {
                  xs: '100%',
                  sm: '50%',
                  md: '33.333%'
                }
              }}
            >
              <ServiceCard elevation={2}>
                <IconWrapper>
                  {service.type === 'custom' ? (
                    <img 
                      src={service.iconSrc} 
                      alt={service.title}
                      style={{ width: 32, height: 32 }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={service.icon!} />
                  )}
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