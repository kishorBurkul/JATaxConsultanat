import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const EpfRegistration = () => {
    return (
        <>
{/* 
            <Box className="relative overflow-hidden">
                <img
                    className="w-full mt-10  h-64 sm:h-96 object-cover"
                    src="assets/Registration/epf-PR-Registration.jpg"
                    alt="Services Header"
                />

                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Employees Provident Fund Registrations & Returns</h1>
                </Box>
            </Box> */}

            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <img
                    src="assets/Registration/epf_heaader.jpg"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h6" fontWeight="bold">
                    Employees Provident Fund Registrations & Returns
                    </Typography>
                </Box>
            </Box>
 
            <Grid container mt={0} spacing={2} p={2}
                justifyContent="center" >
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12}  md={8}>
                  <Paper sx={{ padding: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Employees Provident Fund Registrations & Returns</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            The Employees' Provident Fund (EPF) is a social security scheme managed by the Employees' Provident Fund Organization (EPFO), which is under the purview of the Ministry of Labour and Employment, Government of India. The EPF scheme is aimed at providing financial security and stability to employees in the organized sector by facilitating savings for retirement.
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
                                    <Typography variant='h6'>EPF Registration</Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}>Employers are required to register themselves and their eligible employees under the EPF scheme. Here's a brief overview of EPF registration:</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Employer Registration:</b>Employers need to register themselves with the EPFO by submitting the required details and documents. This registration is necessary for employers to contribute to the EPF scheme on behalf of their employees.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>Employee Enrollment:</b> Once the employer is registered, they need to enroll their eligible employees under the EPF scheme. This involves collecting the necessary information and documents from employees and submitting them to the EPFO.</ListItemText>
                                    <ListItemText sx={{ pl: 2 }}><b>EPF Code Allocation:</b>Upon successful registration, employers are allocated a unique Employer Provident Fund (EPF) code, which is used for all EPF-related transactions.</ListItemText>


                                </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>EPF Returns:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>Employers are required to file various returns and reports with the EPFO to ensure compliance with EPF regulations. Some of the key returns include:</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Monthly EPF Contribution:</b> Employers must submit monthly EPF contribution details, including employee and employer contributions, to the EPFO through the Electronic Challan cum Return (ECR) portal.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Annual EPF Return:</b> Employers need to file an annual EPF return, also known as Form 9, which provides details of all employees covered under the EPF scheme during the financial year.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Employee Nomination Details:</b> Employers are required to submit employee nomination details, including nominees for EPF benefits in the event of the employee's death, to the EPFO.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Any Other Required Reports:</b>  Depending on specific requirements or notifications from the EPFO, employers may need to submit additional reports or returns related to EPF compliance.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Benefits of EPF Registration & Returns: </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>Employee Financial Security:</b> EPF provides employees with a reliable savings platform for their retirement, ensuring financial security after the end of their employment.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Employer Compliance:</b> EPF registration and returns ensure that employers comply with statutory requirements related to employee welfare and social security.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Tax Benefits:</b> Contributions made towards EPF are eligible for tax benefits under Section 80C of the Income Tax Act, making it an attractive investment option for both employees and employers.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Documents Required For Employees Provident Fund Registrations & Returns</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>1 <b>For Organization Registration: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Certificate of Incorporation (for companies) or Registration Certificate (for other entities)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Memorandum and Articles of Association (for companies).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Partnership Deed (for partnership firms).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Certificate of Commencement of Business (if applicable)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;PAN card of the organization</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Address proof of the organization (e.g., utility bills, rental agreement)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Bank account details of the organization (cancelled cheque or bank statement)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Digital signature certificate (DSC) of the authorized signatory</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}>2 <b>For Employee Details: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Employee Personal Details: Name, Father's Name, Date of Birth, Gender, etc.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Employee Contact Details: Address, Contact Number, Email Address, etc.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Employee Identification Details: Aadhaar Number, PAN Number, Passport Number (if applicable).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Salary Details: Basic Salary, Dearness Allowance (DA), House Rent Allowance (HRA), Other Allowances, etc.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Date of Joining and Date of Exit (if applicable)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Bank Account Details: Bank Name, Account Number, IFSC Code</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Nomination Details: Nominee Name, Relationship, Percentage of Nomination</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}>3 <b>For EPF Returns: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Monthly contribution details of both employer and employees (Form 12A)</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Challans for the payment of EPF contributions</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Employee details as per Form 5A, including new joiners, left employees, and the number of employees on the roll</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Details of employees eligible for PF membership but not enrolled</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Details of employees with a salary above the PF wage ceiling but enrolled in the EPF scheme</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Any other relevant documents as per EPFO guidelines</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>Employers need to ensure that all documents are accurate, complete, and up-to-date to avoid any issues during EPF registration and returns filing. It's also essential to adhere to the EPFO guidelines and deadlines for registration and filing returns to remain compliant with EPF regulations.</ListItemText>

                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
        
                        </Paper></Grid>

                {/* Right Column (4 Grids) */}
                <Grid item  xs={12} sm={8}  md={3} >
                <FormComponent/>
                    {/* <Paper sx={{ padding: 4 }}>
                        <FormComponent />
                    </Paper> */}
                </Grid>
            </Grid>



        </>

    );
};

export default EpfRegistration;
