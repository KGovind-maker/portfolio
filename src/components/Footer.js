import React from 'react';
import { Box, Container, Typography, IconButton, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub, 
  LinkedIn, 
  Twitter, 
  Email, 
  Code,
  KeyboardArrowUp 
} from '@mui/icons-material';

const FooterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 4),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: '45px',
  height: '45px',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 20px rgba(100, 255, 218, 0.2)',
  },
}));

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  width: '50px',
  height: '50px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  border: `2px solid ${theme.palette.primary.main}`,
  zIndex: 1000,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 20px rgba(100, 255, 218, 0.3)',
  },
}));

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FooterSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: '2rem', color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Govind Kumawat
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                A passionate software engineer focused on building robust and scalable applications. 
                Always eager to learn new technologies and solve complex problems.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialButton href="https://github.com/kgovind-maker" target="_blank">
                  <GitHub />
                </SocialButton>
                <SocialButton href="https://linkedin.com/in/govind-kumawat-9b62a1184" target="_blank">
                  <LinkedIn />
                </SocialButton>
                <SocialButton href="https://twitter.com/govind_kumawat" target="_blank">
                  <Twitter />
                </SocialButton>
                <SocialButton href="mailto:govindkumawat.gk@gmail.com">
                  <Email />
                </SocialButton>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography 
                  component="a" 
                  href="#about" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  About Me
                </Typography>
                <Typography 
                  component="a" 
                  href="#experience" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Experience
                </Typography>
                <Typography 
                  component="a" 
                  href="#projects" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Projects
                </Typography>
                <Typography 
                  component="a" 
                  href="#skills" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Skills
                </Typography>
                <Typography 
                  component="a" 
                  href="#contact" 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  Contact
                </Typography>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Email:</strong> govindkumawat.gk@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Location:</strong> Sydney, NSW, Australia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Available for:</strong> Full-time opportunities, Freelance projects
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(100, 255, 218, 0.1)' }} />

          {/* Copyright */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Govind Kumawat. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built with React, Material-UI & ❤️
            </Typography>
          </Box>
        </Container>
      </FooterSection>

      {/* Scroll to Top Button */}
      <ScrollToTopButton onClick={scrollToTop}>
        <KeyboardArrowUp />
      </ScrollToTopButton>
    </>
  );
};

export default Footer; 