import React, { useState } from 'react';

const HomeServices = () => {
    return (


        <>
            <div id="default-carousel" class="relative w-full mt-12" data-carousel="slide">

<div class="relative h-56 overflow-hidden rounded-lg md:h-96">

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="assets/homepage/slider1.png" class="absolute object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        <div class="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
                <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">All Tax Solution In One Place</h1>
                <button class="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
            </div>
        </div>
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="assets/homepage/slider2.png" class="absolute object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        <div class="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
                <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">All Loan Services In One Place</h1>
                <button class="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
            </div>
        </div>
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="assets/homepage/slider3.jpg" class="absolute object-cover block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        <div class="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
                <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">All Registration Services In One Place</h1>
                <button class="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
            </div>
        </div>
    </div>

</div>

<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse">
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
</div>

<button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
    </span>
</button>
<button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
    </span>
</button>
</div>

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
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-justify">About J.A Gaikwad & Associates,Tax Practitioner In Pune</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            With over 7 years of experience, J.A Gaikwad and Associates is a trusted Tax Practitioner and Loan Provider firm in Pune.
                            We cater to all kinds of businesses, be it of any size or shape. We keep client satisfaction as our top priority.
                            We provide advisory, regulatory, and compliance-related services in the areas of Direct and Indirect Taxation and Loan Services.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            including Income Tax related Compliance, GST related compliance, Transfer Pricing, Auditing and Assurance,
                            cross-border transactions related services, Company Formation, GST Registration, All Registration Services and Consultancy Services, etc.
                            The proprietor, J.A Gaikwad, is a Tax Practitioner in Pune. He started this firm as a practicing CA in Pune in 2017.
                            Being among the top Tax Practitioner firms in Pune, we help clients in filing their Income Tax Returns, GST returns, GST registrations, Loan services.
                            So if you are looking for tax advice from a Tax Practitioner and Loan Provider in Pune, J.A Gaikwad and Associates is your one-stop destination for all tax compliances and Loan Services. Apart from Taxation,
                            we also help with Auditing and Assurance, Company Incorporation, LLP registration, and other ROC and registration matters and Project Report.
                        </p>
                        {/* Add more description or elements as needed */}
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More  &gt;&gt;
                        </button>
                    </div>
                </div></section>

        </>

    );
};

export default HomeServices;