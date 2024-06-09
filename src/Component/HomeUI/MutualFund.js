import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Box, Paper, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormComponent from '../Registration/FormComponent';
const MutualFund = () => {
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
                       src="assets/mutual_fund_header.jpg"
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
                     Mutual Fund
                    </Typography>
                </Overlay>
            </Box>

            {/* <Box sx={{ position: 'relative', overflow: 'hidden' ,marginTop:"30px"}}>
                <img
                    src="assets/mutual_fund_header.jpg"
                    alt="Services Header"
                    style={{ width: '100%', height: 'auto', maxHeight: '56vh', objectFit: 'cover' }}
                />
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Typography variant="h4" component="h5" fontWeight="bold">
                        Mutual Fund
                    </Typography>
                </Box>
            </Box> */}
            <Grid container mt={4} spacing={4} p={2}
                justifyContent="center" >
                {/* <Grid container mx={4} mt={4} spacing={4}> */}
                <Grid item xs={12} sm={12} md={8}>
                    <Paper sx={{ padding: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}><b>Mutual Fund</b></Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom >
                            A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, short-terms debts or other securities. Each investor in the mutual fund owns shares, which represent a portion of the holdings of the fund.
                            The combined holdings of the mutual fund are known as its portfolio.
                        </Typography>

                        <Box mb={4}>
                            <Typography variant='h5' sx={{ textDecoration: "underline", textDecorationColor: "#fd5b03", mb: 2, color: "blue" }}> <b>Types of Mutual Funds</b></Typography>
                            <Typography>Most mutual funds fall into four main categories - money market funds, bond funds, stock funds and target debt funds. Each type has different characteristics, risks and rewards.</Typography>
                            <Accordion defaultExpanded sx={{ backgroundColor: "#dee2e6" }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6' >What types of mutual funds ? </Typography>
                                </AccordionSummary>
                                <List component="div" disablePadding >
                                    <ListItemText sx={{ pl: 2 }}><b>1. Money Market Funds</b>: Best for short-term goals and maintaining liquidity with minimal risk.</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}>&#9679; &nbsp;Money Market Funds are a practical choice for investors seeking stability, liquidity, and safety for their short-term funds. While they offer modest returns compared to other investment options, their low risk and high liquidity make them an essential part of a diversified investment portfolio, especially for managing cash reserves and meeting short-term financial needs.</ListItemText>

                                    <ListItemText sx={{ pl: 2 }}><b>2.Bond Funds:</b> Suitable for income-focused investors looking for regular interest payments with moderate risk.</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}>&#9679; &nbsp;Bond Funds are a versatile investment option for income-focused investors who seek regular interest payments with moderate risk. They offer diversification, professional management, and accessibility, making them suitable for various investment strategies. However, understanding the associated risks, such as interest rate, credit, and inflation risks, is crucial for making informed investment decisions.</ListItemText>

                                    <ListItemText sx={{ pl: 2 }}><b>3.Stock Funds:</b>Ideal for long-term growth-oriented investors who can tolerate higher levels of risk and volatility.</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}>&#9679; &nbsp;Stock Funds are ideal for growth-oriented investors willing to accept higher levels of risk and volatility for the potential of higher returns. They offer diversification, professional management, and the opportunity for substantial capital appreciation. However, understanding the associated risks and aligning them with your investment goals and risk tolerance is crucial for making informed investment decisions.</ListItemText>

                                    <ListItemText sx={{ pl: 2 }}><b>4.Target-Date Funds:</b>Good for investors seeking a hands-off, long-term investment strategy that adjusts over time.</ListItemText>
                                    <ListItemText sx={{ pl: 3 }}>&#9679; &nbsp;Target-date funds offer a convenient, hands-off investment strategy for long-term retirement planning. They automatically adjust the asset allocation to become more conservative as the target date approaches, aligning with the investor's changing risk tolerance and retirement goals. While they provide simplicity and professional management, it's important to understand their risks, fees, and underlying glide path strategy to ensure they align with your individual financial needs and retirement plans</ListItemText>

                                </List>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{ backgroundColor: "#fd5b03", color: "white" }}
                                >
                                    <Typography variant='h6'>Why do people buy mutual funds?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List component="div" disablePadding >
                                        <Typography>People buy mutual funds for several reasons, each reflecting their unique financial goals, preferences, and circumstances. Here are some common motivations:</Typography>
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Diversification: </b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Mutual funds offer diversification by pooling investors' money and investing it across a range of securities, such as stocks, bonds, and other assets. This diversification helps spread risk and reduces the impact of poor performance from any single investment.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Professional Management:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> Mutual funds are managed by professional fund managers who have expertise in selecting and managing investments. Investors may lack the time, knowledge, or resources to manage their investments individually, making mutual funds an attractive option for accessing professional management.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Liquidity:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> Mutual funds provide liquidity, allowing investors to buy or sell shares on any business day at the fund's net asset value (NAV). This liquidity makes mutual funds suitable for investors who may need to access their funds quickly or make frequent transactions.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Affordability:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Mutual funds typically have lower investment minimums compared to purchasing individual stocks or bonds. This affordability makes mutual funds accessible to a wide range of investors, including those with smaller investment amounts.</ListItemText>
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Benefits of Mutual Funds</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Diversification: </b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Mutual funds invest in a wide range of securities, reducing the impact of poor performance by any single investment.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>This diversification helps spread risk across different asset classes, sectors, and geographic regions.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Professional Management:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Managed by experienced fund managers who conduct research and make informed investment decisions.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Provides access to professional expertise that individual investors may lack.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Convenience and Accessibility:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}> Easy to buy and sell shares through brokerage accounts, retirement accounts, or directly from fund companies.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Features like automatic investment plans and dividend reinvestment programs simplify the investment process.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Liquidity:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Mutual funds can be bought or sold on any business day at the fund’s net asset value (NAV).</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Provides flexibility for investors to access their funds when needed.</ListItemText>
                          
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Affordability:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Lower minimum investment requirements compared to purchasing individual stocks or bonds.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Allows small investors to build a diversified portfolio with relatively low initial capital.</ListItemText>
                          
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Variety of Options:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Wide range of mutual funds available, including equity funds, bond funds, money market funds, sector funds, and target-date funds.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Enables investors to select funds that match their investment objectives, risk tolerance, and time horizon.</ListItemText>
                          
                                    </List>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: "#dee2e6" }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} aria-controls="panel2-content" id="panel2-header" sx={{ backgroundColor: "#fd5b03", color: "white" }}>
                                    <Typography variant='h6'>Risks of Mutual Funds</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <List component="div" disablePadding >
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Market Risk:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>The value of mutual fund investments can fluctuate with market conditions.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Investors are exposed to the risk of loss if the market declines.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Management Risk:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>The performance of a mutual fund depends on the decisions made by the fund manager.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Poor management or strategy can negatively impact the fund’s performance.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Liquidity Risk:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Some mutual funds, especially those investing in less liquid assets, may face difficulties in selling investments quickly without significant price concessions.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Can affect the ability to redeem shares at favorable prices.</ListItemText>

                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Interest Rate Risk:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Bond funds are particularly sensitive to changes in interest rates.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Rising interest rates can lead to a decrease in bond prices, negatively impacting the fund’s value.</ListItemText>
                          
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Credit Risk:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>For bond funds, the risk that issuers of the bonds may default on their payments.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Higher yield bonds, such as junk bonds, come with higher credit risk.</ListItemText>
                          
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Over-Diversification:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Holding too many different securities can dilute potential returns.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Excessive diversification may lead to a portfolio that mimics the market without significant outperformance.</ListItemText>
                          
                                        <ListItemText sx={{ pl: 2 }}><b>&#9679; &nbsp;Lack of Control:</b></ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Investors have no control over the individual securities chosen by the fund manager.</ListItemText>
                                        <ListItemText sx={{ pl: 3 }}>Fund’s investment strategy and decisions may not always align with the investor’s preferences.</ListItemText>
                          
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Column (4 Grids) */}
                <Grid item xs={12} sm={8} md={3}  >
                    <FormComponent />
                    {/* <Paper sx={{ padding: 4 }}>
                        <FormComponent />
                    </Paper> */}
                </Grid>
            </Grid>



        </>
    );
};

export default MutualFund;
