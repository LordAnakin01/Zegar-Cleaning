import React from 'react';
import { Box, Container, Typography, Grid, TextField, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import Bubbles from '../components/shared/Bubbles';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  minHeight: '400px',
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
}));

const HeroImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  height: '110%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  marginTop: theme.spacing(4),
  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

const ContactPage = () => {
  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Industrial Cleaning',
    'Window Cleaning',
    'Deep Cleaning',
    'Carpet Cleaning',
    'Upholstery Cleaning',
    'Move In/Out Cleaning',
    'Special Event Cleaning',
    'Disinfection & Sanitizing',
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <HeroContent>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Contact Us</Typography>
            </Box>
          </HeroContent>
        </Container>
        <HeroImage src="/assets/images/contact-hero.png" alt="Professional Cleaner" />
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Feel Free To Contact<br />
                For Any Kind Of Query
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Thank you for your interest in hiring Denver Cleaning Service Company.
                We consider communication with the customer.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="First Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Last Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Phone Number"
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <StyledTextField
                  select
                  fullWidth
                  label="Choose Services"
                  required
                  variant="outlined"
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </StyledTextField>

                <StyledTextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Send Us
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ mb: 6 }}>
                <ContactInfo>
                  <Phone />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Phone Number:
                    </Typography>
                    <Typography variant="body1">
                      +234 91 3269 4678
                    </Typography>
                  </Box>
                </ContactInfo>

                <ContactInfo>
                  <Email />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Mail Address:
                    </Typography>
                    <Typography variant="body1">
                      enquiries@zegarcleaning.com
                    </Typography>
                  </Box>
                </ContactInfo>

                <ContactInfo>
                  <LocationOn />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Office Address:
                    </Typography>
                    <Typography variant="body1">
                      House 16B Paradise Court Idu, FCT, Abuja.
                    </Typography>
                  </Box>
                </ContactInfo>

                <ContactInfo>
                  <AccessTime />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Business Hours:
                    </Typography>
                    <Typography variant="body1">
                      09:00AM - 05:00PM
                    </Typography>
                  </Box>
                </ContactInfo>
              </Box>

              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8766810661287!2d151.20544831521252!3d-33.86785098065584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3c3e43d875%3A0x1d017d69037a07c0!2s102%20Albert%20St%2C%20Brisbane%20City%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2sus!4v1645437254867!5m2!1sen!2sus"
                  title="Office Location"
                  allowFullScreen
                  loading="lazy"
                />
              </MapContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage; 