import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
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

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <img src="/assets/icons/contact-icon.svg" alt="" style={{ width: 24, height: 24 }} />
            <Typography variant="h6" color="primary">
              Contact Us
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
            Let's Discuss Your Cleaning Needs
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Ready to experience the Zegar Elite difference? Our dedicated team is here to understand your needs and create a tailored cleaning solution that works for you.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <ContactInfo>
              <FontAwesomeIcon icon={faPhone} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Call Us Directly:
                </Typography>
                <Typography variant="body1">
                  +234 91 3269 4678
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faEnvelope} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email Us:
                </Typography>
                <Typography variant="body1">
                  enquiries@zegarcleaning.com
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faLocationDot} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Visit Our Office:
                </Typography>
                <Typography variant="body1">
                  House 16B Paradise Court Idu, FCT, Abuja
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faClock} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Business Hours:
                </Typography>
                <Typography variant="body1">
                  09:00AM - 05:00PM
                </Typography>
              </Box>
            </ContactInfo>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" sx={{ display: 'grid', gap: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Your First Name*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Your Last Name*"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Your Email Address*"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Your Phone Number*"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <StyledTextField
                select
                fullWidth
                placeholder="Select Service*"
                variant="outlined"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="" disabled selected>Select Your Desired Service*</option>
                <option value="home">Residential Cleaning</option>
                <option value="office">Commercial Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="carpet">Carpet & Upholstery</option>
                <option value="window">Window Cleaning</option>
                <option value="other">Other Services</option>
              </StyledTextField>

              <StyledTextField
                fullWidth
                placeholder="Tell us about your cleaning needs..."
                multiline
                rows={4}
                variant="outlined"
              />

              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Request a Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 