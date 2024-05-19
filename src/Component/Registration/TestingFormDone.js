import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';

const TestingFormDone = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('mobile', values.mobile);
    formData.append('message', values.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxUr-6hesAv7K9HF32VdUwej6cnLteRfco4sP5lNzovhDMKroP1QAYw2iHTOTYGkrDOWA/exec",
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      if (response.ok || response.type === 'opaque') {
        console.log("data " ,response)
        alert("Thank you, the form has been submitted successfully");
        resetForm();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', mobile: '', message: '' }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Field 
              name="name" 
              as={TextField} 
              label="Name" 
              variant="outlined" 
              fullWidth 
              required 
            />
            <Field 
              name="email" 
              as={TextField} 
              label="Email" 
              type="email" 
              variant="outlined" 
              fullWidth 
              required 
            />
            <Field 
              name="mobile" 
              as={TextField} 
              label="Mobile" 
              type="tel" 
              variant="outlined" 
              fullWidth 
              required 
            />
            <Field 
              name="message" 
              as={TextField} 
              label="Message" 
              variant="outlined" 
              multiline 
              rows={4} 
              fullWidth 
              required 
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TestingFormDone;
