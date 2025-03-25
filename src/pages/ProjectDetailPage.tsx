import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useParams } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Bubbles from '../components/shared/Bubbles';
import Stats from '../components/Stats';
import Contact from '../components/Contact';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  minHeight: '400px',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, rgba(66, 66, 66, 0.9) 50%, rgba(66, 66, 66, 0.8) 100%)`,
    zIndex: 1,
  },
}));

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const DetailItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .label': {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
  },
  '& .value': {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  '& .link': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const NavigationButton = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ProjectDetailPage = () => {
  const { id } = useParams();

  // This would typically come from your project data/API
  const projectData = {
    title: 'Best Home Cleaning Service for Mike Hardson',
    client: 'Mike Hardson',
    category: ['Cleaning', 'Washing'],
    date: '20 June, 2023',
    mainImage: '/assets/projects/home-cleaning-detail.jpg',
    description: 'In fusce molestie amet ornare eu duis faucibus malesuada. Aliquam gravida quam nisi platea. Sagittis augue urna viverra augue aliquet lacinia tellus eget ornare. Eleifend sed pharetra semper dictum scelerisque vel ullamcorper felis volutpat. Amet et risus purus nec fringilla nec aliquet magna.',
    challenge: 'Tellus diam neque mollis neque aliquam sit auctor. Morbi amet sit nisl at metus sem. Amet viverra dui morbi pulvinar in. Tellus elementum mattis ut ullamcorper egestas proin facilisi vitae. Aliquam dictum sed facilisis mauris sapien malesuada praesent blandit eget. Orci dapibus tempor egestas dui.',
    solution: 'Elementum amet nibh lectus dictum adipiscing. A tellus nibh morbi lacus aliquam cras. Congue consectetur ac eu in et sagittis sed in eget. A eget diam dolor feugiat ut aliquet. A magna eget urna non viverra augue. Nisi dolor viverra amet pellentesque nunc faucibus ac.',
    galleryImages: [
      '/assets/projects/home-cleaning-1.jpg',
      '/assets/projects/home-cleaning-2.jpg',
      '/assets/projects/home-cleaning-3.jpg',
    ],
    features: [
      'Nisi sodales porttitor tellus et.',
      'Lorem aliquam amet nam lorem urna.',
      'Sem mauris viverra tellus sed.',
      'Id dignissim pretium amet urna arcu vestibulum lacus urna.',
      'Massa mattis tellus iaculis sem.',
      'Mauris mauris nec pharetra lacus adipiscing nibh egestas.',
    ],
    additionalFeatures: [
      'Habitant nunc condimentum mauris urna nibh nibh.',
      'Congue faucibus consectetur nisi ut diam amet.',
      'Elit eu amet at diam amet. Amet tellus non elit quis.',
      'Volutpat adipiscing ornare metus ullamcorper.',
      'Venenatis scelerisque bibendum dolor adipiscing amet.',
      'Non et duis faucibus habitant magna tristique.',
    ],
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {projectData.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Typography component="span">{'>'}</Typography>
              <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Single Project 1</Typography>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <ProjectImage src={projectData.mainImage} alt={projectData.title} />
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
                {projectData.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {projectData.description}
              </Typography>

              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                The Challenge of Project
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {projectData.challenge}
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {projectData.galleryImages.map((image, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <ProjectImage src={image} alt={`Project Image ${index + 1}`} />
                  </Grid>
                ))}
              </Grid>

              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Orci pharetra augue diam netus etiam suspendisse. Augue sit odio eleifend ut odio ullamcorper sagittis ac etiam. Diam non turpis aliquam sit sit dolor gravida elementum fringilla.
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {projectData.features.map((feature, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={{ mb: 1, color: 'text.secondary' }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {projectData.additionalFeatures.map((feature, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={{ mb: 1, color: 'text.secondary' }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h4" sx={{ mt: 4, mb: 3, color: 'primary.main' }}>
                Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                {projectData.solution}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
                <NavigationButton to="/projects/prev">
                  ← Previous
                </NavigationButton>
                <NavigationButton to="/projects/next">
                  Next →
                </NavigationButton>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Project Detail</Typography>
                
                <DetailItem>
                  <Typography className="label">Clients:</Typography>
                  <Typography className="value">{projectData.client}</Typography>
                </DetailItem>

                <DetailItem>
                  <Typography className="label">Category:</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {projectData.category.map((cat, index) => (
                      <Link key={cat} to={`/projects?category=${cat}`} className="link">
                        {cat}{index < projectData.category.length - 1 ? ',' : ''}
                      </Link>
                    ))}
                  </Box>
                </DetailItem>

                <DetailItem>
                  <Typography className="label">Date:</Typography>
                  <Typography className="value">{projectData.date}</Typography>
                </DetailItem>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <SocialButton>
                    <Facebook />
                  </SocialButton>
                  <SocialButton>
                    <Twitter />
                  </SocialButton>
                  <SocialButton>
                    <Instagram />
                  </SocialButton>
                  <SocialButton>
                    <LinkedIn />
                  </SocialButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Stats />
      <Contact />
    </>
  );
};

export default ProjectDetailPage; 