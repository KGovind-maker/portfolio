import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { 
  Email, 
  Phone, 
  LocationOn, 
  GitHub, 
  LinkedIn, 
  Twitter,
  Send,
  CheckCircle
} from '@mui/icons-material';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ContactForm = styled('form')(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
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

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: '50px',
  height: '50px',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  margin: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-3px)',
  },
  transition: 'all 0.3s ease',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <ContactSection id="contact">
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
            Get In Touch
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
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactCard>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 3
                    }}
                  >
                    Contact Information
                  </Typography>
                  
                  <ContactInfo>
                    <Email />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        govindkumawat.gk@gmail.com
                      </Typography>
                    </Box>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <Phone />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +61 451713263
                      </Typography>
                    </Box>
                  </ContactInfo>
                  
                  <ContactInfo>
                    <LocationOn />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Location
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sydney, NSW, Australia
                      </Typography>
                    </Box>
                  </ContactInfo>

                  <Box sx={{ mt: 4 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 2
                      }}
                    >
                      Follow Me
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
                    </Box>
                  </Box>
                </ContactCard>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactCard>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 3
                    }}
                  >
                    Send Me a Message
                  </Typography>
                  
                  <ContactForm onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          type="email"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                          multiline
                          rows={6}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={isSubmitted ? <CheckCircle /> : <Send />}
                          disabled={isSubmitted}
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
                            '&:disabled': {
                              backgroundColor: 'rgba(100, 255, 218, 0.2)',
                              color: 'primary.main',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {isSubmitted ? 'Message Sent!' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </ContactForm>
                </ContactCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 