import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TeamMemberCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

const MemberImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 300,
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  '& a': {
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      transform: 'translateY(-3px)',
    },
  },
}));

const teamMembers = [
  {
    name: 'John Smith',
    position: 'Cleaning Manager',
    image: '/assets/team/team-1.jpg',
  },
  {
    name: 'Sarah Johnson',
    position: 'Senior Cleaner',
    image: '/assets/team/team-2.jpg',
  },
  {
    name: 'Michael Brown',
    position: 'Equipment Specialist',
    image: '/assets/team/team-3.jpg',
  },
  {
    name: 'Emily Davis',
    position: 'Customer Relations',
    image: '/assets/team/team-4.jpg',
  },
];

const Team = () => {
  return (
    <Box component="section" id="team" sx={{ py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h6" component="span" color="primary" sx={{ display: 'block', mb: 2 }}>
            Expert Team
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            We've Have an Expert Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamMemberCard>
                <Box sx={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                </Box>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team; 