import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FormComponent from '../Registration/FormComponent';


const OurBranches = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100" style={{ backgroundImage: "url('assets/Registration/backgound-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
                <span className="relative">
                    GET IN TOUCH
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-300"></span>
                </span>
            </h2>
            <div className="flex flex-wrap">
                {/* Branches Section */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                    <div className="flex flex-wrap justify-center md:justify-center">
                        {/* Branch 1 */}
                        <div className="w-full md:w-5/6 px-4 mb-4  ">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                                <h3 className="text-xl font-semibold mb-2"><span>Katraj</span> , Pune</h3>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
                                    <p><strong>Address:</strong> Sr. No. 34/8, Suman Plaza, A Wing, 3rd Floor, Flat No.10 Trimurti Chowk, Near Bharati Vidyapith, Dr. P.K.Nagar, Dhankawadi, Pune Maharashtra - 411046</p>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                                    <p style={{ wordWrap: 'break-word' }}><strong>Email:</strong> jagaikwadandassociates@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />
                                    <p><strong>Mobile:</strong> 8624058644 / 8668511898</p>
                                </div>
                            </div>
                        </div>

                        {/* Branch 2 */}
                        <div className="w-full md:w-5/6 px-4 mb-4">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                                <h3 className="text-xl font-semibold mb-2"><span>Rahuri</span> , Ahmednagar</h3>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
                                    <p><strong>Address:</strong> At Post -Baragaon Nandur, Near Chhatrapati Shivaji Chowk,Tal- Rahuri, Dist - Ahmednagar -  413705.</p>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                                    <p><strong>Email:</strong> kawareabhijeet22@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />
                                    <p><strong>Mobile:</strong> 8624058644 / 9730574023</p>
                                </div>
                            </div>
                        </div>
                        {/* Branch 3 */}
                        <div className="w-full md:w-5/6 px-4 ">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-600 hover:text-white transition duration-300">
                                <h3 className="text-xl font-semibold mb-2"><span>Nangaon</span> , Daund </h3>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
                                    <p><strong>Address:</strong> At post - Nangaon, Ganesh Road, Near Jambhulkar Farm House, Tal- Daund, Dist-Pune - 412203</p>
                                </div>
                                <div className="mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                                    <p><strong>Email:</strong> caanitagaikwad06@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />
                                    <p><strong>Mobile:</strong> 8624058644 / 9579955439</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="w-full md:w-1/2 w-30 px-4 mb-8">
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <FormComponent/>
                      {/* <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contact Us</h3>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                    </div> */}
{/* <ContactForm /> */}
                </div>
                 
            </div>
           
        </div>
        </div>
    );
};

export default OurBranches;
