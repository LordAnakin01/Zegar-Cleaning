import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

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

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="section" id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h6" component="span" color="primary" sx={{ display: 'block', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Get In Touch With Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Have questions about our services? Ready to schedule a cleaning? We're here to help!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <ContactInfo>
              <FontAwesomeIcon icon={faPhone} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone Number:
                </Typography>
                <Typography variant="body1">
                  +61 234 567 8899
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faEnvelope} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email Address:
                </Typography>
                <Typography variant="body1">
                  info@zegarelite.com
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faLocationDot} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Office Address:
                </Typography>
                <Typography variant="body1">
                  122 Albert St, Melbourne, AU
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faClock} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Working Hours:
                </Typography>
                <Typography variant="body1">
                  Mon - Fri: 09:00 AM - 06:00 PM
                </Typography>
              </Box>
            </ContactInfo>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 