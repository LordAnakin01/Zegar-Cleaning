import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, faChevronLeft, faChevronRight,
  faSprayCan, faTools, faThumbsUp, faUsers
} from '@fortawesome/free-solid-svg-icons';
import Team from '../Team';
import Contact from '../Contact';
import Stats from '../Stats';

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
    background: 'linear-gradient(90deg, rgba(0,71,204,0.9) 50%, rgba(0,71,204,0.8) 100%)',
    zIndex: 1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const HeroImage = styled('img')(({ theme }) => ({
  maxHeight: '400px',
  position: 'absolute',
  right: 0,
  bottom: 0,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const CheckItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.3,
  },
}));

const TimelineYear = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  position: 'relative',
  zIndex: 1,
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const About = () => {
  const benefits = [
    'We are Committed',
    'Insured & Bonded',
    'Residential Cleaning',
    'Highly Rated Cleaning',
    'Trusted Professionals',
    'Commercial Cleaning',
  ];

  const services = [
    {
      icon: faSprayCan,
      title: 'Professional Grade Equipment',
      description: 'We use high-quality, professional-grade cleaning products and equipment.',
    },
    {
      icon: faUsers,
      title: 'Expert Team Members',
      description: 'Our experienced team delivers exceptional cleaning services.',
    },
    {
      icon: faTools,
      title: 'Modern Techniques',
      description: 'We employ the latest cleaning techniques and technologies.',
    },
    {
      icon: faThumbsUp,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee on all our services.',
    },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <Box>
              <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                About Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography component="span">Home</Typography>
                <Typography component="span">{'>'}</Typography>
                <Typography component="span">About Us</Typography>
              </Box>
            </Box>
            <HeroImage src="/assets/cleaner-hero.png" alt="Professional Cleaner" />
          </HeroContent>
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
                Eget lacus aliquet et malevuada ut mi nunc dictum tempus. Amet egestas suis faucibus socialist gravida enim maecenas massa. In euismod libero eu magna. Sit sapien vitae sed sit. Ut platea tempor lorem in vitae.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {benefits.map((benefit, index) => (
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
                href="#services"
                sx={{ px: 4 }}
              >
                View All Services
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ my: 6 }}>
            <Stats />
          </Box>

          {/* Timeline Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h6" component="span" color="primary" sx={{ display: 'block', mb: 2 }}>
              History
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              You Can Check Our Company Timeline.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
              A mauris morbus quis hac lectus non feugiat. Tempus eget mus tincidunt mauris lorem cras.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            <TimelineContainer>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                  <Box sx={{ color: 'primary.main', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                  </Box>
                </Grid>
                {['2018', '2019', '2020', '2021'].map((year, index) => (
                  <Grid item key={index}>
                    <TimelineYear>
                      <Typography>{year}</Typography>
                    </TimelineYear>
                  </Grid>
                ))}
                <Grid item>
                  <Box sx={{ color: 'primary.main', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                  </Box>
                </Grid>
              </Grid>
            </TimelineContainer>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h6" component="span" color="primary" sx={{ display: 'block', mb: 2 }}>
              Company Features
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Why Will You Choose Our Services?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
              Our agency can only be as strong as our people & because of this, our team have designed game changing services.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ServiceCard>
                  <Box sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 2 }}>
                    <FontAwesomeIcon icon={service.icon} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
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

      <Team />
      <Contact />
    </>
  );
};

export default About; 