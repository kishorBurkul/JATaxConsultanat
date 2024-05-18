import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const GstRegistration = () => {

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
                    src="assets/insurance/aboutus.jpg"
                    alt="Services Header"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">GST Registration</h1>
                </div>
            </div>
            <Grid container spacing={2}
                >
                
                <Grid item xs={12} md={8} mt={4} >
                     <Paper sx={{padding:6}}>
                        <Typography variant="h5" sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03" , mb:2 ,color:"blue"}}><b>Taxes In India</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            In India, taxes are levied by the central and state governments on income, goods and services, property, and wealth. The main taxes include:
                        </Typography>
                        <Typography>
                            <span><b>Income Tax:</b></span> a tax on individuals' and entities' income earned during a financial year.
                        </Typography>
                        <Typography>
                            <span><b> Corporate Tax:</b></span> a tax on the profits earned by companies.
                        </Typography>
                        <Typography>
                            <span><b>Goods and Services Tax (GST)</b></span> a consumption-based tax on goods and services.
                        </Typography>
                        <Typography>
                            <span><b>Value Added Tax (VAT):</b></span>  a tax on the value added to goods and services during production or distribution.
                        </Typography>
                        <Typography>
                            <span><b>Customs duty:</b></span>  a tax on goods imported into India.
                        </Typography>
                        <Typography mt={2}>
                            <span><b> Excise duty:</b></span> a tax on certain goods produced within India
                        </Typography>
                        <Typography>
                            <span><b>Property Tax:</b></span>  a tax on the ownership or possession of property.
                        </Typography>
                        <Typography>
                            <span><b> Securities Transaction Tax (STT):</b></span> a tax on the value of securities traded on stock exchanges.
                        </Typography>
                        <Typography>
                            <span><b> Wealth Tax:</b></span> a tax on the wealth of individuals and entities above a certain threshold.
                        </Typography>
                        <Typography mt={1}>
                            These taxes are collected by the Central Board of Direct Taxes (CBDT) and state tax departments, and used to fund government services and programs.
                        </Typography>
                        <Grid container>
                            <Grid item md={3}>
                                <List>
                                    <ListItemButton sx={{ pl: 2, fontWeight: "bold" }}>
                                        <ListItemText><b>Indirect Taxes</b></ListItemText>
                                    </ListItemButton>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 3 }}><b>Center Gov</b></ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Service Tax</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Excise Duty</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-CST</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Custom </ListItemText>
                                    </List>
                                </List>
                            </Grid>
                            <Grid item md={3}>
                                <List>
                                    <ListItemButton sx={{ pl: 2, fontWeight: "bold" }}>
                                        <ListItemText><b>Indirect Taxes</b></ListItemText>
                                    </ListItemButton>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 3 }}><b>State Gov</b></ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Vat</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Entry Tax</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Octroi</ListItemText>
                                        <ListItemText sx={{ pl: 4 }}>-Luxury Tax </ListItemText>
                                    </List>
                                </List>
                            </Grid>
                            <Grid item md={6}>
                                <List>
                                    <ListItemButton sx={{ pl: 2, fontWeight: "bold" }}>
                                        <ListItemText><b>Direct Tax</b></ListItemText>
                                    </ListItemButton>
                                    <List component="div" disablePadding>
                                        <ListItemText sx={{ pl: 3 }}>Income Tax</ListItemText>
                                    </List>
                                </List>
                            </Grid>
                        </Grid>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03" , mb:2 ,color:"blue"}}><b>GST Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            Goods and Services Tax (GST) registration is a process by which businesses register with the Indian government to become a GST-compliant taxpayer.
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
                    <Grid item xs={12}  md={4} mt={4}>
                        <Paper sx={{padding:4}}>
                        <FormComponent/>
                        </Paper>
                        </Grid>

                     
        
             


            </Grid>
        </>

    );
};

export default GstRegistration;
