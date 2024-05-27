import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Card, CardContent, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';

const UdyamRegistration = () => {

    return (
        <>
            {/* <div className="relative overflow-hidden">
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/Registration/Udyog-Aadhaar-Registration.webp"
                    alt="Services Header"
                />  <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Udyog Aadhaar - Registration</h1>
                </div>
            </div> */}
           
             
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="assets/Registration/Udyog-Aadhaar-Registration.webp"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h6" fontWeight="bold">
                    Udyog Aadhaar - Registration
                    </Typography>
                </Box>
            </Box>
            
            <Grid container mt={0} spacing={4} p={2}
                justifyContent="center" >
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12} sm={12} md={8}>
                   <Paper>
                    <Typography variant="h5" gutterBottom sx={{ padding:"5px", textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Udyam / MSME / Udyog Aadhaar - Registration</b></Typography>
                    <Divider />
                    <Typography variant="subtitle1" gutterBottom p={1}>
                        An SSI also called Small Scale Industry Registration is a registration from the Ministry of Micro, Small and Medium Enterprises. When a business registers as SSI it becomes eligible to avail government schemes and subsidies that are exclusive for small businesses.
                    </Typography>
                    <Box mb={4}>
                        <Typography variant='h5' sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" ,padding:"5px" }}> <b>Documents Required</b></Typography>
                        <Accordion defaultExpanded sx={{ backgroundColor: "#dee2e6" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ backgroundColor: "#fd5b03", color: "white" }}
                            >
                                <Typography variant='h6' >What is SSI/MSME Registration</Typography>
                            </AccordionSummary>
                            <List component="div" disablePadding >
                                <ListItemText sx={{ pl: 2 }}>Small scale industries play a vital role in the socio-economic development of India.
                                    To promote and encourage these small-scale industries, the government of the country created the MSMED Act.
                                    The Act was created to maintain a list of all the industries registered as MSME or SSI. The record aided in
                                    providing support and incentives to these firms. Furthermore, SSI helped in employment of people at little
                                    capital investments. All these entities should possess certificate of MSME registration, which should be registered with
                                    the Central Government’s MSME department under the Act of MSME Development- 2006</ListItemText>
                                <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; The MSMED Act includes:</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>1. Small Scale Industries (SSI)</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>2.Micro, Small and Medium Enterprises (MSME)</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>3. Different sectors have different limits for registering under the act.</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>4.A manufacturing enterprise with plants and machinery that required an investment of below 10 Crores can be an MSME.</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>5.For service enterprises, the amount caps at five crores.</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>6.If the company exceeds the upper limit, at any point in the future, it is not considered as an MSME.</ListItemText>

                                <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; To avail the numerous benefits from the Government of India, an SSI registration certificate is needed. It is an optional registration but the companies that get registered are eligible for:</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>1.Lesser interest rates</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>2.Excise exemption scheme</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>3.Subsidies in tax, capital investment and power tariff</ListItemText>
                                <ListItemText sx={{ pl: 4 }}>4.Other support</ListItemText>

                            </List>
                        </Accordion>
                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{ backgroundColor: "#fd5b03", color: "white" }}
                            >
                                <Typography variant='h6'>MSMSE Registration Can Be Done By Enterprises Of Sizes</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Micro</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Small</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Mediumo</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Under the MSMED Act, these small businesses get varying incentives such as:</ListItemText>
                                    <ListItemText sx={{ pl: 4 }}>1.Priority sector lending.</ListItemText>
                                    <ListItemText sx={{ pl: 4 }}>2.Tax exemptionsd </ListItemText>
                                    <ListItemText sx={{ pl: 4 }}>3.Capital investment</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Registering for MSME is an entire online process but seeking the help of professionals makes it more easy. Vakilsearch assists you with the online application and gets the required approval from the department.</ListItemText>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                <Typography variant='h6'>New Udyog Aadhar Replaces SSI /MSME Registration</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; In order to make the process of registering a small or medium level enterprise even more straightforward, a new act called the Udyog Aadhaar was created in 2015. Udyog Aadhaar completely replaces MSME and is conducted entirely online. Under the Udyog Aadhaar, only one page needs to be filled for registration with Aadhaar Card acting as the sole legal document.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; The MSME schemes offered by the government Udyog Aadhaar :-
                                        Udyog Aadhaar Memorandum (UAM) was introduced under the MSMED Act, 2006 to promote the ease of doing business for MSMEs. A simple one-page form is filed and the registration is user-friendly and easy. No documentation is required, except the 12-digit Aadhaar card number. Businesses also have a provision to file more than one Udyog Aadhaar with the same Aadhaar number. UAM can be filed on a self-declaration basis.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; ZED scheme encourages manufacturers to manufacture goods for export that are of highest quality. If the standards are met and goods are exported, the exporters will be eligible for rebates and concessions. If they are not exporterd, the goods will be rejected and returned to India.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;This scheme is aimed at helping micro, small and medium entreprises produce quality products at competitive prices by adopting the tools. Through the tools, businesses will be able to optimize the resource, improve quality, reduce rejection and rework. Under this scheme, businesses will be sensitized about the tools through activities like workshops, campaigns and seminars.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Under this scheme, the complaints and issues of the businesses will be addressed. The business owners can also track the status of their complaint and open it again it they are dissatisfied with the outcomes.</ListItemText>

                                </List>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                <Typography variant='h6'>Why Udyog Adhar Registration</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >
                                    <Typography variant='h6' ml={2}>Benefits</Typography>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; In the banking sector, if you need to avail the benefits of the MSMED Act of 2006, you will have to opt for MSME registration.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; When you register your firm with Udyog Aadhaar , the business can leverage many schemes initiated by State and Central Government. In addition to this, for availing the MSMED Act 2006 benefits in the banking sector, MSME registration becomes mandatory.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; Refrain from asking for security deposits</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;Concession in the electricity bills</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Increased chances of winning government tenders</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Easy and cheaper bank loans </ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Reservation benefits</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Stamp duty and registration charges are waived off</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Reimbursement under the bar code registration</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Industrial promotion subsidy</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Reduction in the rate of the interest by major banks</ListItemText>

                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                <Typography variant='h6' >Types Of MSME Registrations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >
                                    <Typography variant='h6' ml={2}>Provisional MSME Registration</Typography>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The first stage of MSME registration is provisional which is given during the period before the establishment of the entity or the pre-investment period of the firm. At this point, the enterprise qualifies for:</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}> 1.Obtaining important approvals and NOCs</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}> 2.Obtaining clearances from regulatory bodies</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}> 3.such as Pollution Control Board and Labour Regulations</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The Provisional SSI Registration Certificate (PRC) enables small units to obtain term loans, and working capital from financial institutions and banks under priority sector lending.</ListItemText>
                                    <Typography variant='h6' ml={2}>
                                        Permanent MSME Registration</Typography>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The second type of MSME registration is permanent. It is given to industrial units that are already functioning. Though the Act is not mandatory, it is immensely beneficial for firms to have the support of government.</ListItemText>


                                </List>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                <Typography variant='h6' >Guidelines For Online SSI/ MSME Registrations</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >
                                    <Typography variant='h6' ml={2}>Apply For Provisional Registration</Typography>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;A PRC ( Provisional Registration Certificate) is allotted to new enterprises without any field enquiry. It is purely an application-based form. Therefore, it has to applied in the precise prescribed form before operations begin in the unit. Once the application is submitted, the provisional registration will be provided without a physical inspection of the unit. The procedure is quick so that newly established firms can avail multiple benefits, quick loans and other necessary approvals.</ListItemText>
                                    <Typography variant='h6' ml={2}>
                                        Starting The Business</Typography>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; The provisional certificate is valid for a period of five years and the enterprise has to become operational within it. If the business fails to commence work under five years, a new application must be submitted.</ListItemText>
                                    <Typography variant='h6' ml={2}>
                                        Lying For Permanent SSI Registration</Typography>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp; If the entrepreneur successfully begins operations within five years, they can apply for a permanent certification. The registration is done at the Ministry of MSMEs. The permanent SSI registration is granted only if specific conditions are met and mandatory documents are submitted.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp; The unit has obtained statutory and administrative clearances as required.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The unit does not violate any regulation or restriction.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The value of plant and machinery in the unit does not exceed the prescribed limits.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;There should be proof the enterprise is not owned, subsidiary of or controlled by another industry.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;At Vakilsearch, we are committed to helping you overcome every any obstacle that may arise in MSME registration for your enterprise.</ListItemText>


                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                <Typography variant='h6' >Udyog Adhar Eligibility - Who Should Obtain SSI/MSME Registration?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List component="div" disablePadding >

                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp;The eligibility for the scheme of MSME or SSI registration is dependent on the scale of business of the enterprise. Udyog Aadhaar registration is applicable for Proprietorship, Hindu Undivided Family(HUF), one-person company(OPC), Partnership Firm, public limited company, private limited company, production company, co-operative societies, limited liability partnership(LLP) or any association of persons or any other undertaking.</ListItemText>
                                    <Typography variant='h6' ml={2}>Micro Enterprises:</Typography>
                                    <ListItemText sx={{ pl: 2 }}> &#9679; &nbsp; A manufacturing enterprise should have investment of less than Rs. 25 lakhs in plant and machinery. A service enterprise should have less than Rs. 10 lakhs invested. These micro enterprises are the smallest entities.</ListItemText>
                                    <Typography variant='h6' ml={2}>  Small Enterprises:</Typography>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp; For manufacturing enterprises, the investment has to be between Rs. 25 lakhs and Rs. 5 crores in plant and machinery. For service enterprises, the range is between Rs. 10 lakhs and Rs. 2 crores.</ListItemText>
                                    <Typography variant='h6' ml={2}> Medium Enterprises:</Typography>
                                    <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp; If it is a manufacturing enterprise, the investment in plant and machinery has to be between Rs. 5 crore and Rs. 10 crores. If it is a service enterprise, the range is from Rs. 2 crores to Rs. 5 crores.</ListItemText>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    </Paper> </Grid>

                {/* Right Column (4 Grids) */}
                <Grid item xs={12} sm={8} md={3} >
                <FormComponent/>
                       {/* <Paper sx={{padding:2 ,maxWidth:"450px"}}>
                        <FormComponent/>
                        </Paper> */}

                    {/* <Formik
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
                    </Formik> */}
                    {/* <ContactForm /> */}
                </Grid>
                {/* </Grid> */}


            </Grid>
        </>

    );
};

export default UdyamRegistration;
