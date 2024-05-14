import React from 'react';
import { Grid, Typography, Avatar, Button, CardActionArea, Card, Box } from '@mui/material';

const Vision = () => {
    return (
        <Grid container direction="column" alignItems="center">
            {/* Header with Avatar and Name */}
            <Grid item sx={{ mb: 3 }}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center mt-2">
                    <span className="relative">
                        Visions
                        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-300"></span>
                    </span>
                </h2>
            </Grid>

            {/* Main content grid */}
            <Grid item container spacing={3} justifyContent="center">
                {/* Column 1 */}
                <Grid item xs={12} sm={4} sx={{ marginX: 2 }}>
                    <CardActionArea>
                        <Card>
                            <Avatar alt="User Avatar" src="assets/homepage/vision.png" sx={{ margin: 'auto', width: "100px", height: "100px" }} />
                            <Typography variant="h5" align="center">Our Vison</Typography>
                            <Box p={2} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="body1" display="flex" justifyContent="center" m={2}>
                                    Above all our vision and goal is to divert from the traditional practice of taxation and audit legal requirements to comprehensive and active support to the business entities by providing a broad range of advisory activities, management support services to strengthen and improve productivity and profitability in the clients business with total compliance of business legal laws and applicable regulatory framework.
                                </Typography>
                                
                                <Button variant="contained" color="primary">Read More</Button>
                            </Box>


                        </Card>
                    </CardActionArea>
                </Grid>

                {/* Column 2 */}
                <Grid item xs={12} sm={4} sx={{ marginX: 2 }}>
                    <CardActionArea>
                        <Card>
                            <Avatar alt="why choose" src="assets/homepage/Whyus.webp" sx={{ margin: 'auto', width: "100px", height: "100px" }} />
                            <Typography variant="h5" align="center">Why Choose Us </Typography>
                            <Box  p={2} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="body1" display="flex" justifyContent="center" mx={2}>
                                    We have Professional, Proactive and Partnership Approach towards client’s needs.
                                </Typography>
                                <Typography variant="body1" display="flex" justifyContent="center" mx={2}>
                                    We believe to stay ahead and updated with the latest developments and sharing the information in the changing economy to provide our clients with the most consistent and prompt quality services.
                                </Typography>
                                <Typography variant="body1" display="flex" justifyContent="center" mx={2}>
                                    We believe in strong and regular communication with our clients to eliminate their concerns thereby ensuring meeting the deadlines by working with
                                </Typography>
                                <Button variant="contained" color="primary" display="flex" justifyContent="center">Read More</Button>
                            </Box>

                        </Card>
                    </CardActionArea>
                </Grid>

                {/* Column 3 */}
                <Grid item xs={12} sm={4} sx={{ marginX: 2 }}>
                    <CardActionArea>
                        <Card>
                            <Avatar alt="User Avatar" src="assets/homepage/goal-icon-png-3.jpg" sx={{ margin: 'auto', width: "100px", height: "100px" }} />
                            <Typography variant="h5" align="center">Our Mission</Typography>
                            <Box  p={2} display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="body1" display="flex" justifyContent="center" m={2}>
                                    Our mission is to provide quality service of taxation, auditing, financial and general management with up-to-date knowledge of relevant field.
                                </Typography>
                                <Typography variant="body1" display="flex" justifyContent="center" mx={2}>
                                    We help our client to conduct their daily business activities smoothly by providing latest tax information and advices and making timely compliance to tax authorities to avoid financial losses.
                                </Typography>
                                <Button variant="contained" color="primary" display="flex" justifyContent="center">Read More</Button>
                            </Box>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Vision;
