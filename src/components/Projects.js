import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { GitHub, Launch, Code } from '@mui/icons-material';
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
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    borderColor: theme.palette.primary.main,
  },
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 25, 47, 0.8)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const ProjectActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: theme.spacing(1, 2),
  fontSize: '0.875rem',
  fontWeight: 500,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const Projects = () => {
  return (
    <ProjectsSection id="projects">
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
              mb: 2, 
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Here are some of the projects I've worked on. Each project represents a unique challenge and showcases different aspects of my technical skills.
          </Typography>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard>
                    <ProjectImage
                      image={project.image || 'https://via.placeholder.com/400x200/0a192f/64ffda?text=Project+Image'}
                      title={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          lineHeight: 1.6,
                          mb: 3,
                          flexGrow: 1
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ mb: 1, fontWeight: 500 }}
                        >
                          Technologies used:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {project.technologies.slice(0, 6).map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                color: 'primary.main',
                                border: '1px solid',
                                borderColor: 'primary.main',
                                fontSize: '0.75rem',
                                height: '24px',
                              }}
                            />
                          ))}
                          {project.technologies.length > 6 && (
                            <Chip
                              label={`+${project.technologies.length - 6} more`}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 255, 218, 0.05)',
                                color: 'text.secondary',
                                fontSize: '0.75rem',
                                height: '24px',
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                      
                      <ProjectActions>
                        {project.github && (
                          <ActionButton
                            startIcon={<GitHub />}
                            href={project.github}
                            target="_blank"
                            size="small"
                          >
                            Code
                          </ActionButton>
                        )}
                        {project.live && (
                          <ActionButton
                            startIcon={<Launch />}
                            href={project.live}
                            target="_blank"
                            size="small"
                          >
                            Live Demo
                          </ActionButton>
                        )}
                        {!project.github && !project.live && (
                          <ActionButton
                            startIcon={<Code />}
                            size="small"
                            disabled
                          >
                            Private Project
                          </ActionButton>
                        )}
                      </ProjectActions>
                    </CardContent>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/kgovind-maker"
              target="_blank"
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
            >
              View More on GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 