import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HomeServices = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
          image: 'assets/homepage/slider1.png',
          content: {
            title: 'All Tax Solution In One Place',
            buttonText: 'Contact Us',
          },
        },
        {
          image: 'assets/homepage/slider2.png',
          content: {
            title: 'All Loan Services In One Place',
            buttonText: 'Contact Us',
          },
        },
        {
          image: 'assets/homepage/slider3.jpg',
          content: {
            title: 'All Registration Services In One Place',
            buttonText: 'Contact Us',
          },
        },
        {
          image: 'assets/homepage/insurance_home.jpg',
          content: {
            title: 'All Insurance Services In One Place',
            buttonText: 'Contact Us',
          },
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const SlideImage = styled('img')({
        width: '100%',
        height: '50%',
        objectFit: 'cover',
    });

    const SlideContent = styled(Box)(({ theme }) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '650px',
        color: 'white',
        textAlign: 'center',
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
    }));

    return (
        <Box sx={{ position: 'relative', width: '100%', mt:{xs:"56px",md:"56px",lg:"56px",sm:"56px"},}}>
            <Box sx={{ position: 'relative',  overflow: 'hidden'}}>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: activeSlide === index ? 'block' : 'none',
                            transition: 'opacity 1s ease-in-out',
                        }}
                    >
                        <SlideImage src={slide.image} alt={`Slide ${index + 1}`} sx={{height:{sx:"250px",md:"350px",lg:"450px"}}} />
                        <SlideContent>
                            <Typography variant="h6" sx={{fontWeight: 'bold', fontSize:{xs:"18px" , md:"26px", lg:"36px"} }}>
                                {slide.content.title}
                            </Typography>
                            {/* <Button variant="contained" color="primary" size="medium">
                                {slide.content.buttonText}
                            </Button> */}
                        </SlideContent>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HomeServices;
