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
  padding: theme.spacing(8, 0),
  position: 'relative',
  minHeight: '340px',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}E6 50%, ${theme.palette.primary.main}CC 100%)`,
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServiceCarousel = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .MuiIconButton-root': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[500],
    },
    zIndex: 1,
  },
  '& .prev': {
    left: -20,
  },
  '& .next': {
    right: -20,
  },
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

const HeroImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: '-80px',
  height: '90%',
  zIndex: 1,
  objectFit: 'contain',
  animation: `${float} 6s ease-in-out infinite`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const visibleServices = services.slice(currentIndex, currentIndex + 5);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + 5 < services.length;

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(Math.min(services.length - 5, currentIndex + 1));
  };

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <HeroContent>
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
              <Typography component="span">Our Services</Typography>
            </Box>
          </HeroContent>
        </Container>
        <HeroImage src="/assets/images/services-hero.png" alt="Professional Cleaning" />
      </HeroSection>

      <ServicesSection>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/services-icon.svg"
                alt=""
                sx={{
                  width: 24,
                  height: 24,
                  color: 'primary.main',
                  filter: 'invert(31%) sepia(97%) saturate(1789%) hue-rotate(208deg) brightness(97%) contrast(101%)'
                }}
              />
              <Typography variant="h6" color="primary">
                Our Services
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              What We Do For Our Customers
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              At Zegar Elite Cleaning Services, we offer a full spectrum of high-quality cleaning solutions tailored to both residential and commercial spaces. Whether you need a one-time deep clean, routine maintenance, or specialized post-construction care, our expert team is equipped to handle it all with precision and professionalism.{'\n\n'}
              Every service is delivered with attention to detail, eco-friendly products, and a commitment to customer satisfaction. Explore our services and discover how we can help you enjoy a cleaner, healthier environment—every day.
            </Typography>
          </Box>

          <ServiceCarousel>
            <IconButton
              className="prev"
              onClick={handlePrevClick}
              disabled={!canScrollLeft}
            >
              <ChevronLeft />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'hidden', py: 2, px: 4 }}>
              {visibleServices.map((service) => (
                <Box
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  sx={{
                    flex: '0 0 calc(20% - 12px)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <ServiceIcon active={service.id === activeService.id}>
                    <img src={service.icon} alt={service.title} />
                  </ServiceIcon>
                  <Typography
                    align="center"
                    sx={{
                      mt: 1,
                      fontWeight: service.id === activeService.id ? 600 : 400,
                      color: service.id === activeService.id ? 'primary.main' : 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              ))}
            </Box>
            <IconButton
              className="next"
              onClick={handleNextClick}
              disabled={!canScrollRight}
            >
              <ChevronRight />
            </IconButton>
          </ServiceCarousel>

          <ServiceDetails>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" color="primary.main" gutterBottom>
                {activeService.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                {activeService.description}
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