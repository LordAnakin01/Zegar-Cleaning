import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const Footer = () => {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', pt: 8, pb: 2 }}>
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
                  <FontAwesomeIcon icon={faLinkedin} />
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
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © Copyright Goclean 2024. All right reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Created by The_Krishna
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 