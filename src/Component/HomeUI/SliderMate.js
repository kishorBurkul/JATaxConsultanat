import React from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { Paper, Typography, Button } from '@mui/material';

const SliderMate = () => {
    const items = [
        {
            img: 'assets/homepage/slider1.png',
            title: 'All Tax Solution In One Place',
            buttonText: 'Contact Us',
        },
        {
            img: 'assets/homepage/slider2.png',
            title: 'All Loan Services In One Place',
            buttonText: 'Contact Us',
        },
        {
            img: 'assets/homepage/slider3.jpg',
            title: 'All Registration Services In One Place',
            buttonText: 'Contact Us',
        },
    ];

    return (
        <Carousel>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
};

const Item = ({ item }) => (
    <Paper>
        <img src={item.img} alt={item.title} className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Button variant="contained" color="primary">{item.buttonText}</Button>
            </div>
        </div>
    </Paper>
);

export default SliderMate;
