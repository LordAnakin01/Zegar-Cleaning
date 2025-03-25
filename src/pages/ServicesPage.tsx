import React, { useState } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '../types/services';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Bubbles from '../components/shared/Bubbles';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  minHeight: '500px',
  overflow: 'hidden',
}));

const HeroImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  height: '110%',
  animation: `${float} 6s ease-in-out infinite`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ServiceIcon = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  width: 80,
  height: 80,
  borderRadius: theme.spacing(2),
  backgroundColor: active ? theme.palette.secondary.main : theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '& img': {
    width: 40,
    height: 40,
    filter: 'brightness(0) invert(1)',
  },
}));

const ServiceDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  marginTop: theme.spacing(6),
  paddingBottom: theme.spacing(8),
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const navigate = useNavigate();

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '50%' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Our Services Tab</Typography>
            </Box>
          </Box>
        </Container>
        <HeroImage src="/assets/images/cleaner-hero.png" alt="Professional Cleaner" />
      </HeroSection>

      <ServicesSection>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <img src="/assets/icons/services-icon.svg" alt="" style={{ width: 24, height: 24 }} />
              <Typography variant="h6" color="primary">
                Our Services
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              What We Do For Our Customers
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Risus ullamcorper placerat sollicitudin nibh suspendisse. A viverra viverra sit tempus est. 
              Lacus ut viverra pharetra dictumst. Integer sit morbi ut purus elit amet.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', my: 4 }}>
            <IconButton
              sx={{ position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => {/* Handle scroll left */}}
            >
              <ChevronLeft />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'hidden', py: 2 }}>
              {services.map((service) => (
                <Box
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  sx={{ cursor: 'pointer', minWidth: 200 }}
                >
                  <ServiceIcon active={service.title === activeService.title}>
                    <img src={service.icon} alt={service.title} />
                  </ServiceIcon>
                  <Typography align="center" sx={{ mt: 1 }}>
                    {service.title}
                  </Typography>
                </Box>
              ))}
            </Box>
            <IconButton
              sx={{ position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => {/* Handle scroll right */}}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          <ServiceDetails>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" color="primary.main" gutterBottom>
                {activeService.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                {activeService.description}
              </Typography>
              <Typography variant="h6" color="primary.main" sx={{ mb: 3 }}>
                Start From
              </Typography>
              <Typography variant="h4" color="primary.main" sx={{ mb: 4 }}>
                ${activeService.price.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => handleLearnMore(activeService.id)}
                sx={{ 
                  py: 1.5, 
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={activeService.image}
                alt={activeService.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 16,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              />
            </Box>
          </ServiceDetails>
        </Container>
      </ServicesSection>

      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default ServicesPage; 