import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Code } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode } from '../features/ui/uiSlice';

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
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.ui.activeSection);
  const themeMode = useSelector((state) => state.ui.themeMode);

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

            {/* Navigation Links + Theme Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {[
                { key: 'home', label: 'Home', href: '#home' },
                { key: 'about', label: 'About', href: '#about' },
                { key: 'experience', label: 'Experience', href: '#experience' },
                { key: 'projects', label: 'Projects', href: '#projects' },
                { key: 'skills', label: 'Skills', href: '#skills' },
                { key: 'contact', label: 'Contact', href: '#contact' },
              ].map((link) => (
                <NavButton
                  key={link.key}
                  href={link.href}
                  variant={activeSection === link.key ? 'outlined' : 'text'}
                >
                  {link.label}
                </NavButton>
              ))}
              <IconButton
                aria-label="toggle theme"
                color="inherit"
                onClick={() => dispatch(toggleThemeMode())}
              >
                {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 