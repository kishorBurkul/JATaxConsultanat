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

const CarLoan = () => {
    return (

        <Box className={usestyles.root}>
            {/* Image Section */}
            {/* <div className={usestyles.imageSection} ></div> */}
            {/* <div className="relative overflow-hidden">
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/insurance/car_loan_header.jpg"
                    alt="Services Header"
                />
           
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Car Loan  </h1>
                </div>
            </div> */}


            <Box sx={{ position: 'relative', overflow: 'hidden' ,marginTop:"40px"}}>
                <img
                   src="assets/loan-services/car-loan-header.png"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                    Car Loan 
                    </Typography>
                </Box>
            </Box>

            {/* Content Section */}
            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 }, marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="assets/loan-services/car-loan2.png"
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

                            What is a car loan?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Owning a car is a sign of luxury and comfort in life. The rising automobile costs could leave a big dent on your pockets if you pay from your savings. It is much smarter to buy your dream car by availing a car loan.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            A car loan is a cash amount borrowed from a bank at a pre-decided interest rate, to buy a car. The terms and procedures of a car loan are similar to the other loan types.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Car loans help you realize your dream of buying your favorite car without having to worry about your savings. Fincover is the one-stop destination that brings you the best car loan and bike loan quotes from various lenders.
                        </Typography>

                    </Grid>


                    {/* Right Image */}

                </Grid>
            </Container>

            {/* Cards Section */}
            {/* <Container maxWidth="lg">
                <Typography variant="h4" component="h2" display="flex" justifyContent="center">
                    Business Loan Types
                </Typography>
                <Grid container spacing={3}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={cardStyle}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={benefit.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={titleStyle}>
                                            {benefit.title}
                                        </Typography>
                                        <Typography variant="body1" component="p" sx={descriptionStyle}>
                                            <b>{benefit.description}</b>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
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
                            Eligibility to avail car loan
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

                                    The applicant must be between 18 to 75.
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    He/She must have worked in the company working during loan application for at least one year.
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Must be salaried or self-employed.
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    A minimum monthly salary of Rs 20000
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    The applicant must have stayed at his current residence for atleast 1 year.
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

                    {/* Right Image */}

                </Grid>
            </Container>

            <Container className={usestyles.contentSection}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                 
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Documents required for car loan application
                        </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 }, 
                        }}>

                            <Tabs defaultValue={1} orientation='vertical' >
                                <TabsList sx={{width:"200px"}}>
                                    <Tab value={1}>Address proof</Tab>
                                    <Tab value={2}>Identity proof</Tab>
                                    <Tab value={3}>Proof of income</Tab>
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
                                            Previous income tax returns
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

export default CarLoan;
