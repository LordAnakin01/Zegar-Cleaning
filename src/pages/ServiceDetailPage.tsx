import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { services, Service } from '../data/services';
import Contact from '../components/Contact';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 20% 150%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
  }
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ServiceImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '2rem',
});

const FaqSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FaqButton = styled(Button)(({ theme }) => ({
  width: '100%',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  textAlign: 'left',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number>(-1);

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <Container>
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Service Not Found
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/services')}
            startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          >
            Back to Services
          </Button>
        </Box>
      </Container>
    );
  }

  const handleFaqClick = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <>
      <HeroSection>
        <Container>
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h2" gutterBottom>
              {service.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, color: 'rgba(255, 255, 255, 0.8)' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              <Typography component="span">{'>'}</Typography>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
              <Typography component="span">{'>'}</Typography>
              <Typography component="span">{service.title}</Typography>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <ServiceImage src={service.image} alt={service.title} />
              <Typography variant="h4" color="primary.main" sx={{ mb: 3, fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" paragraph style={{ whiteSpace: 'pre-line' }}>
                {service.longDescription}
              </Typography>

              <FaqSection>
                <Typography variant="h4" gutterBottom>
                  Frequently Asked Questions
                </Typography>
                {service.faqs.map((faq, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <FaqButton
                      onClick={() => handleFaqClick(index)}
                      endIcon={
                        <FontAwesomeIcon
                          icon={openFaq === index ? faMinus : faPlus}
                        />
                      }
                    >
                      {faq.question}
                    </FaqButton>
                    <Collapse in={openFaq === index}>
                      <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                        <Typography>{faq.answer}</Typography>
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </FaqSection>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                  Our Services
                </Typography>
                <Box>
                  {services.map((s) => (
                    <Button
                      key={s.id}
                      component={Link}
                      to={`/services/${s.id}`}
                      fullWidth
                      sx={{
                        py: 2,
                        px: 3,
                        justifyContent: 'flex-start',
                        color: s.id === serviceId ? 'primary.main' : 'text.primary',
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      {s.title}
                    </Button>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 4, bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
                <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                  Need Help?
                </Typography>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    If you have any questions about our services, please don't hesitate to contact us.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    href="#contact"
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContentSection>

      <Contact />
    </>
  );
};

export default ServiceDetailPage; 