import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const SkillCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Bootstrap', 'Chrome DevTools', 'Postman'] },
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'Domain-Driven Design', 'Event-Driven Architecture', 'MySQL', 'PostgreSQL', 'MongoDB', 'JUnit', 'Mockito'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Bitbucket', 'Jenkins', 'GitLab CI', 'Docker', 'Maven', 'Tomcat', 'AWS (EC2, S3, Lambda)', 'Jira', 'Confluence', 'Agile (Scrum)', 'TDD'] },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
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
            Skills
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skillGroup, index) => (
              <Grid item xs={12} md={4} key={index}>
                <SkillCard>
                  <Typography variant="h5" gutterBottom>
                    {skillGroup.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {skillGroup.items.map((skill, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          padding: '4px 12px',
                          borderRadius: '4px',
                          margin: '4px',
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 