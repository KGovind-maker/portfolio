import React from 'react';
import { Box, Typography, Container, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { styled, alpha } from '@mui/material/styles';
import { GitHub, LinkedIn, Email, Code, Mouse } from '@mui/icons-material';
import { openMailClient } from '../utils/obfuscation';
import profileImage from '../assets/images/gk-profile.jpg';

const HeroSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  paddingTop: '80px',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: `radial-gradient(${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      width: '300px',
      height: '300px',
      right: '-100px',
    },
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '350px',
  height: '350px',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  padding: '6px',
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.6)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 60%, transparent 100%)`,
  boxShadow: `0 10px 30px -15px ${alpha(theme.palette.common.black, 0.6)}`,
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    boxShadow: `0 20px 40px -15px ${alpha(theme.palette.common.black, 0.7)}`,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    transition: 'transform 0.5s ease-in-out',
    boxShadow: `0 20px 40px -15px rgba(2,12,27,0.7)`,
  },
  '&:hover img': {
    transform: 'scale(1.04)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '250px',
    marginBottom: theme.spacing(4),
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'left',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    alignItems: 'center',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  margin: theme.spacing(3, 0),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: '50px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-3px)',
    boxShadow: `0 5px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <ContentContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Hi, my name is
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Govind Kumawat
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  I build things for the web.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    maxWidth: '540px',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  I'm a full-stack developer specializing in building exceptional
                  digital experiences. Currently, I'm focused on building
                  accessible, human-centered products at{' '}
                  <Box
                    component="span"
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '1px',
                        bottom: '2px',
                        left: 0,
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.7,
                      },
                    }}
                  >
                    Your Company
                  </Box>.
                </Typography>
                
                <SocialLinks>
                  {[
                    {
                      icon: <GitHub />,
                      href: 'https://github.com/KGovind-maker',
                      label: 'GitHub',
                    },
                    {
                      icon: <LinkedIn />,
                      href: 'https://www.linkedin.com/in/govind-kumawat-9b62a1184',
                      label: 'LinkedIn',
                    },
                    {
                      icon: <Email />,
                      onClick: openMailClient,
                      label: 'Email',
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.onClick ? (
                        <SocialButton
                          onClick={social.onClick}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </SocialButton>
                      ) : (
                        <SocialButton
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </SocialButton>
                      )}
                    </motion.div>
                  ))}
                </SocialLinks>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{ marginTop: '2rem' }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<Code />}
                    href="#projects"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 500,
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
              </motion.div>
            </ContentContainer>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ImageContainer>
                <img
                  src={profileImage}
                  alt="Govind Kumar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageContainer>
            </motion.div>
          </Grid>
        </Grid>
        
        {!isMobile && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            sx={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <Box
              component={motion.div}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Mouse />
            </Box>
            <Typography variant="caption">Scroll Down</Typography>
          </Box>
        )}
      </Container>
    </HeroSection>
  );
};

export default Hero; 