import React from 'react';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Card, CardContent } from '@mui/material';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    message: Yup.string().required('Message is required')
});

const ContactForm = () => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(
                'YOUR_GOOGLE_SHEETS_API_ENDPOINT',
                values
            );
            console.log(response.data);
            // Optionally, clear form fields after successful submission
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const styles = {
        card: {
            maxWidth: 500,
            margin: '0 auto', // Center the card horizontally
            marginTop: '20px', // Add some margin at the top
          },
      };
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                mobile: '',
                message: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                    <Card sx={styles.card}>
                    <CardContent>
                      <Typography variant="h6" align="center">Enquiry Form</Typography>
              
                      <Form sx={styles.form}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              name="name"
                              label="Name"
                              variant="outlined"
                              fullWidth
                              error={touched.name && !!errors.name}
                              helperText={touched.name && errors.name}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              name="email"
                              label="Email"
                              variant="outlined"
                              fullWidth
                              error={touched.email && !!errors.email}
                              helperText={touched.email && errors.email}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              name="mobile"
                              label="Mobile"
                              variant="outlined"
                              fullWidth
                              error={touched.mobile && !!errors.mobile}
                              helperText={touched.mobile && errors.mobile}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
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
                            <Button variant="contained" style={{backgroundColor:"#fd5b03", color:"white"}} type="submit">
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
