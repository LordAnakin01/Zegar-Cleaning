import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GalleryImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(1),
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

const galleryImages = [
  {
    src: '/assets/gallery/office-cleaning.jpg',
    alt: 'Office Desk Cleaning',
    gridArea: '1 / 1 / 2 / 2',
  },
  {
    src: '/assets/gallery/home-cleaning.jpg',
    alt: 'Home Cleaning Service',
    gridArea: '1 / 2 / 2 / 3',
  },
  {
    src: '/assets/gallery/carpet-cleaning.jpg',
    alt: 'Carpet Cleaning',
    gridArea: '1 / 3 / 2 / 4',
  },
  {
    src: '/assets/gallery/team-cleaning.jpg',
    alt: 'Cleaning Team at Work',
    gridArea: '2 / 1 / 3 / 3',
  },
  {
    src: '/assets/gallery/window-cleaning.jpg',
    alt: 'Professional Window Cleaning',
    gridArea: '2 / 3 / 3 / 4',
  },
];

const Gallery = () => {
  return (
    <Box component="section" id="gallery" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            sx={{ display: 'block', mb: 2 }}
          >
            Our Work Gallery
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Latest Cleaning Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
          >
            Take a look at some of our recent cleaning projects and see the quality of our work.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 300px)',
            gap: 3,
            '& > *:nth-of-type(4)': {
              gridColumn: 'span 2',
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <GalleryImage key={index}>
              <img src={image.src} alt={image.alt} />
            </GalleryImage>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery; 