import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    marginBottom: theme.spacing(4),
  },
}));

const Hero = () => {
  return (
    <HeroSection component="section" id="home">
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
          <HeroContent>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontWeight: 500, mb: 2 }}
            >
              We Are Goclean!
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                color: 'primary.main',
              }}
            >
              We Are Best<br />Cleaning Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Enim sed mi mi arcu vel maecenas non odio ornare. Libero justo lectus cursus magna libero ut urna porttitor euismod. Cras sit.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#services"
                sx={{ px: 4 }}
              >
                Our Services
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                sx={{ px: 4 }}
              >
                Watch Video
              </Button>
            </Box>
          </HeroContent>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src="/assets/hero-cleaner.jpg"
              alt="Professional Cleaner"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero; 