import { Button } from '@mui/material';
import React, { useState } from 'react';

const Vision = ({ image, description, name, role }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-1/3 p-4 relative">
      <div className="rounded-lg shadow-lg p-6 overflow-hidden relative border border-transparent hover:border-black hover:border-solid hover:border-1">
        <div className="flex items-center justify-center mb-4">
          <img src={image} alt={name} className="w-20 h-20 rounded-full" />
          <div className="ml-4">
            <span className="text-lg font-semibold">{name}</span>
            <span className="block text-sm">{role}</span>
          </div>
        </div>
        <p className='text-black text-md mb-4 max-h-full  overflow-hidden'>{description}</p>
        <Button>Read More</Button>
        {/* <div className="flex justify-center">
          {!expanded && (
            <button onClick={toggleExpanded} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          )}
          {expanded && (
            <button onClick={toggleExpanded} className="text-black text-sm font-semibold mb-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Read Less
            </button>
          )}
        </div> */}
        <div className="absolute inset-0 rounded-lg shadow-md opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
      </div>
    </div>
  );
};

const Visions = () => {
  const visions = [
    {
      image: 'assets/homepage/vision.png',
      description: [' Above all our vision and goal is to divert from the traditional practice of taxation and audit legal requirements to comprehensive and active support to the business entities by providing a broad range of advisory activities, management support services to strengthen and improve productivity and profitability in the clients business with total compliance of business legal laws and applicable regulatory framework.',
        'Dedication and discipline are the aims of our parents and employees giving an edge to our professional services for the clients.',
        'To be a preferred provider of Accounting, Auditing and Consulting Services.',
        'To provide highest client satisfaction through our dedicated workforce.',
        'To be a respected name and leader in consultancy services.',
      ],
      name: 'Our Vision',

    },
    {
      image: 'assets/homepage/goal-icon-png-3.jpg',
      description: [
        'Our mission is to provide quality service of taxation, auditing, financial and general management with up-to-date knowledge of relevant field.',
        'We help our client to conduct their daily business activities smoothly by providing latest tax information and advices and making timely compliance to tax authorities to avoid financial losses.',
      ],
      name: 'Our Mission',

    },
    {
      image: 'assets/homepage/Whyus.webp',
      description:['We have Professional, Proactive and Partnership Approach towards client’s needs.',
        'We believe to stay ahead and updated with the latest developments and sharing the information in the changing economy to provide our clients with the most consistent and prompt quality services.',
        'We believe in strong and regular communication with our clients to eliminate their concerns thereby ensuring meeting the deadlines by working with them closely.',
        'We consider feedback from our clients for us to improvise.',
        'We abide by our commitment.',
        'We understand our client’s problems as if they were our own and commit to provide them with solutions that bear constructive results.',
        'We understand our client’s problems as if they were our own and commit to provide them with solutions that bear constructive results.',
        
      ],
      name: 'Why Choose Us',
    }
  ];

  return (
    <div className="container mx-auto px-4 mt-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
        <span className="relative">
          Visions
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-300"></span>
        </span>
      </h2>
      <div className="flex flex-wrap -mx-4 bg-gradient-to-r">
        {visions.map((testimonial, index) => (
          <Vision key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Visions;
