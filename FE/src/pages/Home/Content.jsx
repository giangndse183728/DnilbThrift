import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, Card, CardMedia, CardContent, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import { fetchItems } from '../../api/Homepage_api';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Content() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    
    const getItems = async () => {
      try {
        const items = await fetchItems();
        setClothes(items.data.data);
      } catch (error) {
        console.error('Failed to fetch clothes:', error);
      }
    };
    getItems();
  }, []);

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
  });
    
  return (
    
    <Grid container spacing={1} sx={{mt:3, justifyContent: 'center'}}>
    {clothes.map((clothes) => (
      <Grid item xs={12} sm={3} key={clothes.id} sx={{ display: 'flex', justifyContent: 'center' }}
        data-aos="fade-up"
        data-aos-delay={clothes.id * 150}
      >
        <Card 
        
          elevation={3} 
          style={{ 
            borderRadius: '8px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            width: '350px', 
            height:'410px',
            transition: 'all 0.3s ease-in-out', 
          }}
          sx={{
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            },
          }}
        >
          <CardMedia
            component="img"
            image={clothes.image}
            alt={clothes.name}
            style={{ objectFit: 'contain', backgroundColor: 'transparent', height:'300px'}}
          />

          <CardContent>
          <Typography variant="h6">{clothes.name}</Typography>
          <Typography variant="body2">{clothes.brand}</Typography>
            <Grid container spacing={2}> 
              <Grid item xs={7}>
            
            <Typography variant="body2">${clothes.price}</Typography>
            </Grid>
            <Grid item xs={5}>
            <StyledRating
        name="customized-color"
        defaultValue={clothes.condition}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<HeartBrokenIcon fontSize="inherit" />}
        emptyIcon={<HeartBrokenOutlinedIcon fontSize="inherit" />}
        readOnly
      />
      </Grid>
      </Grid>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  )
}
