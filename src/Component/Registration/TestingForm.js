import React from 'react';
import { Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormComponent from './FormComponent'; // Ensure this path matches your project structure
import ContactForm from './ContactForm';

const TestingForm = () => {
  return (
    <Box>
      <Box className="relative overflow-hidden">
        <img
          className="w-full h-64 sm:h-96 object-cover"
          src="assets/Registration/pan-card-registration.jpg"
          alt="Services Header"
        />
        <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-center">PAN Registration</h1>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the description inside the accordion. You can place any text or other components here.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <FormComponent />
            {/* <ContactForm/> */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestingForm;
