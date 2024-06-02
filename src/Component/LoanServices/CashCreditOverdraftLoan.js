import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

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

const cardStyle = {
    maxWidth: 400,
    margin: '1rem',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
};

const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
};

const descriptionStyle = {
    color: 'rgba(0, 0, 0, 0.6)',

};


const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    line-height: 1.5;
    padding: 8px 12px;
    margin: 6px;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid ${blue[200]};
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: ${blue[600]};
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
  `;

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
        };
    `,
);

const CashCreditOverdraftLoan = () => {
    // const benefits = [
    //     {
    //         title: '1. Professional Loan',
    //         image: "/assets/loan-services/Professional_Loan.png",
    //         description: ['Professional Loan is given away to self-employed professionals like Doctor, Advocates, and Chartered Accountants. These loans are processed based on the professional’s credit history. In many instances, the loans are provided against collateral like Non-agricultural land, fixed deposits, bonds, and policies. The loans are usually long term in nature.'

    //         ]
    //     },
    //     {
    //         title: '2. Business Loans for Women Entrepreneurs',
    //         image: "/assets/loan-services/Business-Loans-for-Women.webp",
    //         description: [
    //             'In a bid to promote women entrepreneurship, many banks and financial institutions give exclusive loans to women entrepreneurs. These loans have a lot of benefits with respect to interest rates, tenure, and security etc.'
    //         ]
    //     },
    //     {
    //         title: '3.Term Loan',
    //         image: "/assets/loan-services/Whats-a-Term-Loan-Meaning-Types-Category-and-Process.jpg",
    //         description: [
    //             'With a Term Loan, the borrowers can avail a secured or unsecured loan for their business purposes. They are usually classified according to their tenure as a short-term loan, long- term loan, and intermediate loan, which can be repaid on a monthly or quarterly basis. The rate of interest may be fixed or floating, depending on the type of loan.']
    //     },
    //     {
    //         title: '4.MUDRA Loan',
    //         image: "/assets/loan-services/mudra-loan_orig.png",
    //         description: [
    //             'Micro Units Development and Refinance Agency (MUDRA) loan is a loan option provided by banks to MSMEs across the country. Under Pradhan Mantri MUDRA Yojana, loan amounts from Rs. 50000 to Rs. 10 Lakhs are provided to start a business or an SME.']
    //     },
    //     {
    //         title: '5.Overdraft Loan',
    //         image: "/assets/loan-services/overdraft-loan.webp",
    //         description: [
    //             'Overdraft facility is given to people based on their credit history, tenure of relationship and their repaying capacity. The maximum amount and the interest is based on a mutual written agreement between the borrower and lender.']
    //     },
    //     // {
    //     //     title: '6.Letter of Credit',
    //     //     image:"/assets/loan-services/Professional_Loan.png",
    //     //     description: [
    //     //         'Letter of credit is the monetary guarantee that the bank provides to companies that deal with the import and export of materials. Here the bank pledges one-time payment to the seller based on its origin certificate, insurance certificate and other documents.']
    //     // }
    // ];


    return (

        <Box className={usestyles.root}>
            {/* Image Section */}
            {/* <div className={usestyles.imageSection} ></div> */}
            {/* <div className="relative overflow-hidden">

                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/loan-services/cash-credit.jpg"
                    alt="Services Header"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Cash Credit Overdraft Loan </h1>
                </div>
            </div> */}


            <Box sx={{ position: 'relative', overflow: 'hidden', marginTop: "40px" }}>
                <img
                    src="assets/loan-services/cash-credit.jpg"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        Cash Credit Overdraft Loan
                    </Typography>
                </Box>
            </Box>

            {/* Content Section */}
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 }, marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/loan-services/overdaft.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 }, // Adjust margin for different screen sizes
                            }}
                        />
                    </Grid>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2, md: 1 }, marginTop: { xs: 2, sm: 2 } }} >
                        <Typography variant="h4" gutterBottom>

                            What Is Cash Credit?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Cash Credit is a short-term loan given to businesses and companies. These loans help clients meet their daily operating expenses. It can be used to cover urgent payments related to current assets, selling costs, etc.
                        </Typography>

                        <Typography variant="h4" gutterBottom>

                            What Is Overdraft Loan?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            An Overdraft is a short-term loan given to existing customers. Overdrafts permit current account holders to withdraw or issue cheques despite low or even negative balances up to a certain limit. These funds can be used to tackle short-term instant payments.
                        </Typography>
                    </Grid>


                    {/* Right Image */}

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
                            Eligibility Criteria Cash Credit
                        </Typography>
                        {/* <Typography variant="body1" paragraph>
                            Eligibility criteria for Loan Against Property are the same for salaried as well as self-employed individuals.
                            Most banks have more or less the same set of eligibility criteria. Mentioned below are some of the eligibility
                            criteria for LAP.</Typography> */}
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Business Registration
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Business Vintage
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Turnover and Financial Health
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Credit History
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Collateral
                                </span>
                            </li>
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

                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                        <Typography variant="h5" gutterBottom>
                            Eligibility Criteria Overdraft Loan
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 },
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Bank Account
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Income/Turnover
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Credit History
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Collateral
                                </span>
                            </li>
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
                            Documents required for Cash Credit and Overdraft Loan
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, // Adjust the padding for different screen sizes
                        }}>

                            <Tabs defaultValue={1}>
                                <TabsList>
                                    <Tab value={1}>Cash Credit & Overdraft Loan</Tab>
                                    {/* <Tab value={2}>Overdraft Loan</Tab> */}


                                </TabsList>
                                <TabPanel value={1}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Duly filled application form with Passport-sized photographs
                                        </span>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Business PAN card
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            KYC documents: Applicant’s Passport, Driving License, Voter’s ID card, PAN card, Aadhar card, Utility Bills (Water/ Electricity Bills)
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Income Proof: Last 6 months’ bank statement
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Business Incorporation Certificate
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Business address proof
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Ownership proof: Company’s deed
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Details of collateral or security to be submitted
                                        </span>
                                    </li>

                                    <li style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                                &nbsp;&#10004;&nbsp;
                                            </span>
                                            Any other document required by the lender
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


                            </Tabs>





                        </ul>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/loan-services/car-document.png"
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
        </Box>
    );



};

export default CashCreditOverdraftLoan;
