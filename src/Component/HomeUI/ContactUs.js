import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { Room, Phone, Mail } from '@mui/icons-material';
import FormComponent from '../Registration/FormComponent';

const ContactUs = () => {
  return (
    <Box>
      <Box className="relative overflow-hidden">
       
        <img
          className="w-full h-64 sm:h-96 object-cover mt-12"
          src="assets/ja_contact_us.png"
          alt="Services Header"
        />
        <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <Typography variant="h4" align="center">Contact Us</Typography>
        </Box>
      </Box>
      <Box sx={{ mx: 'auto', px: 4, py: 8 }}>
        <Grid container spacing={3}>
          {/* Branches Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} justifyContent="center">
              {/* Branch 1 */}
              <Grid item xs={12} sm={10} md={8}>
                <Paper className="p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                  <Typography variant="h5" gutterBottom>
                    Katraj, Pune
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Room fontSize="small" sx={{color:"red"}} /> Address: Sr. No. 34/8, Suman Plaza, A Wing, 3rd Floor, Flat No.10 Trimurti Chowk, Near Bharati Vidyapith, Dr. P.K.Nagar, Dhankawadi, Pune Maharashtra - 411046
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Mail fontSize="small" sx={{color:"#FBBC05 "}} /> Email: jagaikwadandassociates@gmail.com
                  </Typography>
                  <Typography variant="body1">
                    <Phone fontSize="small" sx={{color:"blue"}} /> Mobile: 8624058644 / 8668511898
                  </Typography>
                </Paper>
              </Grid>

              {/* Branch 2 */}
              <Grid item xs={12} sm={10} md={8}>
                <Paper className="p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                  <Typography variant="h5" gutterBottom>
                    Rahuri, Ahmednagar
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Room fontSize="small" sx={{color:"red"}} /> Address: At Post -Baragaon Nandur, Near Chhatrapati Shivaji Chowk,Tal- Rahuri, Dist - Ahmednagar -  413705
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Mail fontSize="small" sx={{color:"#FBBC05 "}} /> Email: kawareabhijeet22@gmail.com
                  </Typography>
                  <Typography variant="body1">
                    <Phone fontSize="small" sx={{color:"blue"}} /> Mobile: 8624058644 / 9730574023
                  </Typography>
                </Paper>
              </Grid>

              {/* Branch 3 */}
              <Grid item xs={12} sm={10} md={8}>
                <Paper className="p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                  <Typography variant="h5" gutterBottom>
                    Nangaon, Daund
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Room fontSize="small" sx={{color:"#FBBC05 "}}/> Address: At post - Nangaon, Ganesh Road, Near Jambhulkar Farm House, Tal- Daund, Dist-Pune - 412203
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <Mail fontSize="small" sx={{color:"red"}} /> Email: caanitagaikwad06@gmail.com
                  </Typography>
                  <Typography variant="body1">
                    <Phone fontSize="small"  sx={{color:"blue"}}/> Mobile: 8624058644 / 9579955439
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Paper className="p-6 md:w-11/12">
              <FormComponent />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
