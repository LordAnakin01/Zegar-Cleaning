import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

interface FeatureCardProps {
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default FeatureCard; 