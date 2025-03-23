import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ArticleCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const articles = [
  {
    category: 'Home Cleaning',
    date: 'Dec 10, 2023',
    title: 'Morbi elit at at sed at etiam leo. Orci non a amet.',
    image: '/assets/blog/home-cleaning-1.jpg',
    link: '#',
  },
  {
    category: 'Office Cleaning',
    date: 'Dec 08, 2023',
    title: 'Dui nibh pellentesque metus diam mi turpis.',
    image: '/assets/blog/office-cleaning-1.jpg',
    link: '#',
  },
  {
    category: 'Office Cleaning',
    date: 'Dec 05, 2023',
    title: 'Tellus sed integer malesuada dis mattis',
    image: '/assets/blog/office-cleaning-2.jpg',
    link: '#',
  },
];

const RecentArticles = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'primary.main' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', opacity: 0.9, display: 'block', mb: 2 }}
          >
            Recent Articles
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Our News & Articles
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ArticleCard>
                <Box sx={{ position: 'relative', paddingTop: '60%', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title}
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {article.category} | {article.date}
                  </Typography>
                  <Typography
                    variant="h5"
                    component={Link}
                    to={article.link}
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'block',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Box
                    component={Link}
                    to={article.link}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      mt: 2,
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    →
                  </Box>
                </Box>
              </ArticleCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentArticles; 