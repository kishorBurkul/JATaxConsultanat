import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
const CompanyRegistration = () => {

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
                    src="assets/Registration/Comapant_regi.png"
                    alt="Services Header"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center"> Company Registration</h1>
                </div>
            </div>
            <Grid container spacing={2}
                justifyContent="center">
                <Grid container mx={4} mt={4} spacing={4}>
                    <Grid item xs={12} sm={8}>

                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Company Registration</b></Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom >
                            Company registration refers to the process of legally forming a company and obtaining the necessary licenses and permits to operate as a business entity. This process typically includes the following steps:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <b>Choosing a business name: </b>The company must choose a unique business name that is not already in use by another company and that is compliant with the laws and regulations of the jurisdiction where it will be registered.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <b>Filing articles of incorporation:</b> The company must file formal legal documents, such as articles of incorporation or registration, with the appropriate government agency, typically the Registrar of Companies. These documents provide information about the company's shareholders, directors, and business activities.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <b>Obtaining any necessary licenses and permits</b>: Depending on the type of business, the company may need to obtain licenses and permits to operate legally.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <b>Registering for taxes:</b> The company must register with the tax authorities and obtain a tax identification number.
                        </Typography>
                        <Typography>
                         <b> Complying with other legal requirements:</b> Depending on the jurisdiction, there may be other legal requirements that the company must comply with, such as registering with specific industry regulators or obtaining specific certifications.
                            Once the company is registered and has obtained all necessary licenses and permits, it is considered a legal entity and can begin conducting business operations.
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
                                    <Typography variant='h6' >Document Required For Private Limited Company Registration </Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Colour PP Photograph</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;PAN Card – Self Attested</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Aadhar Card – Self Attested</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Registered Office Address Proof</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Bank Statement – Self Attested</ListItemText>
                                    </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Private Limited Comapny Registration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Limited Financial Liability:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>The term “Limited Liability” means that the individual shareholders’ contribution towards the company debts is limited.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; No Personal Bankruptcy:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>A private Ltd company does not put the entrepreneur at the risk of personal bankruptcy in the event of business failure..</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Default Choice for Company Registration:-</ListItemText>
                                         <ListItemText sx={{ pl: 3 }}>Private Limited Company Registration is the default company registration choice for many new entrepreneurs.</ListItemText>
                                             </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Limited Liability Partnership Registration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Limited Financial Liability:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>The term “Limited Liability” means that the individual shareholders’ contribution towards the company debts is limited.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Lower Compliance Requirement:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>A key benefit of registering an LLP over a private company is lesser compliance requirement.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Operational Flexibility:-</ListItemText>
                                         <ListItemText sx={{ pl: 3 }}>LLP Agreement, deed among partners of an LLP, clarifies operating structure including rights & responsibilities of the partners.</ListItemText>
                                          
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>One Person Comapany Registration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Limited Financial Liability:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>The term “Limited Liability” means that the individual shareholders’ contribution towards the company debts is limited.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Separate Legal Existence:-</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>A One Person Company would obtain the status of a separate legal entity.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Default Choice for One Person:-</ListItemText>
                                         <ListItemText sx={{ pl: 3 }}>One Company Registration is the default company registration choice for many freelancers.</ListItemText>
                                          

                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>How To Register Company In Registrations</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                      
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Registering a company in India is now a simple 4-step process. Here is what you’ll  need to acquire:</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> 1.A Digital Signature Certificate(DSC)</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> 2. A Director Identification Number (DIN)</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> 3.Registration on the MCA Portal or New user registration</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> 4.Certificate of Incorporation</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The Provisional SSI Registration Certificate (PRC) enables small units to obtain term loans, and working capital from financial institutions and banks under priority sector lending.</ListItemText>
                    
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

export default CompanyRegistration;
