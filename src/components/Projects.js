import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { projects } from '../data/projects';

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 4, textAlign: 'center' }}
          >
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech, i) => (
                        <Typography
                          key={i}
                          variant="caption"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 