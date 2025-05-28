import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(10, 25, 47, 0.95)',
  backdropFilter: 'blur(10px)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: '0 10px',
  fontSize: '1rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledAppBar elevation={scrolled ? 4 : 0}>
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <NavButton href="#home">Home</NavButton>
            <NavButton href="#about">About</NavButton>
            <NavButton href="#projects">Projects</NavButton>
            <NavButton href="#skills">Skills</NavButton>
            <NavButton href="#contact">Contact</NavButton>
          </Box>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 