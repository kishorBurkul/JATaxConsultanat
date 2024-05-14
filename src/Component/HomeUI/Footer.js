import { Twitter, YouTube, Facebook, Instagram, Telegram } from '@mui/icons-material';
import { Grid, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import {
    Box,
    Button,
    Divider,
    Link,
    List,
    ListItem,
    TextField,
} from "@mui/material";
import { Avatar } from 'flowbite-react';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
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
                    <Grid item xs={6} sm={6} md={2}>
                        <Box>
                            <Typography variant="h6">GST & Tax Services</Typography>
                            <List>
                                <ListItem>GST Returns & Compliances</ListItem>
                                <ListItem>Income Tax Returns & Compliances</ListItem>
                                <ListItem>TDS Returns & Compliances</ListItem>
                                <ListItem>Digital Signatures ( DSC)</ListItem>
                                <ListItem>Accounting</ListItem>
                                <ListItem>Project Report</ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Box>
                            <Typography variant="h6" justifyContent="center">
                                Registration Services
                            </Typography>
                            <List>
                                <ListItem>GST Registration</ListItem>
                                <ListItem>Company Registration</ListItem>
                                <ListItem>Shop Act Registration</ListItem>
                                <ListItem>Udyam Registration</ListItem>
                                <ListItem>GST Registration</ListItem>
                                <ListItem>PAN Registration</ListItem>
                                <ListItem>Trademark Registrations</ListItem>
                                <ListItem>Professional Tax Registrations & Returns</ListItem>
                                <ListItem>EPF Registrations & Returns</ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Box>
                            <Typography variant="h6">All Loan Services</Typography>
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
                                <ListItem>Term Life Insurance</ListItem>
                                <ListItem>General Insurance</ListItem>
                                <ListItem>Motor Insurance</ListItem>
                                <ListItem>Home Insurance</ListItem>
                                <ListItem>Personal Accident Cover</ListItem>
                                <ListItem>Maternity Health Insuarnce</ListItem>

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
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: '#17213C', textAlign: 'center', padding: '20px 0', color: 'white' }}>
                <Typography variant="body2" color="inherit">Copyright&copy;J A Gaikwad & Associates . Developed By Kishor Burkul</Typography>
            </Grid>


        </footer >
    );
};

export default Footer;
