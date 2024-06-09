import React from 'react';
import { Grid, Typography, Avatar, Box } from '@mui/material';

const testimonialContainerStyle = {
  flexGrow: 1,
  padding: '16px', // Adjust padding as needed
};

const testimonialCardStyle = {
  marginTop: '10px',
  width: '80%',
  margin: 'auto',
  height: '100%',
  padding: '16px', // Adjust padding as needed
  borderRadius: '4px', // Adjust border radius as needed
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  background: 'linear-gradient(to right, #fff, #fff)',
};

const avatarStyle = {
  width: '100%', // Adjust avatar width
  height: 'auto', // Adjust avatar height
  marginBottom: '8px', // Adjust margin as needed
};

const Testimonial = ({ image, name, role, location }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box style={testimonialCardStyle}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar alt={name} src={image} style={avatarStyle} />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">
              {name}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {role}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {location}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      name: 'Jayram Gaikwad',
      role: 'Founder, J A Gaikwad & Associates',
      location: 'Katraj, Pune',
    },
    {
      image: 'assets/anita_gaikwad_profile.png',
      name: 'Anita Gaikwad',
      role: 'Partner, J A Gaikwad & Associates',
      location: 'Nangaon, Daund',
    },
    {
      image: 'assets/profile_rahuri_resize.png',
      name: 'Abhijeet Kaware',
      role: 'Partner, J A Gaikwad & Associates',
      location: 'Rahuri, Ahmednagar',
    },
  ];

  return (
    <Box style={testimonialContainerStyle}>
      <Typography variant="h4" align="center" style={{ fontWeight: 'bold' , textDecoration:"underline" ,textDecorationColor:"#0A84FF"}}>
        Our Team
      </Typography>
      <Grid container spacing={2} mt={1}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
