import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const TextContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
}));

const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About Me
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <TextContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary',
                      mb: 3,
                      textAlign: 'justify'
                    }}
                  >
                    I build robust and scalable software solutions for the web.
                    I'm a seasoned Software Developer with over 6 years of professional experience building secure, scalable, and high-performance applications. My core expertise lies in backend development using Java, Spring Boot, and microservices architecture, and I have a strong track record of delivering complex enterprise systems across domains such as finance, e-commerce, and digital platforms.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary',
                      textAlign: 'justify'
                    }}
                  >
                    Throughout my career, I've collaborated with cross-functional teams in agile environments to build RESTful APIs, implement domain-driven design, and ensure high-quality code through unit/integration testing and CI/CD practices. I'm passionate about clean architecture, efficient problem-solving, and creating digital solutions that are accessible, reliable, and user-centric.
                  </Typography>
                </motion.div>
              </TextContent>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 