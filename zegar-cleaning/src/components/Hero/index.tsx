import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const VideoWrapper = styled(Box)({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
});

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <HeroSection component="section" id="home">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroContent>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ fontWeight: 500, mb: 2 }}
              >
                We Are Zegar Elite!
              </Typography>
              <Typography
                variant="h1"
                color="primary.main"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                We Are Best<br />Cleaning Services
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: '1.1rem' }}
              >
                Professional cleaning services for your home and business. Quality service guaranteed.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="#services"
                  sx={{ px: 4 }}
                >
                  Our Services
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  size="large"
                  startIcon={<FontAwesomeIcon icon={faPlay} />}
                  onClick={handleVideoOpen}
                >
                  Watch Video
                </Button>
              </Box>
            </HeroContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/hero-cleaner.jpg"
              alt="Professional Cleaner"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={videoOpen}
        onClose={handleVideoClose}
        maxWidth="md"
        fullWidth
      >
        <VideoWrapper>
          <iframe
            title="Cleaning Service Video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      </Dialog>
    </HeroSection>
  );
};

export default Hero; 