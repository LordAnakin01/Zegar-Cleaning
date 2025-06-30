import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Rating } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-33.333% - 24px));
}
`;

const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  backgroundImage: 'radial-gradient(circle at center, rgba(66, 66, 66, 0.03) 0%, rgba(66, 66, 66, 0) 70%)'
}));

const TestimonialCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  margin: theme.spacing(0, 1),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '2px solid #FFB800',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '30%',
    height: '4px',
    backgroundColor: '#FFB800',
    borderRadius: '0 0 4px 4px'
  }
}));

const testimonials = [
  {
    name: 'Ngozi Umeh',
    role: 'Residential Client',
    rating: 5,
    comment: "Zegar Elite's attention to detail is second to none. My apartment has never looked or felt cleaner. Highly recommended!"
  },
  {
    name: 'Ibrahim Musa',
    role: 'Business Owner',
    rating: 5,
    comment: "Professional, punctual, and thorough. They've handled our store cleaning for over a year now—flawless service every time."
  },
  {
    name: 'Amarachi Onuoha',
    role: 'Salon Owner',
    rating: 5,
    comment: "I love how fresh and spotless the salon looks after every visit. Their team is respectful, fast, and really good at what they do."
  },
  {
    name: 'Tobi Adelakun',
    role: 'Property Developer',
    rating: 5,
    comment: "They handled our post-construction cleaning like pros. From dust to shine in a matter of hours. Very impressed!"
  },
  {
    name: 'Zainab Garba',
    role: 'Office Manager',
    rating: 5,
    comment: "Our office feels brand new after every cleaning session. Great customer service and reliable cleaners!"
  },
  {
    name: 'Chuka Eze',
    role: 'Property Manager',
    rating: 5,
    comment: "I use Zegar Elite for all my rental turnovers. Tenants always compliment the cleanliness—it's become part of my leasing strategy."
  },
  {
    name: 'Aisha Bello',
    role: 'Residential Client',
    rating: 5,
    comment: "Their deep cleaning saved me before a big family event. My home looked spotless and smelled amazing. Thank you Zegar Elite!"
  },
  {
    name: 'Kenneth Nwankwo',
    role: 'Logistics Manager',
    rating: 5,
    comment: "We run a busy dispatch hub, and cleanliness matters. Zegar Elite keeps our workspace sanitary and presentable—top-tier service!"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
        setIsAnimating(false);
      }, 500); // Match this with the animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length] // Add one more for smooth transition
  ];

  return (
    <TestimonialsSection>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Box
              component="img"
              src="/assets/icons/testimonials-icon.svg"
              alt=""
              sx={{
                width: 24,
                height: 24,
                color: 'primary.main',
                filter: 'invert(31%) sepia(97%) saturate(1789%) hue-rotate(208deg) brightness(97%) contrast(101%)'
              }}
            />
            <Typography variant="h6" color="primary">
              Client's Testimonials
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
            What Our Clients Say
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Discover why our clients trust us with their cleaning needs. Read their experiences with our professional cleaning services.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mx: -1, overflow: 'hidden' }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            transform: isAnimating ? 'translateX(calc(-33.333% - 24px))' : 'translateX(0)',
            transition: 'transform 0.5s ease-in-out',
          }}>
            {visibleTestimonials.map((testimonial, index) => (
              <Box key={`${testimonial.name}-${index}`} sx={{ flex: '0 0 calc(33.333% - 16px)' }}>
                <TestimonialCard>
                  <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {testimonial.role}
                </Typography>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2, color: '#FFB800' }} />
                <Typography variant="body1" color="text.secondary">
                  "{testimonial.comment}"
                </Typography>
                  </Box>
              </TestimonialCard>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 