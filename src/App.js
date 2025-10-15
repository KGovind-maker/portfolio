import React, { lazy } from 'react';
import { ThemeProvider, StyledEngineProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import getTheme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LazySectionCard from './components/LazySectionCard';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

// Global styles (function of theme)
const makeGlobalStyles = (theme) => ({
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    lineHeight: 1.6,
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.background.paper,
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      borderRadius: '5px',
    },
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 700,
    margin: '0 0 1rem 0',
    color: theme.palette.text.primary,
  },
  p: {
    margin: '0 0 1.5rem 0',
    color: theme.palette.text.secondary,
  },
  a: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  section: {
    padding: '5rem 0',
    [theme.breakpoints.down('md')]: {
      padding: '3rem 0',
    },
  },
});

function App() {
  const mode = useSelector((state) => state.ui.themeMode);
  const theme = getTheme(mode);
  const globalStyles = makeGlobalStyles(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Router>
          <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <LazySectionCard id="hero">
                <Hero />
              </LazySectionCard>
              <LazySectionCard id="about">
                <About />
              </LazySectionCard>
              <LazySectionCard id="experience">
                <Experience />
              </LazySectionCard>
              <LazySectionCard id="projects">
                <Projects />
              </LazySectionCard>
              <LazySectionCard id="skills">
                <Skills />
              </LazySectionCard>
              <LazySectionCard id="contact">
                <Contact />
              </LazySectionCard>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
