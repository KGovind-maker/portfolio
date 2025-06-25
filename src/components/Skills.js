import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { 
  Code, 
  Storage, 
  Build, 
  Cloud, 
  Security, 
  AutoAwesome
} from '@mui/icons-material';

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    borderColor: theme.palette.primary.main,
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontSize: '2rem',
}));

const SkillTag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1.5),
  margin: theme.spacing(0.5),
  borderRadius: '20px',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.2)',
    transform: 'translateY(-2px)',
  },
}));

const skills = [
  {
    category: 'Backend Development',
    icon: <Storage />,
    description: 'Building robust server-side applications and APIs',
    items: [
      { name: 'Java', proficiency: 95 },
      { name: 'Spring Boot', proficiency: 95 },
      { name: 'Spring MVC', proficiency: 80 },
      { name: 'Spring Data JPA', proficiency: 88 },
      { name: 'Hibernate', proficiency: 75 },
      { name: 'REST APIs', proficiency: 92 },
      { name: 'Microservices', proficiency: 90 }
    ]
  },
  {
    category: 'Frontend Development',
    icon: <Code />,
    description: 'Creating responsive and interactive user interfaces',
    items: [
      { name: 'HTML5', proficiency: 90 },
      { name: 'CSS3', proficiency: 85 },
      { name: 'TypeScript', proficiency: 75 },
      { name: 'React.js', proficiency: 78 },
      { name: 'Chrome DevTools', proficiency: 88 },
      { name: 'Postman', proficiency: 90 }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <Build />,
    description: 'Streamlining development and deployment processes',
    items: [
      { name: 'Git', proficiency: 92 },
      { name: 'GitHub', proficiency: 90 },
      { name: 'Jenkins', proficiency: 85 },
      { name: 'Docker', proficiency: 78 },
      { name: 'Maven', proficiency: 88 },
      { name: 'AWS (EC2, S3, Lambda)', proficiency: 80 },
      { name: 'Jira', proficiency: 85 },
      { name: 'Agile (Scrum)', proficiency: 90 }
    ]
  },
  {
    category: 'Database & Cloud',
    icon: <Cloud />,
    description: 'Managing data and cloud infrastructure',
    items: [
      { name: 'MySQL', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 82 },
      { name: 'MongoDB', proficiency: 75 },
      { name: 'AWS Services', proficiency: 80 },
      { name: 'Performance Optimization', proficiency: 85 }
    ]
  },
  {
    category: 'Testing & Quality',
    icon: <Security />,
    description: 'Ensuring code quality and reliability',
    items: [
      { name: 'JUnit', proficiency: 90 },
      { name: 'Mockito', proficiency: 88 },
      { name: 'TDD', proficiency: 85 },
      { name: 'Integration Testing', proficiency: 88 },
      { name: 'SonarQube', proficiency: 82 },
      { name: 'Code Review', proficiency: 90 },
      { name: 'Performance Testing', proficiency: 80 }
    ]
  },
  {
    category: 'Specialized Skills',
    icon: <AutoAwesome />,
    description: 'Advanced technologies and methodologies',
    items: [
      { name: 'Machine Learning', proficiency: 75 },
      { name: 'Kafka', proficiency: 80 },
      { name: 'System Design', proficiency: 85 },
      { name: 'API Design', proficiency: 88 },
      { name: 'Security Best Practices', proficiency: 85 },
      { name: 'Scalability', proficiency: 82 },
      { name: 'Problem Solving', proficiency: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
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
            Skills & Expertise
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
            My technical skills span across full-stack development, with expertise in building scalable applications and implementing best practices.
          </Typography>
          
          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3,
              '@media (max-width: 960px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
              '@media (max-width: 600px)': {
                gridTemplateColumns: '1fr',
              },
            }}
          >
            {skills.map((skillGroup, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <SkillIcon>
                        {skillGroup.icon}
                      </SkillIcon>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 1
                        }}
                      >
                        {skillGroup.category}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ fontSize: '0.9rem' }}
                      >
                        {skillGroup.description}
                      </Typography>
                    </Box>
                    
                    <Box>
                      {skillGroup.items.map((skill, i) => (
                        <Box key={i} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.proficiency}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.proficiency}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: 'primary.main',
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </SkillCard>
                </motion.div>
              </Box>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Always Learning
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              I'm constantly expanding my skill set and staying updated with the latest technologies and best practices in software development.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 