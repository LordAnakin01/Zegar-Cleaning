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
  const handleSubmit = (event: React.FormEvent) => {
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
            Feel Free To Contact For Any Kind Of Query
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Thank you for your interest in our cleaning services. We're here to help and answer any questions you may have.
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
                  Mail Address:
                </Typography>
                <Typography variant="body1">
                  info@goclean.com
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
                  122 Albert St, MB, AU
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <FontAwesomeIcon icon={faClock} />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Opening Time:
                </Typography>
                <Typography variant="body1">
                  08:00 AM - 05:00 PM
                </Typography>
              </Box>
            </ContactInfo>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" type="email" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" multiline rows={4} required />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
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