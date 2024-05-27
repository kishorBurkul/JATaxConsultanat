import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutHome = () => {
  return (
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

  )
}

export default AboutHome