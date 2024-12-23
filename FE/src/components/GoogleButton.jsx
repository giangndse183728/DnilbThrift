import React from 'react';
import { Button } from '@mui/material';

// You can replace this with a local file path or a URL to the Google logo
const googleLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png';

function GoogleSignInButton() {
    return (
        <Button
            variant="outlined"
            fullWidth
            startIcon={<img src={googleLogoUrl} alt="Google logo" style={{ width: '20px', marginRight: '8px' }} />}
            sx={{
                mt: 2,
                mb: 2,
                backgroundColor: 'white', // White background for the button
                color: '#000', // Black text color
                borderColor: '#ccc', // Light gray border
                textTransform: 'none', // Prevent text from being capitalized
                '&:hover': {
                    backgroundColor: '#f5f5f5', // Slightly darker shade on hover
                    borderColor: '#bbb', // Slightly darker border on hover
                },
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: subtle shadow
            }}
        >
            Sign in with Google
        </Button>
    );
}

export default GoogleSignInButton;
