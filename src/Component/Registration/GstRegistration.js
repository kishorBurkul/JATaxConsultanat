import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormComponent from './FormComponent';
const GstRegistration = () => {

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
                    src="assets/gstservices/gst_registration_haeder.webp"
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
                        GST Registration
                    </Typography>
                </Overlay>
            </Box>

            {/* <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    src="assets/gstservices/gst_registration_haeder.webp"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h6" fontWeight="bold">
                        GST Registration
                    </Typography>
                </Box>
            </Box> */}

            <Grid container mt={0} spacing={4} p={2}
                justifyContent="center" >
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12} sm={12} md={8}>
                    <Paper sx={{ padding: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>GST Registration</b></Typography>
                        <Divider />
                        <Typography>
                            <span><b>Goods and Services Tax (GST):</b></span>  is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. It has replaced many indirect taxes previously levied by the Central and State governments in India.

                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Goods and Services Tax (GST) registration is a process by which businesses register with the Indian government to become a GST-compliant taxpayer.
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            <strong> Why GST Registration is Important?</strong>
                        </Typography>
                        <Typography>

                            <span><b>Legality:</b></span>  Businesses must comply with GST regulations if their turnover exceeds the threshold limit.
                        </Typography>
                        <Typography>
                            <span><b> Input Tax Credit:</b></span>  Registered businesses can claim Input Tax Credit (ITC) on their purchases.
                        </Typography>
                        <Typography>
                            <span><b>Interstate Transactions:</b></span> GST registration is mandatory for businesses engaged in interstate supply of goods and services. </Typography>
                        <Typography>
                            <span><b>E-commerce:</b></span>  Businesses involved in e-commerce are required to register under GST.
                        </Typography>
                        <Typography>
                            <span><b>Credibility:</b></span>  GSTIN (GST Identification Number) adds to the credibility of the business
                        </Typography>
                        <Box mb={4}>
                            <Typography variant='h5'> <b>Documents Required</b></Typography>
                            <Accordion defaultExpanded >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6' >For Sole Proprietorship / Individual</Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding>
                                    <ListItemText sx={{ pl: 2 }}>1.Aadhaar card, PAN card, and a photograph of the sole proprietor</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>2.Details of Bank account- Bank statement or a canceled cheque</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>3.Office address proof:</ListItemText>
                                    <ListItemText sx={{ pl: 4 }}>-1. Own office – Copy of electricity bill/water bill/landline bill/ property tax receipt/a copy of municipal khata.</ListItemText>
                                    <ListItemText sx={{ pl: 4 }}>-2. Rented office – Rent agreement and NOC (No objection certificate)</ListItemText>
                                </List>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Partnership Deed/LLP Agreement</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 2 }}>1.Aadhaar card, PAN card, Photograph of all partners.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>2.Details of Bank such as a copy of canceled cheque or bank statement
                                        </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3.Proof of address of Principal place of business and additional place of business:</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-1.Own office – Copy of electricity bill/water bill/landline bill/ a copy of municipal Khata/property tax receipt.</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-2.Rented office – Rent agreement and NOC (No objection certificate) from the owner.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>4.In case of LLP- Registration Certificate of the LLP, Copy of board resolution) from the owner</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Private Limited /Public Limited /One Person Company</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 2 }}>1.Company’s PAN card.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>2.Certificate of Registration  </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3.MOA (Memorandum of Association) /AOA (Articles of Association).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>4.Aadhar card, PAN card, a photograph of all Directors </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>5.Details of Bank- bank statement or a canceled cheque.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>6.Proof of Address of Principal place of business and additional place of business:-</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-1.Own office – Copy of electricity bill/water bill/landline bill/ a copy of municipal khata/ property tax receipt.</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-2.Rented office – Rent agreement and NOC (No objection certificate) from the owner.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>7.Appointment Proof of authorized signatory- letter of authorization</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>HUF</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 2 }}>1.A copy of PAN card of HUF.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>2.Aadhar card of Karta </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3.Photograph.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>4.Proof of Address of Principal place of business and additional place of business:-</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-1.Own office – Copy of electricity bill/water bill/landline bill/ a copy of municipal khata/ property tax receipt.</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-2.Rented office – Rent agreement and NOC (No objection certificate) from the owner.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>5.Details of Bank- bank statement or a copy of a canceled cheque</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Sociaty or Trust Or Club</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 2 }}>1.Pan Card of society/Club/Trust.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>2.Certificate of Registration </ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3.PAN Card and Photo of Promotor/ Partners.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>4.Details of Bank- a copy of canceled cheque or bank statement.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>5.Proof of Address of registered office:-</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-1.Own office – Copy of electricity bill/water bill/landline bill/ a copy of municipal khata/ property tax receipt.</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-2.Rented office – Rent agreement and NOC (No objection certificate) from the owner.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>6.Appointment Proof of authorized signatory- letter of authorization</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} md={3}  >
                    <FormComponent />
                    {/* <Paper sx={{padding:4}}>
                        <FormComponent/>
                        </Paper> */}
                </Grid>






            </Grid>
        </>

    );
};

export default GstRegistration;
