import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const CompanyRegistration = () => {


    return (
        <>

            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    src="assets/Registration/Comapant_regi.png"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h3" component="h1" fontWeight="bold">
                        Company Registration
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2}  mt={4}
                justifyContent="center">
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12} md={8} >
                    <Paper sx={{ padding: 6 }}>

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
                    </Paper>
                </Grid>

                {/* Right Column (4 Grids) */}
                <Grid item  xs={12} sm={8}  md={4} mt={4} p={8} >
                <FormComponent/>
                    {/* <Paper sx={{ padding: 4 }}>
                        <FormComponent />
                    </Paper> */}
                </Grid>
            </Grid>



        </>
    );
};

export default CompanyRegistration;
