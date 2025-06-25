import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Work, Business, CalendarToday, LocationOn } from '@mui/icons-material';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  borderRadius: '12px',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    borderColor: theme.palette.primary.main,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-2px',
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
  },
}));

const CompanyIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontSize: '1.5rem',
}));

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Accolite Digital Private Limited',
    location: 'Gurugram, India',
    duration: 'Sep 2020 - May 2022',
    description: 'Leading development of enterprise-level applications using Java, Spring Boot, and microservices architecture. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Developed and deployed Pruleads, a critical lead and campaign management system for Prudential One Pulse initiative, enabling over 10,000 field agents to efficiently manage prospects across campaigns',
      'Built and scaled a robust microservices architecture using Java, Spring Boot, and AWS, improving lead assignment processing time by 35% and supporting real-time backend event handling',
      'Automated REST API testing with JUnit & Mockito, achieving 90% test coverage and reducing manual QA cycles by 50%',
      'Integrated Swagger and Kafka for seamless API documentation and real-time campaign event streaming, enhancing development-to-QA handoff and boosting event throughput by 40%',
      'Utilized SQL and Cassandra for high-performance data operations, optimizing lead targeting logic and contributing to a significant increase in campaign conversion effectiveness',
      'Streamlined CI/CD pipelines using DevOps tools and SonarQube, leading to a 30% improvement in deployment frequency and ensuring consistently high code quality across all releases'
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Kubernetes', 'Kafka']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Pegasus Info private limited',
    location: 'Mumbai, India',
    duration: 'Sep 2019 - Sep 2020',
    description: 'Developed and maintained multiple web applications using Java and Spring framework. Collaborated with cross-functional teams in agile environment.',
    achievements: [
      'Developed a Loan Management System (LMS) with modules like Account, Scheduler, and Bulk Upload, streamlining loan operations for more than 10,000 customer accounts',
      'Engineered a scalable microservices architecture using Spring Boot, JPA, AWS, Eureka, Hystrix, and Feign, enhancing system flexibility and fault tolerance',
      'Designed and implemented comprehensive test suites leveraging black-box and white-box techniques, achieving 95%+ backend test coverage across modules',
      'Built a dynamic UI with Angular 7, significantly improving usability and reducing customer service interaction times by 30%',
      'Led development of critical LMS features, including automated scheduling, high-volume data ingestion via Bulk Upload, and real-time account tracking',
      'Collaborated with globally distributed Agile teams, facilitating sprint planning, QA coordination, and continuous delivery of production-grade releases'
 ],
    technologies: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    duration: 'Oct 2016 - Sep 2019',
    description: 'Started career as a junior developer working on various web applications. Learned modern development practices and technologies.',
    achievements: [
      'Designed and developed multiple enterprise web applications, including Automatic Ticket Creation (ATC) and Customer Purchase Order Administration (CPOA), streamlining internal operations and reducing manual workload by 40%',
      'Built scalable Java microservices using Spring Boot, integrating machine learning for automated ticket creation and predictive analytics to enhance service response',
      'Engineered data-rich backend systems with SQL, Cassandra, MapR, and PostgreSQL, and crafted UI components using Apache Wicket, ensuring high availability and responsive performance',
      'Created a social networking app for employees (Fun Club) featuring OAuth authentication, media sharing, speech commands, and WDP API integration, improving engagement across 500+ users',
      'Automated functional and regression test suites using Selenium, JUnit, and Mockito, integrating them into a CI/CD pipeline with Jenkins to enable faster, reliable deployments',
      'Collaborated in Agile teams to deliver ML-powered solutions like Insite, enhancing decision-making through predictive recommendations and contributing to a 25% improvement in task resolution accuracy'
    ],
    technologies: ['Java', 'Spring', 'Springboot','JavaScript', 'HTML/CSS', 'Git', 'Maven']
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
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
            Professional Experience
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
            My journey in software development, from junior developer to senior engineer, with a focus on building scalable and reliable applications.
          </Typography>
          
          <Grid container spacing={4}>
            {experience.map((job, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ExperienceCard>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                          <CompanyIcon>
                            <Business />
                          </CompanyIcon>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600,
                              color: 'primary.main',
                              mb: 1
                            }}
                          >
                            {job.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontWeight: 500,
                              mb: 1
                            }}
                          >
                            {job.company}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <CalendarToday sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {job.duration}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <LocationOn sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {job.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={9}>
                        <Typography 
                          variant="body1" 
                          paragraph
                          sx={{ 
                            lineHeight: 1.6,
                            mb: 3
                          }}
                        >
                          {job.description}
                        </Typography>
                        
                        <Box sx={{ mb: 3 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600,
                              mb: 2,
                              color: 'primary.main'
                            }}
                          >
                            Key Achievements:
                          </Typography>
                          <Box component="ul" sx={{ pl: 2 }}>
                            {job.achievements.map((achievement, i) => (
                              <Typography 
                                key={i}
                                component="li" 
                                variant="body2"
                                sx={{ 
                                  mb: 1,
                                  lineHeight: 1.5,
                                  color: 'text.secondary'
                                }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                        
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600,
                              mb: 2,
                              color: 'primary.main'
                            }}
                          >
                            Technologies Used:
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {job.technologies.map((tech, i) => (
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
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </ExperienceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              Continuous Growth
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              I believe in continuous learning and staying updated with the latest technologies and industry best practices to deliver exceptional results.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 