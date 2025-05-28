import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ContactForm = styled('form')(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto',
}));

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactSection id="contact">
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
            Get In Touch
          </Typography>
          <ContactForm onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </ContactForm>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 