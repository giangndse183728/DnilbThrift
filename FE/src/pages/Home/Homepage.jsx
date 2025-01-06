import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, Typography,  Card, CardMedia, CardContent } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import DoubleBorderButton from '../../components/ButtonCus';
import Stack from '@mui/material/Stack';
import './HomepageStyle.css'
import Content from './Content';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <Grid container component="main" >
        <Box
          sx={{
            position: 'fixed',  // Changed to 'fixed' to make it stick to the viewport
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -2,



          }}
        />
        <Grid container sx={{ m:8}}>
          <Grid item xs={6} data-aos="fade-right">
          
          <Box
          
      sx={{
   
        transition: 'transform 0.8s ease',
        '& > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(180deg)',
          },
        },
        
      }}
    >
     
      <div>
           <img className="imgrick" src="\images\rick.png" width="108%"></img>        
           </div>
    
            
            </Box>
            <Typography fontFamily="Nothing You Could Do" variant='h5' sx={{mt: 8,textAlign:"center"}} data-aos="fade-up" >- <span className="highlighted-text">✠</span> - RO Kiss Boots - <span className="highlighted-text">✠</span> - </Typography>
          </Grid>

          <Grid item xs={6} data-aos="fade-left">
            <Typography fontFamily="RocknRoll One" variant='h5' sx={{ mb: 4 }}>Welcome to <span className="highlighted-text"> Dnilbthrift </span>: Your Ultimate Fashion Destination</Typography>

            <Typography variant="subtitle1" color='#4a4949'>
              At dnilbthrift, we believe that fashion is more than just clothing – it's a statement, a way to express your unique personality and style. Our curated selection offers a blend of contemporary trends and timeless pieces, ensuring there's something for everyone. Whether you're searching for everyday essentials or a standout item for a special occasion, our market is dedicated to providing high-quality fashion at accessible prices. Explore dnilbthrift and discover the perfect pieces to elevate your wardrobe and redefine your style, one outfit at a time.
            </Typography>
            <Grid container sx={{ mt: 4 }}>
              <Grid item xs={4}  >
              <DoubleBorderButton> 
            <span class="highlighted-text"> ✠ </span> &nbsp;Shop Now </DoubleBorderButton>
              </Grid>
              <Grid item xs={4} >
              <DoubleBorderButton>
                 <InstagramIcon  sx={{ fontSize: 15, color:"red" }} /> &nbsp;instagram</DoubleBorderButton>
              </Grid>
              <Grid item xs={4} >
              <Typography color="rgba(150, 1, 1, 1)" variant="h4" fontFamily="Metal Mania">+++++++++++</Typography>
              </Grid>
            </Grid>
            <Box
      sx={{
        border: '2px dashed black', // Black border
        
        padding: '16px', // Padding inside the box
        textAlign: 'center', // Center text
        maxWidth: '400px', // Max width for the box
        mt: 5,  
      }}
    >
      <Grid container spacing={2}>
        {/* Column 1 */}
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ color: 'black' }}>
            Up to 10K Customers
          </Typography>
        </Grid>
        
        {/* Column 2 */}
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ color: 'black' }}>
            Up to 1K Products
          </Typography>
        </Grid>
        
        {/* Column 3 */}
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ color: 'black' }}>
            Up to 1M Followers
          </Typography>
        </Grid>
      </Grid>
    </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <Divider sx={{width:"50%", margin: '0 auto'}}>♱</Divider>
        </Grid>
        <Box data-aos="fade-left"
  sx={{
    width: '100%',
    height: '680px',
    opacity: 0.9,
    backgroundImage: 'url(/images/banner.png)',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    mt: 5,
    animation: 'slide 30s linear infinite', // Add animation
    '@keyframes slide': {                   // Define keyframes
      from: {
        backgroundPosition: '0 center',
      },
      to: {
        backgroundPosition: '-500% center', 
      }
    }
    
  }}
></Box>

<Grid item xs={12} data-aos="fade-up">
        <Typography fontFamily="RocknRoll One" variant='h4' sx={{ mt: 5 , textAlign:"center"}}>  🕀 Collection  </Typography>

        <Typography  variant='subtitle1' sx={{ mt: 2 , mb: 3, mx:20, textAlign:"center"}} data-aos="fade-up" data-aos-delay="200">  Explore Our Exclusive Collection: Discover limited-edition and rare item from brands like Rick Owens, Balenciaga.... Each piece is in excellent condition and offered at a great price, bringing you high fashion and exceptional value. </Typography>

        <Stack direction="row"  spacing={10} justifyContent="center" sx={{ mb:3}} data-aos="fade-up" data-aos-delay="400">
  <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiCrqtdM2fXotnSKYEE8kwolg16aCcm47VQ&s' sx={{ width: 90, height: 90 }}/>
  <Avatar src='https://i.pinimg.com/736x/f7/18/53/f71853230b0569507333dc4546d20c4c.jpg' sx={{ width: 90, height: 90 }}/>
  <Avatar  src='https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/a5311836eaab67de2b7be277ec7e789d'sx={{ width: 90, height: 90 }}/>
  <Avatar  src='https://cdn.brandfetch.io/rafsimons.com/fallback/transparent/theme/dark/h/256/w/256/icon'sx={{ width: 90, height: 90 }}/>
  <Avatar src='https://logowik.com/content/uploads/images/comme-des-garcons2876.jpg' sx={{ width: 90, height: 90 }}/>
  <Avatar  src='https://styles.redditmedia.com/t5_36b188/styles/communityIcon_40u0ezzrzbi71.png'sx={{ width: 90, height: 90 }}/>
</Stack>
<Divider sx={{width:"50%", margin: '0 auto '}}>♱</Divider>
        </Grid>

      </Grid>

      <Content />

    </>
  )
}
