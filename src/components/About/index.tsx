import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface FeatureItem {
  text: string;
}

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: FeatureItem[];
  imagePath?: string;
}

const AboutWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(255,255,255,1) 100%)',
    zIndex: -1,
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '90%',
    height: '90%',
    background: theme.palette.primary.main,
    opacity: 0.1,
    borderRadius: theme.spacing(2),
    transform: 'rotate(-3deg)',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .icon': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    fontSize: '0.8rem',
  },
}));

const About: React.FC<AboutProps> = ({
  title = "Experience Excellence in Professional Cleaning Services",
  subtitle = "About Our Company",
  description = "With over 10 years of experience, we've built a reputation for delivering exceptional cleaning services that transform spaces and exceed expectations. Our commitment to quality, attention to detail, and use of eco-friendly products sets us apart in the industry.",
  features = [
    { text: "Certified and experienced cleaning professionals" },
    { text: "Eco-friendly cleaning products and methods" },
    { text: "Customized cleaning plans for every client" },
    { text: "100% satisfaction guarantee" },
    { text: "Flexible scheduling options" },
    { text: "Comprehensive insurance coverage" },
  ],
  imagePath = "/assets/images/about-cleaning.jpg",
}) => {
  return (
    <AboutWrapper>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <img src={imagePath} alt="Professional Cleaning Services" />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <FeatureItem>
                        <span className="icon">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <Typography variant="body1">{feature.text}</Typography>
                      </FeatureItem>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutWrapper>
  );
};

export default About; 