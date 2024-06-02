import React from 'react';
import { Grid, Typography, Avatar, CardActionArea, Card, Box } from '@mui/material';
import data from './data.json'; // Adjust the path according to your project structure

const AboutVision = () => {
    return (
        <Grid container direction="column" alignItems="center" mt={2} p={4}>
            <Grid item container spacing={3} justifyContent="center">
                {data.sections.map((section, index) => (
                    <Grid item xs={12} sm={4} md={4}  key={index}>
                        <CardActionArea>
                            <Card>
                                <Avatar
                                    alt={section.title}
                                    src={section.avatar}
                                    sx={{ margin: 'auto', width: "100px", height: "100px" ,marginTop:"5px"}}
                                />
                                <Typography variant="h5" align="center">{section.title}</Typography>
                                <Box p={2} display="flex" flexDirection="column" alignItems="center">
                                    {section.points.map((point, pointIndex) => (
                                        <Typography
                                            variant="body1"
                                            display="flex"
                                            justifyContent="center"
                                            mt={pointIndex === 0 ? 0 : 1}
                                            mx={2}
                                            key={pointIndex}
                                        >
                                            &#9679;&nbsp; {point}
                                        </Typography>
                                    ))}
                                </Box>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default AboutVision;
