import React from 'react';
const ServicesSection = () => {
    return (
        <section className="bg-white py-12 -mt-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    <span className="relative">
                        Our Services
                        <span className="absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-300"></span>
                    </span>
                </h2>

                <div className="flex flex-wrap mx-4 ">
                    {/* Service 1 */}

                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src="assets/homepage/taxation-service-jpg-500x500.webp" alt="Service 2" className="w-full mb-4" style={{ height: "180px" }} />
                            <h3 className="text-xl font-semibold mb-2">GST | Tax & Other Services</h3>
                            <ul className="text-gray-700 text-md">
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>GST Returns & Compliances	</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Income Tax Returns & Compliances</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>TDS Returns & Compliances</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Digital Signatures ( DSC)</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Accounting</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Project Report</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{ innerWidth: "50px" }}>
                                </lord-icon>Food Insurance</li>
                            </ul>
                        </div>
                    </div>



                    {/* Service 2 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src="assets/homepage/loan-services-500x500.webp" alt="Service 2" className="w-full h-full mb-4" />
                            <h3 className="text-xl font-semibold mb-2">All Loan Services</h3>
                            <ul className="text-gray-700 text-md">
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon> Personal Loan</li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Home Loan</li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Business Loan</li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Mortgage </li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Cash Credit Overdraft Loan</li>
                                <li className="flex items-center"> <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Vehicle Loan</li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>Balance Transfer & Top Up</li>
                                <li className="flex items-center">  <lord-icon
                                    src="https://cdn.lordicon.com/rvmukzut.json"
                                    trigger="hover"
                                    state="hover-pinch"
                                    style={{}}>
                                </lord-icon>All Type Loan </li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src="assets/homepage/service-detail.jpg" alt="Service 2" className="w-full mb-4" style={{ height: "180px" }} />
                            <h3 className="text-xl font-semibold mb-2">Registration Services</h3>
                            <ul className="text-gray-700 text-md list-none">
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> GST Registration
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> Company Registration
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> Shop Act Registration
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> Udyam Registration
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> PAN Registration
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> Trademark Registrations
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon> Professional Tax Registrations & Returns
                                </li>
                                <li className="flex items-center">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/rvmukzut.json"
                                        trigger="hover"
                                        state="hover-pinch"
                                        style={{}}>
                                    </lord-icon>Employees Provident Fund Registrations & Returns
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* Service 4 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src="assets/homepage/home-Insurance.png" alt="Service 2" className="w-full h-full mb-4" style={{ height: "180px" }} />
                            <h3 className="text-xl font-semibold mb-2">Insurance Services</h3>
                            <ul className="text-gray-700 text-md">
                                <li>
                                    Health Insurance
                                    <ul className="list-disc pl-6">
                                        <li className="flex items-center">  <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>Star Health</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>HDFC Ergo</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>NIVA BUPA</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>TATA Health</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>NIVA BUPA</li>

                                    </ul>
                                </li>
                                <li>
                                    Life Insurance
                                    <ul className="list-disc pl-6">
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>LIC</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>MAX Life</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>Bajaj Allianz Life</li>
                                        <li className="flex items-center"> <lord-icon
                                            src="https://cdn.lordicon.com/rvmukzut.json"
                                            trigger="hover"
                                            state="hover-pinch"
                                            style={{}}>
                                        </lord-icon>All Company Life Insurance</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>



    );
};

export default ServicesSection;