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
        <p className={`text-black text-md mb-4 ${expanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>{expanded ? description : `${description.slice(0, 200)}...`}</p>
        <div className="flex justify-center">
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
        </div>
        <div className="absolute inset-0 rounded-lg shadow-md opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
      </div>
    </div>
  );
};

const Visions = () => {
  const visions = [
    {
      image: 'assets/homepage/vision.png',
      description: 'Above all our vision and goal is to divert from the traditional practice of taxation and audit legal requirements to comprehensive and active support to the business entities by providing a broad range of advisory activities, management support services to strengthen and improve productivity and profitability in the clients business with total compliance of business legal laws and applicable regulatory framework. Dedication and discipline are the aims of our parents and employees giving an edge to our professional services for the clients. We best chartered accountants in Pune Maharashtra, India are not only continuously accelerating to be amongst top runners in the top accounting firms or accounting companies profession but also abide with a capability to provide one-stop value addition to professional services.',
      name: 'Our Vision',
      role: 'CEO, J A Gaikwad & Associates '
    },
    {
      image: 'assets/homepage/goal-icon-png-3.jpg',
      description: 'Besides our mission is to update the professional skills to cope up with ever-evolving business requirements to provide qualitative services to assist clients to manage tax-related dynamic situations in the rapid changing segment of business and also assisting incorrect decision-making processes. On the other hand, we ca account keep ourselves updated with day to day new reforms in the business accountant world and legal & regulatory policies to maintain strong relationships and long-lasting business relations with clients always ready to provide personalized, authenticated, and committed services through ought all the time easily accessible for strong business advice and qualitative services at cost-effective fees with highest ethics keeping professional standards.',
      name: 'Our Mission',
      role: 'Marketing Manager, J A Gaikwad & Associates'
    },
    {
      image: 'assets/homepage/Whyus.webp',
      description: 'In addition to the above enable our clients free to work in full force in the field of their core capacity by lifting over the burden of their non-functions and deploy our complete energy and resources thereon with efficiency, but still remaining cost-efficient & effective. Additionally, discipline and accuracy are our domain for shoulder-to-shoulder development of our skills and the business requirements of our clients. We are based in Pune and we can found on searching CA near me in Pune. We are recognized as best chartered accountant in India.',
      name: 'Why Choose Us',
      role: 'CTO, J A Gaikwad & Associates'
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
