import React from 'react';
import { Container, Typography, Box, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: 'linear-gradient(180deg, rgba(150, 1, 1, 0.6), rgba(150, 0, 0, 0.8), rgba(150, 0, 0, 1))',
        padding: '30px 0',
        marginTop: '50px',
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        {/* Top section with address and contact info */}
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} md={4}>
          <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} md={2}>
          <img
                        src="/images/logo.png"
                        width="50"
                        height="50"
                        alt="."
                    >
                    </img>
                    </Grid>
                    <Grid item xs={12} md={2}>
          <Typography fontFamily="Metal Mania" variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
         DnilbThrift 
          </Typography>
          </Grid>
          </Grid>
          </Grid>

          {/* Middle section for navigation links */}
          <Grid item xs={12} md={4}>
          <Typography variant="body2" color="textSecondary" sx={{ color: '#ffffff' }}>
            <Link href="/privacy-policy" color="#ffffff">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-of-service" color="#ffffff">
              Terms of Service
            </Link>{' '}
            |{' '}
            <Link href="/cookie-policy" color="#ffffff">
              Cookie Policy
            </Link>
            <Typography variant="body2" color="textSecondary" sx={{ color: '#ffffff' }}>
            © {new Date().getFullYear()} DnilbThrift. All rights reserved.
          </Typography>
          </Typography>
          </Grid>

          {/* Social media icons */}
          <Grid item xs={12} md={4}>
            <IconButton href="https://facebook.com" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Bottom section with legal links */}
       
        {/* Copyright info */}
        
      </Container>
    </Box>
  );
};

export default Footer;
