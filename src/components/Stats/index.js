import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faStar, faUserTie } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  '& svg': {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    opacity: 0.8,
  },
}));

const stats = [
  { icon: faTrophy, end: 1200, label: 'PROJECT DONE', suffix: '+' },
  { icon: faUsers, end: 1300, label: 'HAPPY CLIENTS', suffix: '+' },
  { icon: faStar, end: 18, label: 'AWARD WINNER', suffix: '+' },
  { icon: faUserTie, end: 650, label: 'TEAM MEMBER', suffix: '+' },
];

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Container>
      <StatsSection ref={ref}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatItem>
                <FontAwesomeIcon icon={stat.icon} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix}
                      separator=","
                    />
                  ) : '0'}
                </Typography>
                <Typography variant="body1">
                  {stat.label}
                </Typography>
              </StatItem>
            </Grid>
          ))}
        </Grid>
      </StatsSection>
    </Container>
  );
};

export default Stats; 