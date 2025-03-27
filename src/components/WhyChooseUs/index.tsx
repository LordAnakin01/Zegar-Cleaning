import React from 'react';
import { Typography, Grid } from '@mui/material';
import FeatureCard from '../FeatureCard';

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h6"
        component="span"
        color="primary"
        sx={{ display: 'block', mb: 2 }}
      >
        The Zegar Elite Advantage
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: 4,
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        Excellence in Every Detail
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        At Zegar Elite, we set ourselves apart through our unwavering commitment to excellence. 
        Our certified professionals, state-of-the-art equipment, and eco-friendly cleaning solutions 
        ensure superior results every time. We don't just clean spaces; we transform them into 
        environments that inspire productivity and well-being.
      </Typography>

      <Grid container spacing={3}>
        {[
          {
            title: 'Expert Team',
            description: 'Our certified and extensively trained professionals bring years of experience to every project.'
          },
          {
            title: 'Eco-Friendly Solutions',
            description: 'We use environmentally responsible cleaning products that are both effective and safe for your space.'
          },
          {
            title: 'Customized Approach',
            description: 'Every space is unique, and we tailor our services to meet your specific needs and preferences.'
          },
          {
            title: 'Quality Guaranteed',
            description: 'We stand behind our work with a satisfaction guarantee, ensuring results that exceed expectations.'
          }
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FeatureCard>
              <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WhyChooseUs; 