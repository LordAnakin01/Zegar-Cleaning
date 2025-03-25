import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Bubbles from '../components/shared/Bubbles';
import Testimonials from '../components/Testimonials';
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

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const HeroImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  height: '110%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  cursor: 'pointer',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(66, 66, 66, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  color: 'white',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary.main,
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 'auto',
    padding: theme.spacing(1, 2),
    marginRight: theme.spacing(2),
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
  },
}));

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Office Desk Cleaning',
    category: 'Office Cleaning',
    image: '/assets/projects/office-cleaning-1.jpg',
    description: 'Professional office cleaning service with attention to detail',
  },
  {
    id: 2,
    title: 'Home Deep Cleaning',
    category: 'Home Cleaning',
    image: '/assets/projects/home-cleaning-1.jpg',
    description: 'Comprehensive home cleaning service',
  },
  {
    id: 3,
    title: 'Carpet Steam Cleaning',
    category: 'Carpet Cleaning',
    image: '/assets/projects/carpet-cleaning-1.jpg',
    description: 'Deep carpet cleaning and stain removal',
  },
  {
    id: 4,
    title: 'Window Cleaning Service',
    category: 'Window Cleaning',
    image: '/assets/projects/window-cleaning-1.jpg',
    description: 'Professional window cleaning for crystal clear views',
  },
  {
    id: 5,
    title: 'Team Office Cleaning',
    category: 'Office Cleaning',
    image: '/assets/projects/office-cleaning-2.jpg',
    description: 'Team-based office cleaning service',
  },
  {
    id: 6,
    title: 'Commercial Space Cleaning',
    category: 'Commercial Cleaning',
    image: '/assets/projects/commercial-cleaning-1.jpg',
    description: 'Commercial space deep cleaning service',
  },
  {
    id: 7,
    title: 'Window Service Pro',
    category: 'Window Cleaning',
    image: '/assets/projects/window-cleaning-2.jpg',
    description: 'Professional window cleaning service',
  },
  {
    id: 8,
    title: 'Restaurant Cleaning',
    category: 'Commercial Cleaning',
    image: '/assets/projects/commercial-cleaning-2.jpg',
    description: 'Restaurant and cafe cleaning service',
  },
];

const ProjectsPage = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(8);
  const navigate = useNavigate();

  const categories = ['All', 'Home Cleaning', 'Office Cleaning', 'Window Cleaning', 'Renovation Cleaning', 'Carpet Cleaning', 'Commercial Cleaning'];

  const filteredProjects = currentCategory === 'All'
    ? projects
    : projects.filter(project => project.category === currentCategory);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentCategory(newValue);
    setVisibleProjects(8);
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 4);
  };

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
        <Container>
          <HeroContent>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Our Projects
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">Portfolio Grid - Full 2</Typography>
            </Box>
          </HeroContent>
        </Container>
        <HeroImage src="/assets/images/projects-hero.png" alt="Professional Cleaner" />
      </HeroSection>

      <Box component="section" sx={{ py: 8 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
              <img src="/assets/icons/work-icon.svg" alt="" style={{ width: 24, height: 24 }} />
              <Typography variant="h6" color="primary">
                Our Work
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Latest Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Enim egestas tempor lacereet magna at ac penatiubus. Et ipsum eget amet vitae ultrices lobortis vel turpis. Vivamus est scelerisque maccenas aliquam lacus praesent commodo.
            </Typography>
          </Box>

          <StyledTabs
            value={currentCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((category) => (
              <Tab
                key={category}
                label={category}
                value={category}
              />
            ))}
          </StyledTabs>

          <Grid container spacing={3}>
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Grid item xs={12} sm={6} md={3} key={project.id}>
                <ProjectImage onClick={() => handleProjectClick(project.id)} sx={{ cursor: 'pointer' }}>
                  <img src={project.image} alt={project.title} />
                  <ImageOverlay className="overlay">
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </ImageOverlay>
                </ProjectImage>
              </Grid>
            ))}
          </Grid>

          {visibleProjects < filteredProjects.length && (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLoadMore}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      <Testimonials />
      <Contact />
    </>
  );
};

export default ProjectsPage; 