import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Box } from '@mui/material';

const GeneralInsur = () => {
    // Your data and styles
    const benefits = [
        {
            title: '1.Property Insurance',
            image: "/assets/insurance/Health-check-up.jpg",
            description: ['Protects physical assets such as homes, buildings, and belongings against damage or loss caused by perils like fire, theft, vandalism, and natural disasters.'
            ]
        },
        {
            title: '2.Motor Insurance',
            image: "/assets/insurance/medical_history_1.jpg",
            description: [
                'Provides coverage for vehicles against damages, theft, and liabilities arising from accidents. It typically includes components such as liability, collision, comprehensive, and uninsured/underinsured motorist coverage.']
        },

        {
            title: '3.Health Insurance',
            image: "/assets/insurance/BMI-1.jpg",
            description: ['Offers coverage for medical expenses incurred due to illness, injury, or accidents. Health insurance policies may include benefits such as hospitalization, medical treatments, prescription drugs, and preventive care.']
        },
        {
            title: '4.Travel Insurance',
            image: "/assets/insurance/habits.png",
            description: [
                'Provides coverage for travelers against unexpected events such as trip cancellations, medical emergencies, lost baggage, and travel delays while traveling domestically or internationally.']

        },
        {
            title: '5.Business Insurance:',
            image: "/assets/insurance/pre-existing-health.jpg",
            description: [
                'Offers various types of coverage to protect businesses from financial losses due to risks such as property damage, liability claims, business interruption, theft, and employee-related issues.']
        },

    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header */}
            <Box sx={{ position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
                <Card>
                    <Box className="relative overflow-hidden">

                        <img
                            className="w-full h-64 sm:h-96 object-cover mt-12"
                            src="assets/insurance/GeneralInsurance.jpg"
                            alt="GeneralInsurance"
                        />
                        <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                            <Typography variant="h4" align="center">General Insurance</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>

            {/* Content Section */}
            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2, md: 1 } }}>
                        <Typography variant="h4" gutterBottom>
                            What is General Insurance?
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
                    <Grid item xs={12} sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 } }}>
                        <img
                            src="assets/insurance/general-insurance2-removebg-preview.png"
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
            <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
                <Typography variant="h4" component="h3" display="flex" justifyContent="center">
                    Type Of General Insurance
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: "5px" }}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={benefit.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" >
                                            {benefit.title}
                                        </Typography>
                                        <Typography variant="body2" paragraph>
                                            <b>{benefit.description}</b>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Additional Content Section */}
            <Container sx={{ margin: '0 100px' }}>
                <Grid container spacing={3} sx={{ marginTop: { xs: 2, sm: 2 } }}>
                    {/* Left Content */}
                    <Grid item xs={12} sm={12}>
                        <img
                            src="assets/insurance/top-7-health-insurance-riders-717x404.AVIF"
                            alt="Right Content"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                marginBottom: { xs: 4, sm: 8 },
                            }}
                        />
                    </Grid>

                    {/* Right Image */}
                    <Grid item xs={12} sm={12} md={6}>
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
                </Grid>
            </Container>
        </Box>
    );
};

export default GeneralInsur;
