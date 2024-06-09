import React from 'react'
import AboutVision from './AboutVision'
import { Box, CardMedia, Typography } from '@mui/material'
import { Container, Grid, Paper } from '@mui/material';

const AboutUs = () => {
    return (
        <Box>

            {/* <Box position="relative" overflow="hidden">
                <CardMedia
                    component="img"
                    image="assets/homepage/aboutus.png"
                    alt="Services Header"
                    sx={{
                        width: '100%',
                        height: { xs: '36vh', sm: '64vh' },
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                    }}
                >
                    <Typography variant="h6" component="h6" align="center" sx={{ fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 'bold' }}>
                        About Us
                    </Typography>
                </Box>
            </Box> */}

            <Box className="relative overflow-hidden">
                 <img
                    className="w-full h-64 sm:h-96 object-cover mt-12"
                    src="assets/homepage/aboutus.png"
                    alt="Services Header"
                />
                <Box className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <Typography variant="h4" align="center">About Us</Typography>
                </Box>
            </Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={6} alignItems="center" justifyContent="center">
                    {/* Left side: Image with effects */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component={Paper}
                            elevation={6}
                            sx={{
                                overflow: 'hidden',
                                position: 'relative',
                                '&:hover img': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src="assets/homepage/aboutus.jpg"
                                alt="About Us Image"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Right side: Description */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom >
                            About J.A.Gaikwad & Associates, In Pune
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;J.A.Gaikwad and Associates has established itself as a comprehensive accounting, tax, and audit firm offering a wide array of services to clients across Maharashtra.
                            Founded in 2017 by Jayram Ashok Gaikwad, the firm is led by a team of chartered accountants,
                            tax consultants, and other professionals in India, equipped with extensive knowledge and professional experience.
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;Our services encompass various areas, including accounting, auditing, direct taxation, Goods & Services Tax (GST), company law consultancy, NRI taxation, startup services, and bookkeeping & outsourcing services.
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;The organization is a congregation of professionally qualified and experienced persons who are committed to add value continuously and optimize the benefits accruing to clients. The firm has a strong client base ranging in manufacturing, service and banking sector, with the focus on Start Ups, NGO’s, NRI and SME clients as well as new aged services viz. valuation and Ind-AS.
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;The firm is registered and empanelled with various Nationalised banks and Financial Institutions for various banking related assignments as well.
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;The varied services provided by our firm ranges from traditional compliance oriented services viz. audit and taxation to management advisory services (for Start Ups, NRI’s, NGO’s and Others) and Ind-AS as well as Valuation Services.
                        </Typography>
                        <Typography variant="body1" paragraph textAlign="justify">
                            &#9679;&nbsp;Important services rendered by our firm include Auditing (Statutory as well as Internal & Management Audits), Taxation compliance and Advisory Services (Income Tax, Wealth Tax, Profession Tax and GST), Business Support services (Accounting, Fund raising, Company & LLP formations), Personal Financial Planning & advisory services, Business Process Outsourcing (Accounting, Payroll, Tax Management) Banking Assignments (Statutory, Internal, Revenue Audit, Stock & Credit Audit), Start Ups related Services, NGO Management and consultancy services, Ind-AS related services, Business Valuation Services and even corporate trainings.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <AboutVision />
        </Box>
    )
}

export default AboutUs