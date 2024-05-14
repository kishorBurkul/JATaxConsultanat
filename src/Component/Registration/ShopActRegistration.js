import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
const ShopActRegistration = () => {

    // const validationSchema = Yup.object().shape({
    //     name: Yup.string().required('Name is required'),
    //     email: Yup.string().email('Invalid email').required('Email is required'),
    //     mobile: Yup.string().required('Mobile number is required'),
    //     message: Yup.string().required('Message is required')
    // });

    // const handleSubmit = async (values, { resetForm }) => {
    //     try {
    //         const response = await axios.post(
    //             'YOUR_GOOGLE_SHEETS_API_ENDPOINT',
    //             values
    //         );
    //         console.log(response.data);
    //         // Optionally, clear form fields after successful submission
    //         resetForm();
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };

    return (
        <>
            <div className="relative overflow-hidden">

                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/Registration/shop-Act-Registration.jpg"
                    alt="Services Header"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center"> Shop Act Registration</h1>
                </div>
            </div>
            <Grid container spacing={2}
                justifyContent="center">
                <Grid container mx={4} mt={4} spacing={4}>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Shop Act Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                        In India, a "Shop and Establishment Act" registration is required for all businesses that operate a physical storefront or office. This registration is typically obtained from the local Municipal Corporation or the Department of Labor. The registration process may vary depending on the state in which the business is located, but generally requires the submission of some personal and business information, as well as payment of a fee. Once registered, businesses are required to comply with certain labor laws and regulations, such as maintaining certain records and providing certain benefits to employees.
                             </Typography>
                        <Box mb={4}>
                            <Typography variant='h5' sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}> <b>Documents Required</b></Typography>
                            <Accordion defaultExpanded sx={{ backgroundColor: "#dee2e6" }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6' >Shop Act Registration Procedure</Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}>The procedure for obtaining a Shop and Establishment Act registration in India may vary depending on the state in which the business is located. However, the general process is as follows:</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>Fill out the application form:</b> Obtain the application form for the Shop and Establishment Act registration from the local Municipal Corporation or Department of Labor office. The form will require information such as the business name and address, owner's name and address, and details about the nature of the business.
                                    </ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>Submit the form and required documents: </b>Submit the completed application form along with the required documents, such as proof of business address and identity of the owner.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>Pay the fee: </b> Pay the fee for the registration, which may vary depending on the state and the nature of the business.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>Inspection: </b>An inspector from the Municipal Corporation or Department of Labor may visit the business premises for inspection.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>Issue of registration certificate: </b> Once the inspection is completed and all requirements are met, the registration certificate will be issued.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; <b>It is important to note that some states in India may have different rules, regulations and documents required to register. It's best to contact the local Municipal Corporation or Department of Labor office to know the exact requirement. </b></ListItemText>
                                  
                                    
                            


                                </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Shop Act Registration Validity </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The validity of a Shop and Establishment Act registration in India may vary depending on the state in which the business is located. In general, the registration is valid for the duration of time that the business is operational. Some states may require that the registration be renewed on a yearly or bi-yearly basis.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; It's important to renew the registration in a timely manner to avoid any penalties or legal issues. It's also important to note that if the business closes down or changes its location, the registration will no longer be valid and will need to be obtained again.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; It is best to check with the local Municipal Corporation or Department of Labor office for more information on the specific validity period and renewal procedures for the Shop and Establishment Act registration in the state in which the business is located.</ListItemText>
                                      
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                    </Grid>

                    {/* Right Column (4 Grids) */}
                    <Grid item xs={12} sm={4} mb={4} >
                        {/* <Formik
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
                                <Form >
                                    <Typography variant='h6' display="flex" justifyContent="center">Equiry Form</Typography>

                                    <Grid item xs={12}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            error={touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="email"

                                            label="Email"
                                            fullWidth
                                            error={touched.email && !!errors.email}
                                            helperText={touched.email && errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="mobile"

                                            label="Mobile"
                                            fullWidth
                                            error={touched.mobile && !!errors.mobile}
                                            helperText={touched.mobile && errors.mobile}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="message"

                                            label="Message"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            error={touched.message && !!errors.message}
                                            helperText={touched.message && errors.message}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary" fullWidth type="submit">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Form>
                            )}
                        </Formik> */}
                        <ContactForm />
                    </Grid>
                </Grid>


            </Grid>
        </>

    );
};

export default ShopActRegistration;
