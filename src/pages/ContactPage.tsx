import React from 'react';
import { Box, Container, Typography, Grid, TextField, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import Bubbles from '../components/shared/Bubbles';
import { keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

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
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <HeroContent>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Contact Us</Typography>
            </Box>
          </HeroContent>
        </Container>
        <HeroImage src="/assets/images/services-hero.png" alt="Professional Cleaning" />
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Feel Free To Contact Us For Any Kind Of Query:
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Thank you for considering Zegar Elite Cleaning Services. We value open communication and are always happy to assist you.
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
                  src="https://www.google.com/maps?q=House+16B+Paradise+Court+Idu,+FCT,+Abuja&output=embed"
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