import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import Bubbles from '../shared/Bubbles';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showVideo?: boolean;
}

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  overflow: 'hidden',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  '&::before': {
    top: '-250px',
    right: '-250px',
  },
  '&::after': {
    bottom: '-250px',
    left: '-250px',
  },
}));

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '600px',
  objectFit: 'contain',
  animation: `${float} 6s ease-in-out infinite`,
  marginBottom: '-50px',
});

const PlayButton = styled(Button)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  minWidth: 'unset',
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '& .pulse-ring': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.5,
    animation: `${pulse} 2s infinite`,
  },
}));

const Hero: React.FC<HeroProps> = ({
  title = "Professional Cleaning Services for Your Home & Office",
  subtitle = "Experience the difference with our expert cleaning services. We deliver spotless results that exceed your expectations.",
  showVideo = true,
}) => {
  const handleVideoPlay = () => {
    // Implement video play functionality
    console.log('Play video');
  };

  const handleVideoOpen = () => {
    // Implement video open functionality
    console.log('Open video');
  };

  return (
    <HeroWrapper>
      <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
      <Container>
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          sx={{
            minHeight: '600px',
            py: { xs: 4, md: 0 }
          }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, mb: 2, color: 'white' }}
              >
                Welcome to Zegar Elite
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  color: 'white'
                }}
              >
                Elevating Spaces<br />
                Through Excellence
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Experience the pinnacle of professional cleaning services with Zegar Elite. We combine innovative techniques with meticulous attention to detail, ensuring your space reflects the excellence you deserve.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  to="/quote"
                  sx={{ px: 4 }}
                >
                  Get Your Quote
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={handleVideoOpen}
                  startIcon={<FontAwesomeIcon icon={faPlay} />}
                >
                  Watch How We Work
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              height: '100%'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                  zIndex: 0,
                },
              }}
            >
              <HeroImage
                src="/assets/images/hero-cleaning.png"
                alt="Professional Cleaning Services"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroWrapper>
  );
};

export default Hero; 