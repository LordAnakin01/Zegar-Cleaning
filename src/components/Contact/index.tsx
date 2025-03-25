import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

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
            Feel Free To Contact<br />
            For Any Kind Of Query.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Thank you for your interest in hiring Denver Cleaning Service Company.
            We consider communication with the customer.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <ContactInfo>
              <Phone />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone Number:
                </Typography>
                <Typography variant="body1">
                  +61 (234) 567 8999
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
                  info@goclean.com
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
                  122 Albert St, MB, AU
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <AccessTime />
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
            <Box component="form" sx={{ display: 'grid', gap: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="First Name*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Last Name*"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Email Address*"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    placeholder="Phone Number*"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <StyledTextField
                select
                fullWidth
                placeholder="Choose Services*"
                variant="outlined"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="" disabled selected>Choose Services*</option>
                <option value="home">Home Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="carpet">Carpet Cleaning</option>
              </StyledTextField>

              <StyledTextField
                fullWidth
                placeholder="Message..."
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
                Send Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 