import React from 'react';

const Testimonial = ({ image, description, name, role }) => {
  return (
    <>
    {/* <div class="max-w-md mx-auto">
    <div class="relative">
        <div class="flex justify-center items-center md:items-start h-auto md:h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
            <div class="px-4 md:px-8 py-4 md:py-6 w-full">
                <p class="text-lg md:text-xl font-medium text-white mb-2">"The best experience ever"</p>
                <p class="text-white text-sm md:text-base">{description}</p>
                <div class="mt-4 flex items-center">
                    <img class="h-8 w-8 md:h-10 md:w-10 rounded-full mr-2 md:mr-4" src={image} alt={name}/>
                    <div>
                        <p class="text-white font-medium text-sm md:text-base">{name}</p>
                        <p class="text-gray-200 text-xs md:text-sm">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}




<div className="flex-shrink-0 w-full sm:w-1/3 p-4 relative hover:scale-105 bg-gradient-to-r ">
  <div className=" rounded-lg shadow-lg p-6 overflow-hidden relative border border-transparent hover:border-black hover:border-solid hover:border-1 bg-gradient-to-r from-purple-600 to-pink-600 ">
    <div className="flex items-center justify-center mb-4">
      <img src={image} alt={name} className="w-20 h-20 rounded-full" />
    </div>
    <p className="text-white text-lg mb-4">{description}</p>
    <p className="text-white font-semibold">{name}</p>
    <p className="text-gray-100">{role}</p>
    <div className="absolute inset-0 rounded-lg shadow-md opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
    <ul class="mb-0 flex mt-2">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5 text-yellow-500">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="h-5 w-5 text-yellow-500"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </li>
    </ul>
  </div>
</div>

</>
    


  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis convallis massa.',
      name: 'Jayram A Gaikwad',
      role: 'CEO, J A Gaikwad & Associates '
    },
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      description: 'Nulla facilisi. Cras vel dolor ac augue fringilla tincidunt. Integer malesuada.',
      name: 'Jayram A Gaikwad',
      role: 'Marketing Manager, J A Gaikwad & Associates'
    },
    {
      image: 'assets/homepage/jagaikwadpic.jpeg',
      description: 'Praesent lobortis vehicula libero, eget consequat arcu accumsan non.',
      name: 'Jayram A Gaikwad',
      role: 'CTO, J A Gaikwad & Associates'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        <span className="relative">
          Our Team
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-300"></span>
        </span>
      </h2>
      <div className="flex flex-wrap -mx-4 bg-gradient-to-r">

        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
