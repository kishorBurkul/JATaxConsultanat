import { Twitter, YouTube, Facebook, Instagram, Telegram, KeyboardArrowUpRounded, WhatsApp, Phone, Call } from '@mui/icons-material';
import { Fab, Grid, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import {
    Box,
    Button,
    Divider,
    Link,
    List,
    ListItem,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { keyframes } from '@mui/material';



const footerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
};
const whatappStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
}
const callStyle = {
    position: 'fixed',
    bottom: '100px',
    left: '20px',
}
const iconStyle = {
    fontSize: '36px',
};
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const commonFabStyles = {
    animation: `${rotate} 5s linear infinite`,
};
const Footer = () => {


    const [showFab, setShowFab] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleLinkClick = (event) => {
        // Do something when a link is clicked
        console.log('Link clicked:', event.target.href);
    };

    return (
        <footer>
            <Grid
                container
                justifyContent="center"
                sx={{ backgroundColor: "#252B42", color: "white" }}
            >
                {/* <Grid
                    item
                    xs={12}
                    md={6}
                    sm={6}
                    display={"flex"}
                    justifyContent="center"
                    mt={{ xs: 0, sm: 0, md: 4 }}
                >
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="Lo" src="assets/homepage/hdfc.png" sx={{ width: 34, height: 34 }} />
                        <Typography variant="h6" style={{ marginLeft: 10 }}>J A Gaikwad & Associates</Typography>
                        
                    </Box>
                </Grid> */}
                {/* <Grid
                    item
                    xs={6}
                    md={6}
                    sm={6}
                    display={"flex"}
                    justifyContent="center"
                    mt={{ xs: 0, sm: 0, md: 4 }}
                >

                    <IconButton aria-label="Facebook" sx={{ color: "#1877F2" }}>
                        <Facebook />
                    </IconButton>
                    <IconButton aria-label="Instagram" sx={{ color: "red" }}>
                        <Instagram />
                    </IconButton>
                    <IconButton aria-label="Twitter" sx={{ color: "#1DA1F2" }}>
                        <Twitter />
                    </IconButton>
                    <IconButton aria-label="Youtube" sx={{ color: "red" }}>
                        <YouTube />
                    </IconButton>
                </Grid> */}
                <Grid container m={4} spacing={0.5}>
                    <Grid item xs={6} sm={4} md={2}>
                        <Box>
                            <Typography variant="h6">GST & Tax Services</Typography>
                            <List>
                                <ListItem>GST Returns & Compliances</ListItem>
                                <ListItem>Income Tax Returns & Compliances</ListItem>
                                <ListItem>TDS Returns & Compliances</ListItem>
                                <ListItem>Digital Signatures ( DSC)</ListItem>
                                <ListItem>Accounting</ListItem>
                                <ListItem>Mutual Fund</ListItem>
                                {/* <ListItem>Project Report</ListItem> */}
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={4} md={2}>
                        <Box>
                            <Typography variant="h6" justifyContent="center">
                                Registration Services
                            </Typography>
                            <List>
                                <ListItem>GST Registration</ListItem>
                                <ListItem>Company Registration</ListItem>
                                <ListItem>Shop Act Registration</ListItem>
                                <ListItem>Udyam Registration</ListItem>
                                <ListItem>PAN Registration</ListItem>
                                <ListItem>Trademark Registrations</ListItem>
                                <ListItem>Professional Tax Registrations & Returns</ListItem>
                                <ListItem>EPF Registrations & Returns</ListItem>
                                <ListItem>Food License Registration(FSSAI)</ListItem>
                                <ListItem>Import Export Code Registration</ListItem>
                                <ListItem>TAN Registration</ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Box>
                            <Typography variant="h6">Loan Services</Typography>
                            <List>
                                <ListItem>Personal Loan </ListItem>
                                <ListItem>Home Loan</ListItem>
                                <ListItem>Business Loan</ListItem>
                                <ListItem>Mortgage Loan</ListItem>
                                <ListItem>Cash Credit Overdraft Loan </ListItem>
                                <ListItem>Car Loan</ListItem>
                                <ListItem>Education Loan</ListItem>
                                <ListItem>Balance Transfer & Top Up
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Box>
                            <Typography variant="h6">Insurance Services</Typography>
                            <List>
                                <ListItem>Health Insurance</ListItem>
                                <ListItem>Life Insurance</ListItem>
                                <ListItem>Term Insurance</ListItem>
                                <ListItem>General Insurance</ListItem>
                                <ListItem>Motor Insurance</ListItem>
                                <ListItem>Home Insurance</ListItem>
                                <ListItem>Personal Accident Cover</ListItem>
                                <ListItem>Maternity Health  Insurance</ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Get in Touch</Typography>
                        <IconButton aria-label="Facebook" sx={{ color: "#1877F2" }} href="https://www.facebook.com/jagaikwadandassociates">
                            <Facebook />
                        </IconButton>
                        <IconButton aria-label="Instagram" sx={{ color: "#c32aa3" }} href="https://www.instagram.com/jagaikwadandassociates">
                            <Instagram />
                        </IconButton>
                        <IconButton aria-label="Twitter" sx={{ color: "#1DA1F2" }} href="https://x.com/JayGaik58255590?t=l2wBBE212sAUAGksjFKdNg&s=09">
                            <Twitter />
                        </IconButton>
                        <IconButton aria-label="Youtube" sx={{ color: "red" }} href="https://www.youtube.com/@jagaikwadandassociates">
                            <YouTube />
                        </IconButton>
                        <IconButton aria-label="Telegram" sx={{ color: "#0088cc" }} href="https://t.me/jagaikwadandassociates">
                            <Telegram />
                          
                        </IconButton>
                        <IconButton aria-label="Telegram" sx={{ color: "orange" }} href="https://www.google.com/search?client=ms-android-xiaomi-rev1&sca_esv=ee550f040f73c7f6&sca_upv=1&cs=0&output=search&q=J.%20A.%20Gaikwad%20%26%20Associates&ludocid=5208214411368494940&ibp=gwp%3B0%2C7&lsig=AB86z5VHLFVHT3mnQMzbzpBIrP8b&kgs=f8a7b8bdced5274b&shndl=-1&shem=lsp%2Cssic&source=sh%2Fx%2Floc%2Fhdr%2Fm1%2F2">
                            <  StorefrontIcon />
                        </IconButton>

                        <List sx={{ marginTop: 2 }}>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ color: "#03a8a0" }}>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary="Address: Sr. No. 34/8, Suman Plaza, A Wing, 3rd Floor, Flat No.10 Trimurti Chouk, Near Bharati Vidyapith, Dr. P.K.Nagar, Dhankawadi, Pune Maharashtra - 411046" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ color: "#d44638" }}>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Email: jagaikwadandassociates@gmail.com" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ color: "#133292" }}>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Mobile: 8624058644 / 8668511898" />
                            </ListItem>
                        </List>
                        {/* <TextField
                            placeholder="Enter your email"
                            variant="outlined"
                            sx={{ backgroundColor: "white" }}
                            InputProps={{
                                endAdornment: (
                                    <Button size="large" variant="contained" color="warning" sx={{ height: "100%" }}>
                                        Subscribe
                                    </Button>
                                ),
                            }}
                        /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7569.131324311003!2d73.84837078272841!3d18.45801959340881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2eb458c58d0af%3A0x631bdaae3155adae!2sFR5X%2B3MV%20Suman%20Plaza%2C%20Tanaje%20Nagar%2C%20Mohan%20Nagar%2C%20Dhankawadi%2C%20Pune%2C%20Maharashtra%20411046!3m2!1d18.4577307!2d73.84917589999999!5e0!3m2!1sen!2sin!4v1716232403532!5m2!1sen!2sin"
                            width="330px" height="200px" allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </Grid>
                    {showFab && (
                        <Box style={footerStyle} onClick={scrollToTop}>
                            <Fab
                                title="Scroll to Top"
                                color="primary"
                                sx={{ width: "40px ", height: "40px" }}
                                aria-label="scroll-to-top"
                            >
                                <KeyboardArrowUpRounded style={iconStyle} />
                            </Fab>
                        </Box>
                    )}
                    <Box style={whatappStyle}>
                        <Fab
                            title="Whats App"
                            color="success"
                            sx={{ width: "60px ", height: "60px" }}
                        >
                            <IconButton
                                color="primary"
                                sx={{ ...commonFabStyles, backgroundColor: '#25D366', width: '50px', height: '50px', color: 'yellow' }}
                                aria-label="WhatsApp"
                                onClick={() => window.open('https://wa.me/+918624058644', '_blank')}
                            >
                                <WhatsApp fontSize='20' />
                            </IconButton >
                        </Fab>
                    </Box>
                    <Box style={callStyle}>
                        <Fab
                            title="Calling"
                            color="primary"
                            sx={{ ...commonFabStyles, width: "60px ", height: "60px", backgroundColor: '#0A84FF' }}
                        >
                            <IconButton
                                sx={{ width: '80px', height: '80px', color: 'blue' }}
                                aria-label="Call"
                                onClick={() => window.open('tel:+918624058644', '_self')}
                            >
                                <Call /></IconButton>
                        </Fab>
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: '#17213C', textAlign: 'center', padding: '20px 0', color: 'white' }}>
                <Typography variant="body2" color="inherit">Copyright &copy;J A Gaikwad & Associates & Developed By Kishor Burkul</Typography>
            </Grid>


        </footer >
    );
};

export default Footer;
