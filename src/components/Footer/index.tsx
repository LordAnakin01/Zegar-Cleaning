import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Bubbles from '../shared/Bubbles';

const rise = keyframes`
  0% {
    transform: translateY(120%);
    opacity: 0;
  }
  20% {
    opacity: 0.15;
  }
  100% {
    transform: translateY(-120%);
    opacity: 0;
  }
`;

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  overflow: 'hidden',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.08)',
    animation: `${rise} 10s infinite`,
    bottom: 0,
    animationTimingFunction: 'ease-in',
  },
  '&::before': {
    left: '15%',
    animationDelay: '0s',
  },
  '&::after': {
    left: '45%',
    width: '160px',
    height: '160px',
    animationDelay: '5s',
  },
  '& .bubble': {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.06)',
    animation: `${rise} 12s infinite`,
    bottom: 0,
    animationTimingFunction: 'ease-in',
    '&:nth-of-type(1)': {
      width: '180px',
      height: '180px',
      left: '25%',
      animationDelay: '2s',
    },
    '&:nth-of-type(2)': {
      width: '100px',
      height: '100px',
      left: '65%',
      animationDelay: '7s',
    },
    '&:nth-of-type(3)': {
      width: '140px',
      height: '140px',
      left: '85%',
      animationDelay: '4s',
    },
    '&:nth-of-type(4)': {
      width: '160px',
      height: '160px',
      left: '35%',
      animationDelay: '6s',
    },
    '&:nth-of-type(5)': {
      width: '120px',
      height: '120px',
      left: '55%',
      animationDelay: '3s',
    },
    '&:nth-of-type(6)': {
      width: '90px',
      height: '90px',
      left: '75%',
      animationDelay: '8s',
    },
    '&:nth-of-type(7)': {
      width: '130px',
      height: '130px',
      left: '15%',
      animationDelay: '1s',
    },
  },
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-3px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  display: 'block',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Logo = styled('img')({
  height: 50,
  marginBottom: 16,
});

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <FooterWrapper component="footer" sx={{ pt: 8, pb: 2 }}>
      <Bubbles count={10} minSize={20} maxSize={60} opacity={0.05} />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Logo src="/assets/logo.svg" alt="Goclean" />
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Tempor faucibus et pharetra ut. Nunc vestibulum egestas dignissim imperdiet nisi nunc. Cras tincidunt pellentesque dictum interdum at. Lectus congue sagittis sem cras et diam phasellus.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialIcon>
                <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialIcon>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Useful Links
            </Typography>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="#services">Our Services</FooterLink>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#schedule">Schedule Appointment</FooterLink>
            <FooterLink href="#testimonials">Testimonials</FooterLink>
            <FooterLink href="#contact">Contact Us</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Our Services
            </Typography>
            <FooterLink href="#home-cleaning">Home Cleaning</FooterLink>
            <FooterLink href="#office-cleaning">Office Cleaning</FooterLink>
            <FooterLink href="#window-cleaning">Window Cleaning</FooterLink>
            <FooterLink href="#renovation-cleaning">Renovation Cleaning</FooterLink>
            <FooterLink href="#carpet-cleaning">Carpet Cleaning</FooterLink>
            <FooterLink href="#commercial-cleaning">Commercial Cleaning</FooterLink>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              Urna libero porta pellentesque sed suspendisse ut non.
            </Typography>
            <Box component="form" onSubmit={handleNewsletterSubmit}>
              <TextField
                fullWidth
                placeholder="Enter your email address"
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ py: 1 }}
              >
                Submit Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 6,
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © Copyright Zegar Elite Cleaning 2024. All right reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Created by The Anakin Media Limited
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 