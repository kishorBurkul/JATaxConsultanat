import React, { useState } from 'react';

const Slider = () => {
    return (


        <div id="default-carousel" class="relative w-full" data-carousel="slide">

            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="assets/homepage/slider1.png" class="absolute  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold z-10 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><b>All Tax Solution On One Place</b></h1>
                        <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
                    </div>
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="assets/homepage/slider2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold z-10 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><b>All Loan Services On One Place</b></h1>
                        <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
                    </div>
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="assets/homepage/slider3.jpg" class=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold z-10 text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"><b>All Registration Services On One Place</b></h1>
                        <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg xl:text-xl">Contact Us</button>
                    </div>
                </div>

            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                {/* <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
               <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
            </div>

            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>


    );
};

export default Slider;