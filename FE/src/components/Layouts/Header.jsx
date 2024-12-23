import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [scale, setScale] = React.useState(1); // State for the zoom effect

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = Math.min(1 + scrollTop / 1000, 1.5); // Scale video between 1 and 2
      setScale(newScale);
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
            <>
    <Box 
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100vh', // Full viewport height
    }}
     >
    <video 
      src="/collection/heliot.mp4"  // Replace with your actual video source
      autoPlay
      muted
      loop
      playsInline
      width="100%"
    
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: `scale(${scale})`, // Apply scaling transformation
        transition: 'transform 0.1s ease-out', // Smooth transition for zoom effect
      }}
    />
  </Box>

    <Box sx={{  mb: 5}}>
      
      {/* Conditionally render the navbar based on scroll */}
      <AppBar
        sx={{
          bgcolor: 'rgba(150, 1, 1, 0.9)',
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
          opacity: showNavbar ?  1 : 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontFamily="Metal Mania" variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          ♱ &nbsp; DnilbThrift &nbsp; ♱
          </Typography>
          <NavLink to="/Login" className="nav-link">
          <Button sx={{ color: 'white' }}>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>

      {!showNavbar && (
        <AppBar
          sx={{
            bgcolor: 'rgba(150, 1, 1, 0.0)',
            boxShadow: 'none',
            position: 'fixed',
            top: 0,
            width: '100%',
            transition: 'opacity 0.5s ease-in-out',
            opacity: showNavbar ? 0 : 1,
            
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="black" fontFamily="Metal Mania" variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            ♱ &nbsp; DnilbThrift &nbsp; ♱
            </Typography>
            <NavLink to="/Login" className="nav-link">
            <Button sx={{ color: 'black' }}>Login</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer component for the off-canvas menu */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography fontFamily="Metal Mania" color='red' variant="h5" component="div" sx={{ mt: 1, textAlign: 'center' }}>
            + &nbsp; DnilbThrift &nbsp; +
          </Typography>
          <Divider sx={{ m: 2 }} />
          <List>
            {['Home', 'About', 'Contact'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ m: 1 }} />
            <NavLink to="/Login" className="nav-link">
            <ListItemButton> <ListItemText primary="Login" /> </ListItemButton>
            </NavLink>
          </List>
        </Box>
      </Drawer>
    </Box>
    </>
  );
}
