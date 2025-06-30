import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Stats from '../Stats';
import Team from '../Team';
import Contact from '../Contact';
import Bubbles from '../shared/Bubbles';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

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

const CheckItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const TeamCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  textAlign: 'center',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #FFB800',
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

  const teamMembers = [
    {
      name: 'Gloria Collins Zegar',
      position: 'Founder & CEO',
      image: '/assets/team/team-1.jpg',
    },
    {
      name: 'Chinedu Okafor',
      position: 'Lead Cleaning Supervisor',
      image: '/assets/team/team-2.jpg',
    },
    {
      name: 'Amaka Nwosu',
      position: 'Sanitization & Health Safety Officer',
      image: '/assets/team/team-3.jpg',
    },
    {
      name: 'Tunde Adebayo',
      position: 'Operations & Equipment Manager',
      image: '/assets/team/team-4.jpg',
    },
    {
      name: 'Ifeoma Eze',
      position: 'Client Relations & Scheduling Coordinator',
      image: '/assets/team/team-5.jpg',
    },
  ];

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <HeroContent>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              About Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">About Us</Typography>
            </Box>
          </HeroContent>
        </Container>
        <HeroImage src="/assets/images/services-hero.png" alt="Professional Cleaning" />
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
                  <Box component="a" href="tel:+2349132694678" sx={{ color: 'white', textDecoration: 'none' }}>
                    <Typography variant="h6">CALL US</Typography>
                    <Typography>+234 91 3269 4678</Typography>
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
                The Zegar Elite Story
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Setting New Standards in Professional Cleaning
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Founded with a vision to revolutionize the cleaning industry in Nigeria, Zegar Elite has grown to become a trusted name in professional cleaning services. Our journey began with a commitment to excellence and has evolved into a comprehensive service provider that combines traditional values with modern cleaning technologies. We take pride in our highly trained staff, eco-friendly cleaning solutions, and our unwavering dedication to customer satisfaction.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  'Certified & Insured Professionals',
                  'Eco-Friendly Cleaning Solutions',
                  'Customized Service Plans',
                  'Satisfaction Guaranteed',
                  'Advanced Cleaning Technology',
                  'Flexible Scheduling Options'
                ].map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <CheckItem>
                      <FontAwesomeIcon icon={faCheck} />
                      <Typography>{benefit}</Typography>
                    </CheckItem>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/services"
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