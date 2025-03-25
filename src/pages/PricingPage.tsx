import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
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
    background: `linear-gradient(90deg, rgba(66, 66, 66, 0.9) 50%, rgba(66, 66, 66, 0.8) 100%)`,
    zIndex: 1,
  },
}));

const CouponCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  position: 'relative',
  height: '100%',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: -15,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: -15,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: '50%',
  },
}));

const PricingCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const PopularBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  right: -30,
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: '4px 30px',
  transform: 'rotate(45deg)',
}));

const FeatureList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: '2rem 0',
  '& li': {
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: theme.palette.text.secondary,
    },
  },
}));

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillingCycle(event.target.value as 'monthly' | 'yearly');
  };

  const pricingPlans = [
    {
      title: 'Residential Offers',
      price: billingCycle === 'monthly' ? 150 : 1500,
      features: [
        'Window sills & ledges',
        'Hard surface floors',
        'Remove cobwebs',
        'Empty trash',
      ],
      buttonColor: 'secondary',
    },
    {
      title: 'Commercial Offers',
      price: billingCycle === 'monthly' ? 250 : 2500,
      features: [
        'Window sills & ledges',
        'Hard surface floors',
        'Remove cobwebs',
        'Empty trash',
      ],
      popular: true,
      buttonColor: 'primary',
    },
    {
      title: 'Outdoor Offers',
      price: billingCycle === 'monthly' ? 350 : 3500,
      features: [
        'Window sills & ledges',
        'Hard surface floors',
        'Remove cobwebs',
        'Empty trash',
      ],
      buttonColor: 'secondary',
    },
  ];

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Pricing
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Pricing</Typography>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
            >
              Discounts & Offers
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
              Get Coupons
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 4 }}>
              Proin sed nunc egestas malesuada ornare eu vitae lectus elementum. Amet lectus aliquam ut ut nisl egestas orci viverra. Lacus sed pretium ornare fusce. Sed tincidunt neque tempor leo pellentesque.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <CouponCard>
                  <Typography variant="h3" sx={{ mb: 2, color: 'secondary.main' }}>
                    $25 OFF
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    2 BHK FULL HOME CLEANING
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Code: 252BHK
                  </Typography>
                </CouponCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <CouponCard>
                  <Typography variant="h3" sx={{ mb: 2, color: 'secondary.main' }}>
                    $40 OFF
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    FULL OFFICE CLEANING
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Code: 40OFFICE
                  </Typography>
                </CouponCard>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}
            >
              Pricing Plan
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              We Are Offering The Best<br />
              Pricing to Help You!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
              Vitae cras purus est eget. Sit amet gravida blandit mauris dis nisl imperdiet neque. Non quis potenti enim sit amet mattis. Rhoncus gravida at morbi sed etiam risus turpis.
            </Typography>

            <RadioGroup
              row
              value={billingCycle}
              onChange={handleBillingChange}
              sx={{
                justifyContent: 'center',
                mb: 6,
                '.MuiFormControlLabel-label': { color: 'text.primary' },
              }}
            >
              <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
              <FormControlLabel value="yearly" control={<Radio />} label="Yearly" />
            </RadioGroup>

            <Grid container spacing={4}>
              {pricingPlans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <PricingCard>
                    {plan.popular && (
                      <PopularBadge>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          POPULAR
                        </Typography>
                      </PopularBadge>
                    )}
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      {plan.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 3 }}>
                      <Typography component="span" sx={{ fontSize: '1.5rem', mr: 1 }}>
                        $
                      </Typography>
                      <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {plan.price}
                      </Typography>
                      <Typography component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                        Per Month
                      </Typography>
                    </Box>
                    <FeatureList>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </FeatureList>
                    <Button
                      variant="contained"
                      color={plan.buttonColor as 'primary' | 'secondary'}
                      fullWidth
                      size="large"
                    >
                      Purchase Now
                    </Button>
                  </PricingCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default PricingPage; 