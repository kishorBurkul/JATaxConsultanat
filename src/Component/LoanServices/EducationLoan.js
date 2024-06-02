import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';


const usestyles = {
    root: {
        flexGrow: 1,
    },
    imageSection: {
        height: 400,
        backgroundImage: 'url("assets/loan-services/Business-Loan.png")',
        backgroundSize: 'cover',
        marginBottom: 100,
    },
    contentSection: {
        margin: '0 100px',
    },
    card: {
        maxWidth: 345,
        margin: '16px', // Adjust the margin directly with numeric values
    },
};




const EducationLoan = () => {

    return (

        <div className={usestyles.root}>
            {/* Image Section */}
            {/* <div className={usestyles.imageSection} ></div> */}
            {/* <div className="relative overflow-hidden">
           
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/loan-services/education_loan_header.jpg"
                    alt="Services Header"
                />
            
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Education Loan  </h1>
                </div>
            </div> */}


            <Box sx={{ position: 'relative', overflow: 'hidden', marginTop: "40px" }}>
                <img
                    src="assets/loan-services/education_loan_header.jpg"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        Education Loan
                    </Typography>
                </Box>
            </Box>


            {/* Content Section */}
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <img
                            src="assets/loan-services/SBI-Education-Loan.jpg"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 2, sm: 2, md: 1 }, marginTop: { xs: 2, sm: 2 } }}>
                        <Typography variant="h4" gutterBottom>
                            What is an Education Loan?
                        </Typography>
                        <Typography variant="body1" paragraph style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                            An education loan is a type of financial aid designed to help students and their families cover the costs associated with higher education. These loans can be used to pay for tuition fees, books, supplies, and other educational expenses. Education loans are offered by banks, financial institutions, and government agencies, and they typically come with favorable terms such as lower interest rates and flexible repayment options compared to other types of loans
                        </Typography>
                        <Typography variant="body1" paragraph style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                            Education loans can be used to finance various levels of education, including undergraduate, graduate, and professional degree programs. They are available for both domestic and international students and can cover expenses for studying within the country or abroad.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/loan-services/mortgage-loan1.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Eligibility to apply for Education Loans
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Here are the qualifications for an individual who wants to apply for a Education loan:</Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    Residency: Typically, education loans are available to residents of the country where the loan is being applied for. Some institutions may also offer loans to non-residents or international students with certain conditions.
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Age: Applicants are usually required to be within a certain age range, often between 18 to 35 years. However, this can vary depending on the lender.
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Course and Institution: The course and institution for which the loan is being sought may need to be recognized by relevant authorities or educational bodies. Some lenders may have specific lists of approved courses and institutions.
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Admission: Often, proof of admission or enrollment in the course for which the loan is being sought is required.
                                </span>
                            </li>
                            <Typography variant="body1" paragraph>
                                These are general eligibility criteria for Education loans.</Typography>
                            {/* <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Net monthly income of salaried applicants should be Rs 40,000 or more. For the self-employed, they should have an annual income of Rs 3 lakh and above
                                </span>
                            </li> */}

                        </ul>
                    </Grid>

                    {/* Right Image */}

                </Grid>
            </Container>

            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Documents required for applying for education loan
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Marksheet and passing certificate of 10th and 12th exams
                                </span>
                            </li>


                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Admission Letter from the respective college/university
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    KYC document of the applicant and co-applicant
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Income proof in some cases.
                                </span>
                            </li>

                            {/* <Tabs defaultValue={1}>
                                <TabsList>
                                    <Tab value={1}>Address Proof</Tab>
                                    <Tab value={2}>Identity Proof</Tab>
                                    <Tab value={3}>Proof of Income</Tab>

                                </TabsList>
                                <TabPanel value={1}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Driving license
                                        </span>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Passport
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Aadhaar card
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Ration card
                                        </span>
                                    </li>

                                </TabPanel>
                                <TabPanel value={2}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Voters ID
                                        </span>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            PAN Card
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Passport
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Aadhar card
                                        </span>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Ration card
                                        </span>
                                    </li>
                                </TabPanel>
                                <TabPanel value={3}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Form 16
                                        </span>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Bank statement for the last six months
                                        </span>
                                    </li>
                                </TabPanel>

                            </Tabs> */}
                        </ul>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/loan-services/bike-loan-docu.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );



};

export default EducationLoan;
