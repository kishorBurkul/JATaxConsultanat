import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const ProfessionalTaxRegistration = () => {
    return (
        <>

            <Box className="relative overflow-hidden">
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/Registration/Professional tax.jpg"
                    alt="Services Header"
                />

                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center"> Profession Tax Registration</h1>
                </Box>
            </Box>

            <Grid container spacing={2}  mt={4}
                justifyContent="center">
                <Grid item xs={12} md={8} >
                    <Paper sx={{ padding: 6 }}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Profession Tax Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            Entry 60 in List II (State List) of the Seventh Schedule to the constitution empowers the State Legislatures to make law relating to levy of tax on Professions, Trades, Callings and Employments. Accordingly the State Legislature empowered the local authorities to tax on professions, trades, callings and employments by incorporating that power in the statutes relating to local authorities.
                            However, with a view to rationalize the levy and improve the collection of the tax, the State Legislature has enacted the Andhra Pradesh Tax on Professions, Trades, Callings and Employments Act, 1987 as a single comprehensive enactment for the purpose of levy and collection of profession tax instead of under different enactments and to entrusted the administration thereof to the Commercial Tax Department for effective collection.
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
                                    <Typography variant='h6'>What Are The Basic Guidelines For Making Tax Payments Under The Profession Tax Act?</Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}><b>I)Registration ( monthly payment of P Tax)</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;An individual who is not doing any business can also obtain a trademark application and obtain trademark registration for a symbol or word that is proposed to be used by the applicant in the future.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Prescribed form of application is Form I</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>II)Enrolment ( Annual Payment of P Tax)</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>1) Employees falling under Entry 1 of the First Schedule; and</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>(a) also covered by any other entry or entries and the rate of tax under any such other entry is more than the rate of tax under Entry 1 and have furnished certificate in Form III; and</ListItemText>

                                    <ListItemText sx={{ pl: 2 }}>(b) are simultaneously engaged in employment under more than one employer, and have furnished certificate in Form IV; and</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>2) Persons failing under any of the entries 2 to 21. <b>Prescribed form of application is Form II</b></ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>Please see Schedule under P Tax for the schedule entries</ListItemText>

                                </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>How Do I Register For Profession Tax Registration?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;In an effort to ease the process of Registration for dealers applying for Profession Tax Registration, the following process is notified with immediate effect. A dealer seeking Registration under the Profession Tax now has an option to utilize any of the following facilities to apply for registration:</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>1)Through Online mode:</b>  A dealer can file the P Tax registration application ONLINE on the CTD Portal and also scan & upload the Supporting documents through the CTD Portal. </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b> 2)Through Courier/ Registered Post:</b> A dealer can file an application Online/Offline and send the supporting documents to the Office of the Concerned Registering Authority (DCTO) through Courier or Registered Post. </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>3)In person before the Concerned Registration Authority (DCTO): </b> A dealer can submit his application and all supporting documents before the Registration Authority in person. </ListItemText>

                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>How will I Get My Registration Certificate?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}> 1. Once you registration application is approved, the RC certificate will be scanned & Uploaded to the dealer login.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 2. The dealer can initiate all his business activities on receipt of the scanned certificate.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3. The Original certificate shall be couriered/sent by RPAD to the premises of the dealer by the Registering Authority.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Documents Required For Professional Tax Registration/ PT Registration</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;For Individual / Proprietorship: </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 1.Light Bill / Rent Agreement: Light Bill in case of owned shop or business premises, for any other case Rent Agreement is required.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 2.PAN Card of Individual.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 3.Adhar Card of Individual.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 4.2 Passport size photos of proprietor.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 5.Signature on Blank Paper for record and verification.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}> 6.Canceled cheque / Bank Statement.</ListItemText>
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

export default ProfessionalTaxRegistration;
