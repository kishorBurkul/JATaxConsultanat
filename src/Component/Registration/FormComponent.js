import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const FormComponent = () => {
  const navigate = useNavigate()


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
        console.log("data ", response)
        alert("Thank you, the form has been submitted successfully");
        resetForm();
        navigate('/')
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <Paper sx={{ padding: 2, border: 2, borderColor: "orange" }}>
      <Formik
        initialValues={{ name: '', email: '', mobile: '', message: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
              <Typography variant="h5" gutterBottom align='center' color="blue">
                <strong> Contact Us</strong>
              </Typography>
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullwidth
                required
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              <Field
                name="mobile"
                as={TextField}
                label="Mobile"
                type="tel"
                variant="outlined"
                required
              />
              <Field
                name="message"
                as={TextField}
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="outlined" size="medium"
                sx={{
                  backgroundColor: "#fd5b03",
                  color: "white",
                  width: "50%",
                  margin: "0 auto", 
                  '&:hover': {
                    backgroundColor: 'blue'
                  }
                }}>
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default FormComponent;
