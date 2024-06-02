import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const TANRegistration = () => {

    const Overlay = styled(Box)({
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });

    const HeaderImage = styled('img')({
        width: '100%',
        marginTop: '10px',
        height: '256px', // h-64 in Tailwind
        '@media (min-width: 640px)': {
            height: '384px', // sm:h-96 in Tailwind
        },
        objectFit: 'cover',
    });
    return (
        <>
            <Box position="relative" overflow="hidden">
                <HeaderImage
                    src="assets/Registration/tan-registration.jpg"
                    alt="Services Header"
                />
                <Overlay>
                    <Typography
                        variant="h4"
                        component="h5"
                        color="white"
                        fontWeight="bold"
                        align="center"
                    >
                        TAN Registration
                    </Typography>
                </Overlay>
            </Box>
            <Grid container mt={0} spacing={2} p={2}
                justifyContent="center">
                <Grid item xs={12} md={8}  >
                    <Paper sx={{ padding: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b> TAN Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            A Tax Deduction Account Number (TAN) is a unique identifier issued by the Income Tax Department of India to entities that are responsible for deducting or collecting tax at source (TDS or TCS) under the Income Tax Act, 1961. Here's a detailed overview of TAN
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            <strong>Tax Deduction at Source (TDS):</strong>TAN is required for entities that deduct tax at source from payments such as salaries, interest, dividends, and other types of payments.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <strong>Tax Collection at Source (TCS): </strong>TAN is also used for entities that collect tax at source on specified transactions like the sale of goods and services.
                        </Typography>
                        <Box mb={4}>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Structure of TAN</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>TAN is a 10-character alphanumeric code, structured as follows: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The first four characters are letters.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The next five characters are numeric digits. </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>The last character is a letter.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>  For example, a TAN might look like <b>ABCD12345E.</b></ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>




                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Importance of TAN</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;<b>Mandatory Requirement:</b>Obtaining TAN is mandatory for all entities that are required to deduct or collect tax at source.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;<b>TDS/TCS Statements: </b>TAN is required to file TDS/TCS returns and statements.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;<b>TDS Certificates:</b>TAN is mentioned on TDS certificates issued to deductees.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;<b>Communication with Tax Authorities:</b> TAN is used in all communications with the Income Tax Department regarding TDS/TCS.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>How to Apply for TANt</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>Online Application:</b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Visit the NSDL-TIN website or the e-filing portal of the Income Tax Department.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Fill out Form 49B online.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Submit the form and make the payment.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Acknowledgment receipt will be generated, which needs to be printed, signed, and sent to the NSDL office for processing.</ListItemText>
                                    
                                     <ListItemText sx={{ pl: 2 }}><b>Offline Application:</b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Obtain Form 49B from TIN-FCs (Tax Information Network Facilitation Centers) or download it from the NSDL-TIN website.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Fill out the form and submit it along with the required fee to the nearest TIN-FC.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Documents required for TAN Registration </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;A passport-sized photograph</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Adhaar card for address proof</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Date Of Proof/Incorporation Proof </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Telephone Number and Email Address</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Permanent Account Number (PAN)</ListItemText>
                                         <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Telephone Number and Email Address</ListItemText>
                                         <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Form 49B</ListItemText>

                                    </List>
                                </AccordionDetails>
                            </Accordion>

                        </Box>
                    </Paper>
                </Grid>

                {/* Right Column (4 Grids) */}
                <Grid item xs={12} sm={8} md={3} >
                    <FormComponent />
                    {/* <Paper sx={{ padding: 4 }}>
                        <FormComponent />
                    </Paper> */}
                </Grid>
            </Grid>



        </>

    );
};

export default TANRegistration;
