import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { KeyboardArrowDown, GitHub, LinkedIn, Email } from '@mui/icons-material';
import profileImage from '../assets/images/gk-profile.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  paddingTop: '100px',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '10px',
    bottom: '10px',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
    zIndex: -1,
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-3px)',
  },
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateX(-50%) translateY(0)',
    },
    '40%': {
      transform: 'translateX(-50%) translateY(-10px)',
    },
    '60%': {
      transform: 'translateX(-50%) translateY(-5px)',
    },
  },
}));

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Section - Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ImageContainer>
                <Box
                  component="img"
                  src={profileImage}
                  alt="Govind Kumawat"
                  sx={{
                    width: '100%',
                    maxWidth: '350px',
                    borderRadius: '10px',
                    boxShadow: '0 20px 40px -15px rgba(2,12,27,0.7)',
                  }}
                />
              </ImageContainer>
            </motion.div>
          </Grid>

          {/* Right Section - Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContentContainer>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ 
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    mb: 1
                  }}
                >
                  Hi, I'm
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.1,
                    color: theme => theme.palette.text.primary,
                    mb: 2
                  }}
                >
                  Govind Kumawat
                </Typography>

                <Typography
                  variant="h3"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    lineHeight: 1.2,
                    fontWeight: 600,
                    mb: 3
                  }}
                >
                  Software Engineer
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    opacity: 0.9,
                    mb: 4
                  }}
                >
                  I build robust and scalable software solutions for the web. With 6+ years of experience in Java, Spring Boot, and microservices, I specialize in creating high-performance applications that solve real-world problems.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'transparent',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    onClick={scrollToAbout}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    startIcon={<Email />}
                    href="mailto:govindkumawat.gk@gmail.com"
                  >
                    Get In Touch
                  </Button>
                </Box>

                <SocialLinks>
                  <SocialButton href="https://github.com/kgovind-maker" target="_blank">
                    <GitHub />
                  </SocialButton>
                  <SocialButton href="https://linkedin.com/in/govind-kumawat-9b62a1184" target="_blank">
                    <LinkedIn />
                  </SocialButton>
                </SocialLinks>
              </ContentContainer>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      <ScrollIndicator onClick={scrollToAbout}>
        <KeyboardArrowDown sx={{ fontSize: '2rem' }} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          Scroll Down
        </Typography>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 