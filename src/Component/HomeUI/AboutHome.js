import { Button, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutHome = () => {
  return (
    <Box component="section" sx={{ bgcolor: 'grey.100', py: 6, px: 2 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left side: Image with effects */}
        <Grid item xs={12} md={6} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box 
            component="img"
            src="assets/homepage/aboutus.jpg"
            alt="About Us Image"
            sx={{
              width: { xs: '100%', md: '500px' },
              height: 'auto',
              transform: 'scale(1.05)',
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              boxShadow: 3,
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Right side: Description */}
        <Grid item xs={12} md={6} sm={6}>
          <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" gutterBottom>
            About J.A.Gaikwad & Associates, In Pune
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            J.A.Gaikwad and Associates has established itself as a comprehensive accounting, tax, and audit firm offering a wide array of services to clients across Maharashtra. Founded in 2017 by Jayram Ashok Gaikwad, the firm is led by a team of chartered accountants, tax consultants, and other professionals in India, equipped with extensive knowledge and professional experience.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Our services encompass various areas, including accounting, auditing, direct taxation, Goods & Services Tax (GST), company law consultancy, NRI taxation, startup services, and bookkeeping & outsourcing services. We pride ourselves on being a dedicated group of professionals committed to continuously adding value and optimizing benefits for our clients.
          </Typography>
          <Link to="/about-us" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Read More &gt;&gt;
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHome;
