import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Bubbles from '../components/shared/Bubbles';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

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
    background: 'linear-gradient(90deg, rgba(66,66,66,0.9) 50%, rgba(66,66,66,0.8) 100%)',
    zIndex: 1,
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
}));

const PromoCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
}));

const DownloadCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
}));

interface FormData {
  service: string;
  cleaningType: string;
  facilityType: string;
  facilityName: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  windows: string;
  hasSupplies: string;
  hourlyRate: string;
  extras: string[];
  name: string;
  phone: string;
  email: string;
  pets: string;
  streetAddress: string;
  city: string;
  zip: string;
  additionalDetails: string;
}

const QuotePage = () => {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    cleaningType: '',
    facilityType: '',
    facilityName: '',
    rooms: '3',
    bedrooms: '2',
    bathrooms: '3',
    windows: '12',
    hasSupplies: 'yes',
    hourlyRate: '1',
    extras: [],
    name: '',
    phone: '',
    email: '',
    pets: '1',
    streetAddress: '',
    city: '',
    zip: '',
    additionalDetails: '',
  });

  const [total, setTotal] = useState(230.00);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    calculateTotal();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    calculateTotal();
  };

  const handleExtrasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      extras: checked 
        ? [...prev.extras, value]
        : prev.extras.filter(item => item !== value)
    }));
    calculateTotal();
  };

  const calculateTotal = () => {
    let basePrice = 40 * parseInt(formData.hourlyRate);
    
    formData.extras.forEach(extra => {
      switch(extra) {
        case 'windows':
          basePrice += 20;
          break;
        case 'cabinets':
          basePrice += 65;
          break;
        case 'deep':
          basePrice += 70;
          break;
        case 'disinfection':
          basePrice += 170;
          break;
        case 'coronavirus':
          basePrice += 185;
          break;
      }
    });
    
    setTotal(basePrice);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Get A Quote
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Get A Quote</Typography>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <FormSection>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  Request An Estimate
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Get A Quote
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ready to experience the Zegar Elite difference? Fill out our quick quote form below, and we'll provide you with a detailed estimate tailored to your specific cleaning needs. Our team is committed to delivering exceptional service at competitive rates.
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit}>
                <StyledFormControl>
                  <InputLabel>Select Service Type</InputLabel>
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleSelectChange}
                    label="Select Service Type"
                  >
                    <MenuItem value="residential">Residential Cleaning</MenuItem>
                    <MenuItem value="commercial">Commercial Cleaning</MenuItem>
                    <MenuItem value="industrial">Industrial Cleaning</MenuItem>
                    <MenuItem value="specialized">Specialized Cleaning</MenuItem>
                  </Select>
                </StyledFormControl>

                <StyledFormControl>
                  <InputLabel>Indicate type of cleaning</InputLabel>
                  <Select
                    name="cleaningType"
                    value={formData.cleaningType}
                    onChange={handleSelectChange}
                    label="Indicate type of cleaning"
                  >
                    <MenuItem value="weekly">Weekly Regular</MenuItem>
                    <MenuItem value="biweekly">Bi-weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </Select>
                </StyledFormControl>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledFormControl>
                      <InputLabel>Facility type</InputLabel>
                      <Select
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleSelectChange}
                        label="Facility type"
                      >
                        <MenuItem value="government">Government Building</MenuItem>
                        <MenuItem value="commercial">Commercial Building</MenuItem>
                        <MenuItem value="residential">Residential Building</MenuItem>
                      </Select>
                    </StyledFormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Facility name"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Room(s)?</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Rooms"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Windows"
                      name="windows"
                      value={formData.windows}
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>

                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                  Do you have all the necessary cleaning supplies?
                </Typography>
                <RadioGroup
                  name="hasSupplies"
                  value={formData.hasSupplies}
                  onChange={handleSelectChange}
                  sx={{ mb: 4 }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>

                <Typography variant="h6" sx={{ mb: 2 }}>Hourly Rate</Typography>
                <RadioGroup
                  name="hourlyRate"
                  value={formData.hourlyRate}
                  onChange={handleSelectChange}
                  sx={{ mb: 4 }}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1 Hour ($40)" />
                  <FormControlLabel value="2" control={<Radio />} label="2 Hours ($70)" />
                  <FormControlLabel value="3" control={<Radio />} label="3 Hours ($100)" />
                  <FormControlLabel value="4" control={<Radio />} label="4 Hours ($120)" />
                </RadioGroup>

                <Typography variant="h6" sx={{ mb: 2 }}>Select Extras</Typography>
                <Box sx={{ mb: 4 }}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleExtrasChange} value="windows" />}
                    label="Inside Windows (+$20)"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleExtrasChange} value="cabinets" />}
                    label="Inside Cabinets (+$65)"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleExtrasChange} value="deep" />}
                    label="Deep Cleaning (+$70)"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleExtrasChange} value="disinfection" />}
                    label="Disinfection Services (+$170)"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleExtrasChange} value="coronavirus" />}
                    label="Coronavirus Cleaning (+$185)"
                  />
                </Box>

                <Typography variant="h6" sx={{ mb: 3 }}>Total: ${total.toFixed(2)}</Typography>

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Kindly provide your personal information's below:
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="How many pets live in the home?"
                      type="number"
                      name="pets"
                      value={formData.pets}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Details"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{ mt: 4, py: 1.5 }}
                >
                  Submit Request
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <PromoCard>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Protect Your Employees And Guests From Covid-19 By Using Our Disinfection Expertise!!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                  We are backed by over 10+ years of experience use advanced cleaning products and processes.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    component={Link}
                    to="/pricing"
                  >
                    Check Our Pricing Plans
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    fullWidth
                    sx={{ borderColor: 'white', '&:hover': { borderColor: 'white' } }}
                  >
                    Meet Our Experts
                  </Button>
                </Box>
              </PromoCard>

              <DownloadCard>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Download Brochure
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<Box component="img" src="/assets/icons/download.svg" sx={{ width: 20 }} />}
                >
                  Company Brochure 2024
                </Button>
              </DownloadCard>
            </Grid>
          </Grid>
        </Container>
      </FormSection>

      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default QuotePage; 