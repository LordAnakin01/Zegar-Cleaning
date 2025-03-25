import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/assets/images/bubbles-bg.svg)',
    backgroundSize: 'cover',
    opacity: 0.1,
  }
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  '& img': {
    width: 48,
    height: 48,
    marginBottom: theme.spacing(2),
    filter: 'brightness(0) invert(79%) sepia(75%) saturate(757%) hue-rotate(359deg) brightness(103%) contrast(107%)',
  }
}));

const stats = [
  {
    icon: '/assets/icons/stats/projects-done.svg',
    count: '1200+',
    label: 'PROJECT DONE'
  },
  {
    icon: '/assets/icons/stats/happy-clients.svg',
    count: '1300+',
    label: 'HAPPY CLIENTS'
  },
  {
    icon: '/assets/icons/stats/award-winner.svg',
    count: '18+',
    label: 'AWARD WINNER'
  },
  {
    icon: '/assets/icons/stats/team-member.svg',
    count: '650+',
    label: 'TEAM MEMBER'
  }
];

const Stats = () => {
  return (
    <StatsSection>
      <Container>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatItem>
                <img src={stat.icon} alt={stat.label} />
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}
                >
                  {stat.count}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    opacity: 0.8,
                    letterSpacing: 1,
                    fontSize: '0.875rem'
                  }}
                >
                  {stat.label}
                </Typography>
              </StatItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StatsSection>
  );
};

export default Stats; 