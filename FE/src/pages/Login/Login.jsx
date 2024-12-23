import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Grid, ToggleButton, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import GoogleSignInButton from '../../components/GoogleButton';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {

    const [selectedTab, setSelectedTab] = React.useState('login'); // State to keep track of selected button

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            {/* Full-Screen Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://www.miamidesigndistrict.com/images/listings/large/363_rick-owens_1630503172238324.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: selectedTab === 'sign' ? 'rgba(90, 1, 1, 0)' : 'rgba(90, 1, 1, 0.4)', // Change overlay transparency
                        transition: 'background 0.5s ease-in-out', // Smooth transition effect

                    },



                    zIndex: -1, // Behind the content
                }}
            />


            {/* Login Form */}


            <Grid
                item
                xs={12}
                sm={7}
                md={6}
                lg={5}

                component={Paper}
                elevation={12}
                square
                sx={{
                    ml: { md: 15, sm: 0 },
                    mt: { md: 5, sm: 0 },
                    mb: { md: 4, sm: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                    backdropFilter: 'blur(1px)', // Apply blur effect on the card itself
                    borderRadius: 2,
                    px: 6,
                    transition: 'transform 0.5s ease-in-out', // Apply transition for smooth effect
                    transform: selectedTab === 'sign' ? 'translateX(100%)' : 'translateX(0)', // Move to right on Sign Up

                }}
            >
                <Box
                    sx={{

                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="/images/logo.png"
                        width="80"
                        height="80"
                        alt="."
                    >

                    </img>
                    <Typography fontFamily="Nothing You Could Do" component="h1" variant="h5" sx={{ mt: 1, mb: 2 }}>
                        DnilbThrift
                    </Typography>

                    <Box
                        sx={{
                            mt: 1,
                            display: 'flex',
                            alignItems: 'center',
                            border: 'none',
                            color: 'text.secondary',
                        }}
                    >
                        <ToggleButton
                            color="error"
                            sx={{ border: "none", width: 200, }}
                            value="login"
                            selected={selectedTab === 'login'}
                            onClick={() => setSelectedTab('login')}

                        >
                            Login
                        </ToggleButton>
                        <Divider sx={{ m: 1 }} orientation="vertical" variant="middle" flexItem />
                        <ToggleButton
                            color="error"
                            sx={{ border: "none", width: 200 }}
                            value="sign"
                            selected={selectedTab === 'sign'}
                            onClick={() => setSelectedTab('sign')}
                        >
                            Sign Up
                        </ToggleButton>
                    </Box>

                    <Box component="form" noValidate >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        {/* Confirm Password Field with Smooth Transition */}
                        <Box
                            sx={{
                                maxHeight: selectedTab === 'sign' ? '200px' : '0px', // Control max height based on tab
                                overflow: 'hidden', // Hide overflow content
                                transition: 'max-height 1.0s ease-in-out', // Smooth transition for height
                            }}
                        >
                            <TextField

                                margin="normal"
                                required
                                fullWidth
                                name="confirm-password"
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"
                                autoComplete="current-password"
                            />

                           <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Phone "
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                        </Box>

                        <Grid container alignItems="center"
                            sx={{
                                maxHeight: selectedTab === 'login' ? '100px' : '0px', // Control max height based on tab
                                overflow: 'hidden', // Hide overflow content
                                transition: 'max-height 1.0s ease-in-out', // Smooth transition for height
                            }} >
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>

                            <Grid item xs={6} display="flex" justifyContent="flex-end">
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<img src="/images/iconcross.png" alt="" style={{ width: '25px', marginRight: '1px' }} />}
                            sx={{
                                mt: 3,
                                mb: 1,
                                backgroundColor: '#b80202', // Button background color
                                color: 'white', // Text color to contrast with the background
                                '&:hover': {
                                    backgroundColor: '#990000', // Optional: Darker shade for hover effect
                                },
                            }}
                        >

                            Sign In
                        </Button>

                        {selectedTab === "login" && (
                        <GoogleSignInButton />
                        )}






                        <Box mt={2} mb={1}>
                            <Copyright />
                        </Box>
                    </Box>
                </Box>
            </Grid>




        </Grid>
    );
}
