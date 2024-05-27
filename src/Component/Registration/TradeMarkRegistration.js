import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const TradeMarkRegistration = () => {

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
   
            {/* <Box className="relative overflow-hidden">
                   <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/Registration/trademark-registration1.webp"
                    alt="Services Header"
                  />

                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center"> Trademark Registration</h1>
                </Box>
            </Box> */}

            
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="assets/Registration/trademark-registration1.webp"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h6" fontWeight="bold">
                    Trademark Registration
                    </Typography>
                </Box>
            </Box>
            <Grid container mt={0} spacing={4} p={2}
                justifyContent="center" >
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12} sm={12} md={8}>
                   <Paper>
                     <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Trademark Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                        Building a brand takes a lot of time, effort and capital. As a result, it's necessary to make sure that you possess the rights to use your brand's logo, tagline, product shape and packaging, sound, fragrance, colour combinations, and anything else that gives it a distinct identity.
                        Trademark is a type of intellectual property which differentiates your product or services from other competitors in the market.
                       </Typography>
                        <Box mb={4}>
                            {/* <Typography variant='h5' sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}> <b>Documents Required</b></Typography> */}
                            <Accordion defaultExpanded sx={{ backgroundColor: "#dee2e6" }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Eligibility For Trademark Registration</Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}>Trademark registrations are prevalently used to protect unique brands, slogans, or invented terms. Individuals, corporations, and non-profit organization can all file for trademark registration in India. However, each class of person or entity has its own set of requirements when it comes to filing a trademark application.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>An Individual (Person)</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;An individual who is not doing any business can also obtain a trademark application and obtain trademark registration for a symbol or word that is proposed to be used by the applicant in the future.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Joint Owners</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The Joint owners of a company together can file for a trademark and both their names must be mentioned in the application.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Proprietorship Firm</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;A proprietorship firm may file a trademark application under its proprietor's name but not under the business and proprietorship names. If you include a proprietorship name and a business name in your application, those details will be considered separately.</ListItemText>
                                    
                                    <ListItemText sx={{ pl: 2 }}><b>Partnership Firm</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;A partnership company must include all the names of the partners in the application while registering for a trademark, with a maximum of ten members. If a minor partner is present, the name of the minor's guardian representing him must be mentioned.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Limited Liability Partnership/LLP</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;In the case of the Limited Liability Partnership, the application should be in the name of the LLP. It is an incorporated body where the partners have their own identity. The partners cannot be the applicant as the trademark belongs to the LLP.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Indian Company</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Any Indian company, regardless of weather a private limited, limited, or any other form, must file a trademark application in the company's name. It should be noted that any incorporated entity has its own identity, so a company's director cannot be a trademark applicant.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Trust Or Society</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;If a trademark application is filed on behalf of a trust or society, the managing trustee, chairman, or secretary who is representing the trust or society must be named.</ListItemText>
                                </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Type Of Trademark Registration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Product marks, service marks, collective marks, certification marks, shape marks, sound marks, and pattern marks are all forms of trademarks that can be registered. Despite the fact that there are various trademarks, their objective is the same: to allow consumers to identify goods and services produced by certain manufacturers or service providers</ListItemText>
                                     </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Benefits Of Getting Trademark Registration </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                       <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; There are numerous reasons to register a trademark, but the majority of them are required for all businesses and ambitious entrepreneurs because it serves as a valuable asset. Obtaining a trademark registration and utilizing the services has numerous advantages. Here are a few benefits.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;<b>Intellectual Property Protection :-</b> 
                                        The legal protection provided by trademark registration is against the misuse or copying of the company's name or registered logo. The trademark owner acquires legal ownership of the trademark, which can be enforced in any court. When a trademark is registered, the owner gains nationwide possession of the mark.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;<b>Powerful Deterrent:-</b>
                                        A trademark owner obtains the ability to publicly display his or her brand as a registered trademark, alerting others and eliminating the defence of innocent infringement. Once a trademark is registered, it will appear in search reports, preventing other applicants from pursuing the registration of the same or similar mark.
                                        </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;<b>Legal Remedies:-</b>The owner of a trademark can recover up to triple damages from the offender if the trademark is registered in India. The owner is presumed to be the rightful owner of the trademark. When a trademark is registered, the owner gains the ability to sue anyone who is misusing the mark in any court. Unregistered trademarks, on the other hand, are subject to legal action.</ListItemText>
                                        </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                     </Paper>

                    </Grid>

                    {/* Right Column (4 Grids) */}
                    <Grid item  xs={12} sm={8}  md={3} >
                <FormComponent/>
                        {/* <Paper sx={{padding:4}}>
                        <FormComponent/>
                        </Paper> */}
                        </Grid>
                </Grid>
        
        </>

    );
};

export default TradeMarkRegistration;
