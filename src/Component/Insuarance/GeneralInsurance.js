import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';

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
    fontWeight: 'semi-bold'

};

const GeneralInsurance = () => {
    const benefits = [
        {
            title: '1.Property Insurance',
            image: "../../assets/Insurance/Health-check-up.jpg",
            description: ['Protects physical assets such as homes, buildings, and belongings against damage or loss caused by perils like fire, theft, vandalism, and natural disasters.'
            ]
        },
        {
            title: '2.Motor Insurance',
            image: "../../assets/Insurance/medical_history_1.jpg",
            description: [
                'Provides coverage for vehicles against damages, theft, and liabilities arising from accidents. It typically includes components such as liability, collision, comprehensive, and uninsured/underinsured motorist coverage.']
        },

        {
            title: '3.Health Insurance',
            image: "../../assets/Insurance/BMI-1.jpg",
            description: ['Offers coverage for medical expenses incurred due to illness, injury, or accidents. Health insurance policies may include benefits such as hospitalization, medical treatments, prescription drugs, and preventive care.']
        },
        {
            title: '4.Travel Insurance',
            image: "../../assets/Insurance/habits.png",
            description: [
                'Provides coverage for travelers against unexpected events such as trip cancellations, medical emergencies, lost baggage, and travel delays while traveling domestically or internationally.']

        },
        {
            title: '5.Business Insurance:',
            image: "../../assets/Insurance/pre-existing-health.jpg",
            description: [
                'Offers various types of coverage to protect businesses from financial losses due to risks such as property damage, liability claims, business interruption, theft, and employee-related issues.']
        },

    ];


    return (

        <Box sx={{ flexGrow: 1 }}>
            {/* <Box sx={{ position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
                <Card>
                    <CardMedia
                        component="img"
                        image="assets/insurance/GeneralInsurance.jpg"
                        alt="Services Header"
                        sx={{
                            width: '100%',
                            height: {
                                xs: '210px',
                                sm: '210px',
                                md: 'auto',
                                lg: 'auto'
                            },
                            maxHeight: {
                                xs: 'none',
                                sm: 'none',
                                md: '56vh',
                                lg: '56vh'
                            },
                            objectFit: 'cover'
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Typography variant="h5" component="h1" fontWeight="bold">
                            General Insurance
                        </Typography>
                    </Box>
                </Card>
            </Box> */}
            <Box className="relative overflow-hidden">
                   <img
                    className="w-full h-64 sm:h-96 object-cover mt-12"
                    src="../../assets/Insurance/GeneralInsurance.jpg"
                    alt="GeneralInsurance"
                />
                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <Typography variant="h4" align="center">General Insurance</Typography>
                </Box>
            </Box>
       
            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
                        <Typography variant="h4" gutterBottom>
                            What is General Insuarance?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            General insurance refers to insurance policies that provide financial protection against a wide range of risks other than those covered by life insurance. It encompasses various types of insurance coverage designed to protect individuals, businesses, and assets from unforeseen events and losses.     </Typography>
                        <Typography variant="body1" paragraph>
                            General insurance is an agreement between a policyholder and insurer wherein the insurance company protects your valuable assets from fire, theft, burglary, or any other unfortunate accident.</Typography>
                        {/* <Typography variant="body1" paragraph>
                            Life insurance can be an essential part of financial planning, providing peace of mind and financial security to loved ones in the event of the insured's passing. It's typically recommended to assess one's financial needs and goals to determine the appropriate type and amount of life insurance coverage needed.
                        </Typography> */}
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }} >
                        <img
                            src="../../assets/Insurance/general-insurance2-removebg-preview.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Cards Section */}
            <Container maxWidth="lg" style={{ marginTop: "20px" }}>
                <Typography variant="h4" component="h3" display="flex" justifyContent="center">
                    Type Of  Genaral Insurance
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: "5px" }}>
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
                                        <Typography variant="body2" paragraph sx={descriptionStyle}>
                                            <b>{benefit.description}</b>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="../../assets/Insurance/top-7-health-in.avif"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 },
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                        <Typography variant="h5" gutterBottom>

                            Key Benefits of General insurance plans
                        </Typography>
                        <Typography variant="body1" paragraph>
                            General insurance plans offer several key benefits, providing financial protection and peace of mind for individuals and families. Here are some of the primary benefits
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

                                    Financial Protection
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Risk Management
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Legal Compliance
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Peace of Mind
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Asset Protection
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Business Continuity
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    Healthcare Coverage
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    Customized Coverage
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Financial Stability
                                </span>
                            </li>
                        </ul>
                    </Grid>

                    {/* Right Image */}

                </Grid>
            </Container>

            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            Documents required For General Insurance Plan
                        </Typography>
                        <Typography variant="body1" gutterBottom>


                            The specific documents required for general insurance may vary depending on the type of insurance and the insurance provider    </Typography>
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 },
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Identification Proof
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Address Proof
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Vehicle Documents
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Property Documents
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Business Documents
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Health-related Documents
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Travel Documents
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Additional Documents
                                </span>
                            </li>
                            {/* <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    Additional Benefits and Value-Added Services
                                </span>
                            </li> */}


                        </ul>
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2 } }} >
                        <img
                            src="../../assets/loan-services/business-loan3.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ marginTop: { xs: 2, sm: 2, order: { xs: 1, sm: 1 } } }} >
                        <img
                            src="../../assets/Insurance/list-of-general-insurance-companies-in-India-removebg-preview.png"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 },
                            }}
                        />
                    </Grid>

                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 2, order: { xs: 2, sm: 2 } } }}>
                        <Typography variant="h5" gutterBottom>
                            We provide a list of the top 10 General insurance companies
                        </Typography>
                        {/* <Typography variant="body1" paragraph>
                         Health insurance plans offer several key benefits, providing financial protection and peace of mind for individuals and families. Here are some of the primary benefits
                        </Typography> */}
                        <ul sx={{
                            listStyleType: 'disc',

                            paddingLeft: { xs: 2, sm: 2, md: 4 },
                        }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    1.Aditya Birla General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    2.Bajaj Allianz General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    3.Bharti AXA General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    4.Care Health General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    5.Cholamandalam MS General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    6. Digit General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    7. Edelweiss General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>

                                    8.IFFCO Tokio General Insurance Company
                                </span>
                            </li>

                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    9.Future Generali General Insurance Company
                                </span>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <span style={{ fontWeight: 'semi-bold', fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#34D399', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}>
                                        &nbsp;&#10004;&nbsp;
                                    </span>
                                    10.Kotak Mahindra General Insurance Company

                                </span>
                            </li>
                        </ul>
                    </Grid>



                </Grid>
            </Container>
        </Box>
    );
};

export default GeneralInsurance;
