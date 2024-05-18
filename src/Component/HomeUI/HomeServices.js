import React, { useState, useEffect } from 'react';

const HomeServices = () => {
    const [key, setKey] = useState(0);

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
        // Fetch images when the component mounts and updates
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    }, [key]); // Run useEffect whenever key changes

    useEffect(() => {
        // Force remounting of component by updating the key
        setKey(prevKey => prevKey + 1);
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative w-full mt-12" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {slides.map((slide, index) => (
                        <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img key={key} src={slide.image} className="absolute object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                                <div>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">{slide.content.title}</h1>
                                    {/* <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">{slide.content.buttonText}</button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeServices;
