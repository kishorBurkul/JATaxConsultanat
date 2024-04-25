import React, { useState } from 'react';

const reviews = [
  {
    name: 'John Doe',
    rating: 4.5,
    comment: 'Great service, highly recommended!',
  },
  {
    name: 'Jane Smith',
    rating: 5,
    comment: 'Excellent experience, will come back again!',
  },
  // Add more reviews as needed
];

const GoogleReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div class="flex items-center justify-center h-screen">
    <div id="animation-carousel" class="relative w-full max-w-md" data-carousel="static">
      
      <div class="relative h-64 overflow-hidden rounded-lg">
        
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
          <div class="bg-white shadow-lg rounded-lg p-4">
            <h2 class="text-lg font-semibold">John Doe</h2>
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0l2.39 6.444h6.697l-5.417 4.723 2.279 6.833-6.949-5.211-6.95 5.211 2.28-6.833L1.913 6.444H8.61L10 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-600">4.5</span>
            </div>
            <p class="text-gray-800 text-sm">"Great service, highly recommended!"</p>
          </div>
        </div>
        
        <div class="hidden duration-200 ease-linear" data-carousel-item>
          <div class="bg-white shadow-lg rounded-lg p-4">
            <h2 class="text-lg font-semibold">Jane Smith</h2>
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500 fill-current mr-1" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0l2.39 6.444h6.697l-5.417 4.723 2.279 6.833-6.949-5.211-6.95 5.211 2.28-6.833L1.913 6.444H8.61L10 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-600">5</span>
            </div>
            <p class="text-gray-800 text-sm">"Excellent experience, will come back again!"</p>
          </div>
        </div>
   
      </div>
     
      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
  

  );
};

export default GoogleReviewSlider;
