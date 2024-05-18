import React from 'react';
import { Grid, Typography, Avatar, Button, CardActionArea, Card, Box, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "Our Vision",
        image: "assets/homepage/vision.png",
        description: "Above all our vision and goal is to divert from the traditional practice of taxation and audit legal requirements to comprehensive and active support to the business entities by providing a broad range of advisory activities, management support services to strengthen and improve productivity and profitability in the clients business with total compliance of business legal laws and applicable regulatory framework.",
        buttonLabel: "Read More"
    },
    {
        title: "Why Choose Us",
        image: "assets/homepage/Whyus.webp",
        description: "We have Professional, Proactive and Partnership Approach towards client’s needs. We believe to stay ahead and updated with the latest developments and sharing the information in the changing economy to provide our clients with the most consistent and prompt quality services. We believe in strong and regular communication with our clients to eliminate their concerns thereby ensuring meeting the deadlines by working with.",
        buttonLabel: "Read More"
    },
    {
        title: "Our Mission",
        image: "assets/homepage/goal-icon-png-3.jpg",
        description: "Our mission is to provide quality service of taxation, auditing, financial and general management with up-to-date knowledge of relevant field. We help our client to conduct their daily business activities smoothly by providing latest tax information and advices and making timely compliance to tax authorities to avoid financial losses.",
        buttonLabel: "Read More"
    }
];

const Vision = () => {
    return (
        <Grid container direction="column" alignItems="center" >
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
                {/* Map over the card data */}
                {cardData.map((card, index) => (
                    <Grid key={index} item xs={12} sm={4} sx={{ marginX: 2 }}>
                        <CardActionArea>
                            <Card sx={{borderRadius:"10px"}}>
                                <Avatar alt={card.title} src={card.image} sx={{ margin: 'auto', width: "100px", height: "100px", }} />
                                <Typography variant="h5" align="center">{card.title}</Typography>
                                <Box p={2} display="flex" flexDirection="column" alignItems="center">
                                    <Typography variant="body1" display="flex" justifyContent="center" mx={2}>
                                        {card.description}
                                    </Typography>
                                    <CardActions>
                                      
                                        <Link to="/about-us" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" color="primary">{card.buttonLabel}</Button>
                                        </Link>
                                    </CardActions>
                                </Box>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Vision;
