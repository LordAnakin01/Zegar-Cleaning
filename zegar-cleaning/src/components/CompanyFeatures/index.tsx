import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan, faUsers, faTools, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const FeatureIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
}));

const features = [
  {
    icon: faSprayCan,
    title: 'Professional Grade Disinfectant',
    description: 'We use high-quality, professional-grade cleaning products that effectively eliminate germs and bacteria.',
  },
  {
    icon: faUsers,
    title: 'Healthy Teams And Social Distance',
    description: 'Our teams follow strict health protocols and maintain social distancing for everyone\'s safety.',
  },
  {
    icon: faTools,
    title: 'Sterilized & Disinfected Tools',
    description: 'All our cleaning tools and equipment are thoroughly sterilized and disinfected before each use.',
  },
  {
    icon: faThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work with a 100% satisfaction guarantee on all our services.',
  },
];

const CompanyFeatures = () => {
  return (
    <Box component="section" id="company-features" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ display: 'block', mb: 2 }}
          >
            Company Features
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            What Makes Us Different
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <FeatureIcon>
                  <FontAwesomeIcon icon={feature.icon} />
                </FeatureIcon>
                <Typography
                  variant="h6"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyFeatures; 