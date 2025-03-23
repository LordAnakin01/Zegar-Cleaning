import React from 'react';
import { Box, Container, Typography, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const QuoteIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '4rem',
  marginBottom: theme.spacing(3),
  opacity: 0.1,
}));

const TestimonialWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto',
  position: 'relative',
}));

const AvatarGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

interface TestimonialAvatarProps {
  isActive?: boolean;
}

const TestimonialAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<TestimonialAvatarProps>(({ theme, isActive }) => ({
  width: 60,
  height: 60,
  border: `2px solid ${isActive ? theme.palette.primary.main : 'transparent'}`,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Testimonials = () => {
  return (
    <Box 
      component="section" 
      id="testimonials" 
      sx={{ 
        py: 12,
        bgcolor: 'background.paper',
        backgroundImage: 'radial-gradient(circle at center, rgba(0, 71, 204, 0.03) 0%, rgba(0, 71, 204, 0) 70%)',
      }}
    >
      <Container>
        <TestimonialWrapper>
          <QuoteIcon>
            <FontAwesomeIcon icon={faQuoteRight} />
          </QuoteIcon>
          
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 500,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.5,
            }}
          >
            They are very professional and do a great job cleaning the house! I locked myself out of my house the other
            day and they were the only once with a key. They were kind enough to drive over to unlock the door. That
            speaks volumes!!! They really care about their clients.
          </Typography>

          <Rating 
            value={5} 
            readOnly 
            sx={{ 
              mb: 3,
              '& .MuiRating-icon': {
                color: 'secondary.main',
              },
            }} 
          />

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Pharetra
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Founder of Rocktech
            </Typography>
          </Box>

          <AvatarGroup>
            <TestimonialAvatar
              src="/assets/testimonial-1.jpg"
              alt="Client 1"
              isActive={true}
            />
            <TestimonialAvatar
              src="/assets/testimonial-2.jpg"
              alt="Client 2"
            />
            <TestimonialAvatar
              src="/assets/testimonial-3.jpg"
              alt="Client 3"
            />
          </AvatarGroup>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

export default Testimonials; 