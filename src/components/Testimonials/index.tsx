import React from 'react';
import { Box, Container, Typography, IconButton, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  margin: theme.spacing(0, 1),
}));

const Avatar = styled('img')({
  width: 64,
  height: 64,
  borderRadius: '50%',
  marginBottom: 16,
});

const testimonials = [
  {
    name: 'Tina Smith',
    role: 'Founder of Pet Group',
    image: '/assets/testimonials/tina-smith.jpg',
    rating: 5,
    comment: 'Excellent services, a design very clean, fast and easy to customize and the customer support very professional.'
  },
  {
    name: 'Rocky Khan',
    role: 'Founder of Rocktech',
    image: '/assets/testimonials/rocky-khan.jpg',
    rating: 5,
    comment: 'Theme is fully customizable, and customer support is excellent. Its most advanced theme I use ever.'
  },
  {
    name: 'Jordon Smith',
    role: 'Agent Manager',
    image: '/assets/testimonials/jordon-smith.jpg',
    rating: 5,
    comment: 'Goclean is one among the themes I have ever used. Would recommend anytime to my pals.'
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <img src="/assets/icons/testimonials-icon.svg" alt="" style={{ width: 24, height: 24 }} />
            <Typography variant="h6" color="primary">
              Client's Testimonials
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
            We Are Very Happy For<br />
            Client's Reviews.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mx: -1 }}>
          <Box sx={{ display: 'flex', gap: 3, overflowX: 'hidden', py: 2 }}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} sx={{ flex: '0 0 calc(33.333% - 16px)' }}>
                <Avatar src={testimonial.image} alt={testimonial.name} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {testimonial.role}
                </Typography>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  "{testimonial.comment}"
                </Typography>
              </TestimonialCard>
            ))}
          </Box>

          <IconButton
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'secondary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'secondary.dark',
              }
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'secondary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'secondary.dark',
              }
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 