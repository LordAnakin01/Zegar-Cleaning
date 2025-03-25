import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Stats from '../Stats';
import Team from '../Team';
import Contact from '../Contact';
import Bubbles from '../shared/Bubbles';

interface FeatureItem {
  text: string;
}

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: FeatureItem[];
  imagePath?: string;
}

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  backgroundImage: 'url(/assets/bubbles-bg.png)',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  minHeight: '400px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, rgba(66, 66, 66, 0.9) 50%, rgba(66, 66, 66, 0.8) 100%)`,
    zIndex: 1,
  },
}));

const AboutWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(255,255,255,1) 100%)',
    zIndex: -1,
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '90%',
    height: '90%',
    background: theme.palette.primary.main,
    opacity: 0.1,
    borderRadius: theme.spacing(2),
    transform: 'rotate(-3deg)',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .icon': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    fontSize: '0.8rem',
  },
}));

const About: React.FC = () => {
  const benefits = [
    'We are Committed',
    'Insured & Bonded',
    'Residential Cleaning',
    'Highly Rated Cleaning',
    'Trusted Professionals',
    'Commercial Cleaning',
  ];

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              About Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography component="span">Home</Typography>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">About Us</Typography>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="/assets/about-cleaning.jpg"
                  alt="Professional Cleaning Service"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: -20,
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 3,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box component="a" href="tel:+61250325-9988" sx={{ color: 'white', textDecoration: 'none' }}>
                    <Typography variant="h6">CALL US</Typography>
                    <Typography>+61 (250) 325-9988</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
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
                Committed to Give High Quality Cleaning Services
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                With over a decade of experience in the cleaning industry, we've built a reputation for delivering exceptional cleaning services that transform spaces and exceed expectations. Our commitment to quality, attention to detail, and use of eco-friendly products sets us apart.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <FontAwesomeIcon icon={faCheck} color="#FFB800" />
                      <Typography>{benefit}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#services"
                sx={{ px: 4 }}
              >
                View All Services
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Stats />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default About; 