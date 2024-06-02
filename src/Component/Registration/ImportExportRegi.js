import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm';
import FormComponent from './FormComponent';
const ImportExportRegi = () => {

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
                    src="assets/Registration/import-export-header.jpg"
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
                        Import Export Code Registration
                    </Typography>
                </Overlay>
            </Box>

            {/* <Box className="relative overflow-hidden">
                <img
                    className="w-full mt-10  h-64 sm:h-96 object-cover"
                    src="assets/Registration/FoodLicenheader.jpg"
                    alt="Services Header"
                />

                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">FSSAI Registration Services(FSSAI)</h1>
                </Box>
            </Box> */}

            <Grid container mt={0} spacing={2} p={2}
                justifyContent="center">
                <Grid item xs={12} md={8}  >
                    <Paper  sx={{ padding: 1 }} >
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Import Export Code Registration</b></Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                            Import and Export code is a 10 digit unique number issued by the Directorate General of Foreign Trade (DGFT) to a business entity for import and export in India. The Import and Export Code helps the business grow in the global market. To clear customs, the trader must ensure that the importing entity has IE code and GST registration before initiating import of goods. If an importer does not have both IE code and GST Registration, the goods will be stuck at the port and will start incurring demurrage charges or could be destroyed. Once issued the IE Code is valid throughout the existence of the entity and there is no need to renew the code.
                        </Typography>
                        <Box mb={4}>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Importance Of Import Export Code</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>International Market Unlocks: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;As the IE Code is a requirement for the import and the export business they allow the products to reach the international market. IE code makes the entry of the Indian business in the international smoother and opens doors for growth and expansion.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Online Registration: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The process to find the IE Code is completely online and hassle-free with little document submission.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Less Document Requirement:   </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;To obtain IE Code in India very few documents are required. Here is the list of mandatory documents that are required for obtaining the Import Export Code:-</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>1)PAN of the applicant</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>2)Canceled Cheque</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>3)Passport size photo of the applicant</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>4)Address proof of the applicant</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}><b>Lifetime Validity:</b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;IE Code is a lifetime registration that is valid as long as the business is in existence. Hence, there are no issues with updating, filing, and renewing Import Export Code registration. The IE registration is valid till the business is in existence or the registration is not revoked or surrendered.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>Reduces Illegal Goods Transportation: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;The most basic requirement for the Import-Export code is that you need to provide authentic information. Without providing proper information IE code cannot be obtained. This criterion makes transportation of illegal goods impossible.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>International Market Unlocks: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Granting licenses and registrations to food business operators (FBOs).</ListItemText>


                                        <ListItemText sx={{ pl: 2 }}><b>Benefits Of The Schemes: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;IE code has huge benefits for both importers and exporters. The registered business entities will be able to avail the benefits in form of the subsidies from the Customs, Export Promotion Council or other authorities. With LUT filing under GST, the exporters can make exports without paying the taxes. In case the exports are made with payment of tax the exporter can claim the refunds of the paid tax amount.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>Compliance: </b></ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Unlike other tax registration the person carrying import or export does not require to fulfill any specific compliance requirement such as the annual filing or the return filings.</ListItemText>

                                    </List>
                                </AccordionDetails>
                            </Accordion>




                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Proprietorship</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Digital Photograph (3x3cms) of the Proprietor.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Copy of PAN card of the Proprietor.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Copy of Passport (first & last page)/Voter’s I-Card/ Driving Licence/UID (Aadhar card) (any one of these).</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Sale deed in case business premise is self-owned; or Rental/Lease Agreement, in case office is rented/ leased; or latest electricity /telephone bill.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Bank Certificate as per ANF 2A(I)/ Cancelled Cheque bearing preprinted name of applicant and A/C No.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Society Or Trust</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Digital Photograph (3x3cms) of the signatory applicant/Secretary or Chief Executive.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Copy of PAN card of the applicant entity.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Copy of Passport (first & last page)/Voter’s I-Card /UID (Aadhar Card) /Driving Licence/ PAN (any one of these) of the Secretary or Chief Executive/ Managing Trustee signing the application.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Sale deed in case business premise is self-owned; or Rental/Lease Agreement, in case office is rented/ leased; or latest electricity /telephone bill.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Registration Certificate of the Society / Copy of the Trust Deed</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Bank Certificate as per ANF 2A(I)/Cancelled Cheque bearing preprinted name of the Registered Society or Trust and A/C No.</ListItemText>

                                    </List>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Documents required for Import Export Code Registration </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Individual’s or Firm’s or Company’s copy of PAN Card.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Individual’s voter id or Aadhar card or passport copy.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Individual’s or company’s or firm’s cancel cheque copies of current bank accounts.</ListItemText>
                                        <ListItemText sx={{ pl: 2 }}>&#9679; &nbsp;Copy of Rent Agreement or Electricity Bill Copy of the premise.</ListItemText>

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

export default ImportExportRegi;
