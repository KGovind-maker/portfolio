import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import profileImage from '../assets/images/gk.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
  paddingTop: '100px',
  backgroundColor: theme.palette.background.default,
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
  gap: theme.spacing(2),
}));

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Section - Image */}
          <Grid item xs={12} md={4}>
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
                    maxWidth: '300px',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                  }}
                />
              </ImageContainer>
            </motion.div>
          </Grid>

          {/* Right Section - Content */}
          <Grid item xs={12} md={8}>
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
                    letterSpacing: '1px'
                  }}
                >
                  Hi, I'm
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                    color: theme => theme.palette.text.primary
                  }}
                >
                  Govind Kumawat
                </Typography>

                <Typography
                  variant="h3"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    lineHeight: 1.2,
                    fontWeight: 600
                  }}
                >
                  I build robust and scalable software solutions for the web.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ 
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    opacity: 0.9
                  }}
                >
                  I'm focused on building human-centered, cloud-native applications using modern frameworks and best practices. I enjoy taking on challenging problems, optimizing systems for performance, and contributing to meaningful projects that make a difference.
                </Typography>
              </ContentContainer>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero; 