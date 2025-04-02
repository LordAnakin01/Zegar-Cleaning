import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  height: '100%',
  '& svg': {
    fontSize: '1.25rem',
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    marginTop: '4px',
  },
}));

const services = [
  'Home Cleaning',
  'Office Cleaning',
  'Window Cleaning',
  'Renovation Cleaning',
  'Carpet Cleaning',
  'Commercial Cleaning'
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box component="section" id="contact" sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                component="span"
                color="primary"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  display: 'block',
                  mb: 1
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  lineHeight: 1.2,
                  mb: 2,
                  '& .break': {
                    display: 'block'
                  }
                }}
              >
                We're Here to Help
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
                Have a question or need a custom cleaning plan?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Thank you for considering Zegar Elite Cleaning Services. We value open communication and are always happy to assist you.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ContactInfo>
                  <FontAwesomeIcon icon={faPhone} />
                  <Box>
                    <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Phone Number:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      +234 91 3269 4678
                    </Typography>
                  </Box>
                </ContactInfo>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ContactInfo>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Box>
                    <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Mail Address:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      enquiries@zegarcleaning.com
                    </Typography>
                  </Box>
                </ContactInfo>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ContactInfo>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <Box>
                    <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Office Address:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      House 16B Paradise Court Idu, FCT, Abuja.
                    </Typography>
                  </Box>
                </ContactInfo>
              </Grid>

              <Grid item xs={12} sm={6}>
                <ContactInfo>
                  <FontAwesomeIcon icon={faClock} />
                  <Box>
                    <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Business Hours:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      09:00AM - 05:00PM
                    </Typography>
                  </Box>
                </ContactInfo>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 0,
                ml: { md: 4 },
                '& .MuiTextField-root': {
                  backgroundColor: 'background.paper',
                  borderRadius: 1,
                }
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="First Name*"
                    variant="outlined"
                    sx={{ bgcolor: 'background.paper' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Last Name*"
                    variant="outlined"
                    sx={{ bgcolor: 'background.paper' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Email Address*"
                    type="email"
                    variant="outlined"
                    sx={{ bgcolor: 'background.paper' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number*"
                    variant="outlined"
                    sx={{ bgcolor: 'background.paper' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    placeholder="Choose Services*"
                    sx={{ bgcolor: 'background.paper' }}
                  >
                    <MenuItem value="" disabled>Choose Services*</MenuItem>
                    {services.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Message..."
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ bgcolor: 'background.paper' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 1
                    }}
                  >
                    Send Us
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