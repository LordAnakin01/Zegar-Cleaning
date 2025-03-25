import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const bubble = keyframes`
  0% { transform: translateY(100vh) scale(0); }
  100% { transform: translateY(-100vh) scale(1); }
`;

const BubbleWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
}));

const Bubble = styled('div')<{ delay: number; size: number; left: number }>(({ delay, size, left }) => ({
  position: 'absolute',
  bottom: -100,
  left: `${left}%`,
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  animation: `${bubble} ${8 + delay}s linear infinite`,
  animationDelay: `${delay}s`,
}));

interface BubblesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  opacity?: number;
}

const Bubbles: React.FC<BubblesProps> = ({
  count = 10,
  minSize = 20,
  maxSize = 80,
  opacity = 0.1,
}) => {
  const bubbles = Array.from({ length: count }, (_, i) => ({
    delay: Math.random() * 5,
    size: minSize + Math.random() * (maxSize - minSize),
    left: Math.random() * 100,
  }));

  return (
    <BubbleWrapper>
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          delay={bubble.delay}
          size={bubble.size}
          left={bubble.left}
          sx={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
        />
      ))}
    </BubbleWrapper>
  );
};

export default Bubbles; 