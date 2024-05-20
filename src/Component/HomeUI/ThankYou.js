import React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string().required('Mobile number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('mobile', values.mobile);
    formData.append('message', values.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzxsNLou8NI1yaYGG-MFGCP8shzgqgbT2evb9pM94IslIUqbwEX9eQKRLCzm46T_Q6MUA/exec",
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      if (response.ok || response.type === 'opaque') {
        alert("Thank you, the form has been submitted successfully");
        window.location.reload();
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
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Card sx={{ maxWidth: 500, margin: '0 auto', marginTop: '20px', borderRadius: "15px", padding: "20px" }}>
          <CardContent>
            <Typography variant="h6" align="center" style={{ marginBottom: "10px" }}>Contact Us</Typography>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="mobile"
                    label="Mobile"
                    variant="outlined"
                    fullWidth
                    error={touched.mobile && !!errors.mobile}
                    helperText={touched.mobile && errors.mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="message"
                    label="Message"
                    multiline
                    variant="outlined"
                    rows={4}
                    fullWidth
                    error={touched.message && !!errors.message}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" style={{ backgroundColor: "#fd5b03", color: "white" }} type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default ContactForm;