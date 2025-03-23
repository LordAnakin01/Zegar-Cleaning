import React from 'react';
import { Box, Container, Typography, Grid, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, faTrophy, faUsers, faStar, faUserTie, faChevronLeft, faChevronRight,
  faSprayCan, faTools, faThumbsUp, faPhone, faEnvelope, faLocationDot, faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faTwitter, faInstagram, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import Team from '../Team';
import Contact from '../Contact';

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

const StatBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(6),
  borderRadius: theme.spacing(1),
  textAlign: 'center',
  '& svg': {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
  },
}));

const TimelinePoint = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '&:last-child::after': {
    display: 'none',
  },
}));

const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  '& svg': {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    opacity: 0.8,
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

const TeamMemberCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& svg': {
    fontSize: '1.5rem',
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
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

  const stats = [
    { icon: faTrophy, count: '1200+', label: 'PROJECT DONE' },
    { icon: faUsers, count: '1300+', label: 'HAPPY CLIENTS' },
    { icon: faStar, count: '18+', label: 'AWARD WINNER' },
    { icon: faUserTie, count: '650+', label: 'TEAM MEMBER' },
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

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Cleaning Manager',
      image: '/assets/team/team-1.jpg',
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Cleaner',
      image: '/assets/team/team-2.jpg',
    },
    {
      name: 'Michael Brown',
      position: 'Equipment Specialist',
      image: '/assets/team/team-3.jpg',
    },
    {
      name: 'Emily Davis',
      position: 'Customer Relations',
      image: '/assets/team/team-4.jpg',
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
                Eget lacus aliquet et malevuada ut mi nunc dictum tempus. Amet egestas suis faucibus socialist gravida enim maecenas massa. In euismod libero eu magna. Sit sapien vitae sed sit. Ut platea tempor lorem in vitae. Quis tristique amet tellus sit ac rhoncus mauris scelerisque nibh. Consectetur porttitor laoreet enim non sed ac turrum rhoncus semectus sollicitudin at.
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

          <StatsSection>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <StatItem>
                    <FontAwesomeIcon icon={stat.icon} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {stat.count}
                    </Typography>
                    <Typography variant="body1">
                      {stat.label}
                    </Typography>
                  </StatItem>
                </Grid>
              ))}
            </Grid>
          </StatsSection>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h6"
              component="span"
              color="primary"
              sx={{ display: 'block', mb: 2 }}
            >
              History
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              You Can Check Our Company Timeline.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
            >
              A mauris morbus quis hac lectus non feugiat. Tempus eget mus tincidunt mauris lorem cras. Sed diam quis at scelerisque imperdiet risus lectus. Id enim facilisis tempus pulvinar id viverra faucibus in. Sed enim dignissim.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h4" color="primary.main" sx={{ fontWeight: 'bold', mb: 2 }}>
                Launch Company
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Praesent augue sed magna mi senectus. Morbi adipiscing lacinia sceleris a integer gravida vitae non. Aliquam venenatis nulla suspendisse dolor sit amet enim odio nunc. Orci rhoncus id feugiat ullamcorper non elementum. Et bibendum in ante auctor mauris pretium et mattis natoque.
              </Typography>
            </Box>

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