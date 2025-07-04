import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Collapse,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faArrowLeft,
  faCheck,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { services } from '../types/services';
import Contact from '../components/Contact';
import Bubbles from '../components/shared/Bubbles';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
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

const ProcessStep = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

const BeforeAfterImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover .comparison-slider': {
    opacity: 1,
  },
}));

const PackageCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const FaqAccordion = styled(Box)(({ theme }) => ({
  '& .faq-item': {
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
  '& .faq-button': {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'left',
    padding: theme.spacing(2, 3),
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    '&:hover, &.active': {
      backgroundColor: '#FFF8E1',
    },
    '&.active': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    }
  },
  '& .faq-content': {
    padding: theme.spacing(3),
    backgroundColor: '#FFFFFF',
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`service-tabpanel-${index}`}
      aria-labelledby={`service-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const [tabValue, setTabValue] = useState(0);

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <HeroSection>
        <Bubbles count={10} minSize={20} maxSize={60} opacity={0.1} />
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
              
              <Box sx={{ mb: 6 }}>
                <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable">
                  <Tab label="Overview" />
                  <Tab label="Process" />
                  <Tab label="Equipment" />
                  <Tab label="FAQs" />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <Typography variant="h4" color="primary.main" sx={{ mb: 3, fontWeight: 600 }}>
                    Service Overview
                  </Typography>
                  <Typography variant="body1" paragraph style={{ whiteSpace: 'pre-line' }}>
                    {service.longDescription}
                  </Typography>

                  {service.highlights && (
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" sx={{ mb: 2 }}>Service Highlights</Typography>
                      <List>
                        {service.highlights.map((highlight, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <FontAwesomeIcon icon={faCheck} color="#FFB800" />
                            </ListItemIcon>
                            <ListItemText primary={highlight} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  {service.guarantees && (
                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h5" sx={{ mb: 2 }}>Our Guarantees</Typography>
                      <List>
                        {service.guarantees.map((guarantee, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <FontAwesomeIcon icon={faCheck} color="#FFB800" />
                            </ListItemIcon>
                            <ListItemText primary={guarantee} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h4" color="primary.main" sx={{ mb: 4, fontWeight: 600 }}>
                    Our Process
                  </Typography>
                  {service.process?.map((step) => (
                    <ProcessStep key={step.step}>
                      <StepNumber>{step.step}</StepNumber>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {step.description}
                        </Typography>
                        {step.image && (
                          <Box
                            component="img"
                            src={step.image}
                            alt={step.title}
                            sx={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: 2,
                              mt: 2,
                            }}
                          />
                        )}
                      </Box>
                    </ProcessStep>
                  ))}
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  <Typography variant="h4" color="primary.main" sx={{ mb: 4, fontWeight: 600 }}>
                    Professional Equipment
                  </Typography>
                  <Grid container spacing={4}>
                    {service.equipment?.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <Box 
                            sx={{ 
                              p: 3,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              bgcolor: 'background.default',
                              minHeight: 200
                            }}
                          >
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                                width: '80%',
                              height: 'auto',
                                maxHeight: 160,
                                objectFit: 'contain'
                            }}
                          />
                          </Box>
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                  <Typography variant="h4" color="primary.main" sx={{ mb: 4, fontWeight: 600 }}>
                    Frequently Asked Questions
                  </Typography>
                  <FaqAccordion>
                  {service.faqs?.map((faq, index) => (
                      <Box key={index} className="faq-item">
                      <Button
                        onClick={() => handleFaqClick(index)}
                          className={`faq-button ${openFaq === index ? 'active' : ''}`}
                        endIcon={
                          <FontAwesomeIcon
                            icon={openFaq === index ? faMinus : faPlus}
                              style={{ color: openFaq === index ? '#FFB800' : '#666666' }}
                          />
                        }
                      >
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              color: openFaq === index ? '#FFB800' : 'text.primary',
                              fontWeight: openFaq === index ? 600 : 400
                            }}
                          >
                            {faq.question}
                          </Typography>
                      </Button>
                      <Collapse in={openFaq === index}>
                          <Box className="faq-content">
                            <Typography variant="body1" color="text.secondary">
                              {faq.answer}
                            </Typography>
                        </Box>
                      </Collapse>
                    </Box>
                  ))}
                  </FaqAccordion>
                </TabPanel>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: 24 }}>
                <Card sx={{ mb: 4 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Our Services
                    </Typography>
                    <List>
                      {services.map((s) => (
                        <ListItem
                          key={s.id}
                          component={Link}
                          to={`/services/${s.id}`}
                          sx={{
                            color: s.id === serviceId ? 'primary.main' : 'text.primary',
                            textDecoration: 'none',
                            py: 1,
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <ListItemText primary={s.title} />
                          <FontAwesomeIcon icon={faChevronRight} size="sm" />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Need Help?
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Our customer service team is here to answer any questions you may have.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      href="#contact"
                      sx={{ mb: 2 }}
                    >
                      Contact Us
                    </Button>
                    <Typography variant="body1">
                      +234 91 3269 4678
                    </Typography>
                  </CardContent>
                </Card>
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