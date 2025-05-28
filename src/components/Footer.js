import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.background.paper,
}));

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              color="primary"
              href="https://github.com/yourusername"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              href="https://twitter.com/yourusername"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer; 