import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  '& > span': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    fontSize: '0.875rem',
  },
}));

const Logo = styled('img')({
  height: 50,
  width: 'auto',
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));

const QuickContact = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar>
        <Container maxWidth="lg">
          <ContactInfo>
            <span>
              <FontAwesomeIcon icon={faPhone} />
              +234 91 3269 4678
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              enquiries@zegarcleaning.com
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} />
              Business Hours: 09:00AM - 05:00PM
            </span>
          </ContactInfo>
        </Container>
      </TopBar>

      <AppBar 
        position="sticky" 
        color="default" 
        elevation={trigger ? 4 : 0}
        sx={{ 
          backgroundColor: 'background.paper',
          borderBottom: trigger ? 'none' : '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Logo src="/assets/logo.svg" alt="Zegar Elite Cleaning" />
              </Link>
            </Box>

            {!isMobile && (
              <NavLinks>
                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.href}
                      color="inherit"
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      key={item.label}
                      href={item.href}
                      color="inherit"
                    >
                      {item.label}
                    </Button>
                  )
                ))}
              </NavLinks>
            )}

            <QuickContact>
              {/* <Button
                component={Link}
                to="/quote"
                variant="contained"
                color="secondary"
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                }}
              >
                Get A Quote
              </Button> */}
            </QuickContact>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                {item.href.startsWith('/') ? (
                  <ListItemButton component={Link} to={item.href}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ) : (
                  <ListItemButton component="a" href={item.href}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
            {/* <ListItem disablePadding>
              <ListItemButton component={Link} to="/quote">
                <ListItemText primary="Get A Quote" />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar; 