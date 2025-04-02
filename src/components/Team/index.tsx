import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TeamSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const TeamCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const TeamImage = styled('img')({
  width: '100%',
  height: 'auto',
  aspectRatio: '1',
  objectFit: 'cover',
});

const TeamInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const teamMembers = [
  {
    name: 'Gloria Collins Zegar',
    position: 'Founder & CEO',
    image: '/assets/team/team-1.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Chinedu Okafor',
    position: 'Lead Cleaning Supervisor',
    image: '/assets/team/team-2.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Amaka Nwosu',
    position: 'Sanitization & Health Safety Officer',
    image: '/assets/team/team-3.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Tunde Adebayo',
    position: 'Operations & Equipment Manager',
    image: '/assets/team/team-4.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Ifeoma Eze',
    position: 'Client Relations & Scheduling Coordinator',
    image: '/assets/team/team-5.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Bashiru Lawal',
    position: 'Logistics & Supply Coordinator',
    image: '/assets/team/team-6.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    }
  }
];

const Team: React.FC = () => {
  return (
    <TeamSection>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ display: 'block', mb: 2 }}
          >
            Our Expert Team
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Meet Our Professional Team
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Our dedicated team of cleaning professionals brings years of experience and expertise to every project, ensuring exceptional results and customer satisfaction.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamCard>
                <TeamImage src={member.image} alt={member.name} />
                <TeamInfo>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                  <SocialLinks>
                    <SocialIcon>
                      <FontAwesomeIcon icon={faFacebookF} size="sm" />
                    </SocialIcon>
                    <SocialIcon>
                      <FontAwesomeIcon icon={faTwitter} size="sm" />
                    </SocialIcon>
                    <SocialIcon>
                      <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                    </SocialIcon>
                  </SocialLinks>
                </TeamInfo>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TeamSection>
  );
};

export default Team; 