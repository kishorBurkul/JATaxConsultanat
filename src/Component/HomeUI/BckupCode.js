import React, { useState, useEffect } from 'react';

const BackupCode = () => {
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


  {/* About Home */}

            <section>
                <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
                    {/* Left side: Image with effects */}
                    <div className="image-container md:w-1/2 md:ml-20 md:mr-6 lg:mr-12 relative overflow-hidden">
                        <img
                            src="assets/homepage/aboutus.jpg"
                            alt="About Us Image"
                            style={{ width: "500px" }}
                            className=" md:h-310 md:ml-20 md:mr-20 lg:mr-12 transform scale-105 hover:scale-110 transition-transform duration-500 shadow-lg"
                        />
                        {/* Add any overlay or effects here */}
                    </div>

                    {/* Right side: Description */}
                    <div className="md:w-1/2 md:ml-12 mt-6 md:mt-0 mr-6 sm:mr-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-justify">About J.A.Gaikwad & Associates, In Pune</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                         J.A.Gaikwad and Associates has established itself as a comprehensive accounting, tax, and audit firm offering a wide array of services to clients across Maharashtra.
                         Founded in 2017 by Jayram Ashok Gaikwad, the firm is led by a team of chartered accountants,
                         tax consultants, and other professionals in India, equipped with extensive knowledge and professional experience.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                         Our services encompass various areas, including accounting, auditing, direct taxation, Goods & Services Tax (GST), company law consultancy, NRI taxation, startup services, and bookkeeping & outsourcing services.
                         We pride ourselves on being a dedicated group of professionals committed to continuously adding value and optimizing benefits for our clients.
                         
                        </p>
                        {/* Add more description or elements as needed */}
                        <Link to="/about-us" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" color="primary">Read More  &gt;&gt;</Button>
                                        </Link>
                        {/* <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More  &gt;&gt;
                        </button> */}
                    </div>
                </div>
                </section>

        </>
    );
};

export default BackupCode;
