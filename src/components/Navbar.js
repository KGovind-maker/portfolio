import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Code } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(10, 25, 47, 0.95)',
  backdropFilter: 'blur(10px)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: '0 8px',
  fontSize: '0.9rem',
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {/* Logo */}
            <Logo onClick={scrollToTop}>
              <Code sx={{ fontSize: '2rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                GK
              </Typography>
            </Logo>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavButton href="#home">Home</NavButton>
              <NavButton href="#about">About</NavButton>
              <NavButton href="#experience">Experience</NavButton>
              <NavButton href="#projects">Projects</NavButton>
              <NavButton href="#skills">Skills</NavButton>
              <NavButton href="#contact">Contact</NavButton>
            </Box>
          </Box>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 