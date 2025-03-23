import React, { useState } from 'react';
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

const testimonials = [
  {
    id: 1,
    content: "They are very professional and do a great job cleaning! The team is always punctual, thorough, and pays attention to every detail. I highly recommend their services to anyone looking for quality cleaning.",
    author: "Sarah Thompson",
    position: "Homeowner",
    avatar: "/assets/testimonials/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Outstanding service! We've been using their commercial cleaning services for our office building, and the results are consistently excellent. The staff is courteous and professional.",
    author: "Michael Chen",
    position: "Business Owner",
    avatar: "/assets/testimonials/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "Exceptional cleaning service! They transformed our post-renovation mess into a spotless space. Their attention to detail and professionalism is unmatched.",
    author: "Emily Rodriguez",
    position: "Interior Designer",
    avatar: "/assets/testimonials/testimonial-3.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ display: 'block', mb: 2 }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            What Our Clients Say
          </Typography>
        </Box>

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
            {testimonials[activeTestimonial].content}
          </Typography>

          <Rating 
            value={testimonials[activeTestimonial].rating} 
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
              {testimonials[activeTestimonial].author}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {testimonials[activeTestimonial].position}
            </Typography>
          </Box>

          <AvatarGroup>
            {testimonials.map((testimonial, index) => (
              <Avatar
                key={testimonial.id}
                src={testimonial.avatar}
                alt={testimonial.author}
                sx={{
                  width: 60,
                  height: 60,
                  border: `2px solid ${index === activeTestimonial ? 'primary.main' : 'transparent'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </AvatarGroup>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

export default Testimonials; 