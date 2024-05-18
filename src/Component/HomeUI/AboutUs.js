import React from 'react'
import AboutVision from './AboutVision'

const AboutUs = () => {
    return (
        <div>

            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96  object-cover"
                    src="assets/homepage/aboutus.png"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">About Us</h1>
                </div>
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
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">About J.A Gaikwad & Associates, In Pune</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            J.A. Gaikwad and Associates has established itself as a comprehensive accounting, tax, and audit firm offering a wide array of services to clients across Maharashtra.
                            Founded in 2017 by Jayram Ashok Gaikwad, the firm is led by a team of chartered accountants,
                            tax consultants, and other professionals in India, equipped with extensive knowledge and professional experience.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify ">
                            Our services encompass various areas, including accounting, auditing, direct taxation, Goods & Services Tax (GST), company law consultancy, NRI taxation, startup services, and bookkeeping & outsourcing services.
                       </p>
                      <p className="text-lg text-gray-700 leading-relaxed text-justify mt-1">
                      The organization is a congregation of professionally qualified and experienced persons who are committed to add value continuously and optimize the benefits accruing to clients. The firm has a strong client base ranging in manufacturing, service and banking sector, with the focus on Start Ups, NGO’s, NRI and SME clients as well as new aged services viz. valuation and Ind-AS. 
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed text-justify mt-1">
                      The firm is registered and empanelled with various Nationalised banks and Financial Institutions for various banking related assignments as well.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed text-justify mt-1">
                      The varied services provided by our firm ranges from traditional compliance oriented services viz. audit and taxation to management advisory services (for Start Ups, NRI’s, NGO’s and Others) and Ind-AS as well as Valuation Services.
                       </p>
                      <p className="text-lg text-gray-700 leading-relaxed text-justify mt-1">
                      Important services rendered by our firm include Auditing (Statutory as well as Internal & Management Audits), Taxation compliance and Advisory Services (Income Tax, Wealth Tax, Profession Tax and GST), Business Support services (Accounting, Fund raising, Company & LLP formations), Personal Financial Planning & advisory services, Business Process Outsourcing (Accounting, Payroll, Tax Management) Banking Assignments (Statutory, Internal, Revenue Audit, Stock & Credit Audit), Start Ups related Services, NGO Management and consultancy services, Ind-AS related services, Business Valuation Services and even corporate trainings.
                        </p>
                    </div>
                </div></section>
                <AboutVision/>
        </div>
    )
}

export default AboutUs