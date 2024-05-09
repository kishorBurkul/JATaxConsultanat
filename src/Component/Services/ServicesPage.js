import React from 'react';

const ServicesPage = () => {
    return (
        <div>
            {/* Top Section with Image and Text Overlay */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-96 object-cover"
                    src="assets/gstservices/GST2.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">GST Returns & Compliances</h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-center">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">
                      
                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:text-lg hover:bg-gray-100 hover:bg-opacity-50">
                        <img
                            src="assets/gstservices/GST-Return.jpg"
                            alt="GST Services"
                            className="w-full object-cover rounded-lg shadow-md mb-4 border-2 border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                        />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">GST Returns & Compliances</h2>
                            <h1 className="text-2xl mb-4 font-semibold">GST Returns Compliance</h1>
                            <p className="text-md mb-4"><mark>All registered businesses are required to file returns on a monthly/quarterly/yearly basis. The frequency of the returns depends mainly on the type of business activity. The GST returns are required to be filed online on the Returns section of the GST website.</mark></p>
                            <h3 className=" font-semibold mb-4">Listed below are the forms required to file GST Returns:</h3>
                            <ul className="list-disc pl-4">
                                <li className="mb-2"><b>GSTR-1 is a return where details of sales are filed with the government. No tax has to be paid after filing this return.</b></li>
                                <li className="mb-2"><b>GSTR-3B is a simplified return to declare summary GST liabilities for a tax period. It needs to be self-declared monthly for furnishing summarized details of all outward supplies made, input tax credit claimed, tax liability ascertained, and taxes paid. It is filed by all taxpayers registered under GST.</b></li>
                                <li className="mb-2"><b>GSTR-9 return is filed annually by taxpayers under GST, having turnover of over Rs. 2 Crores in the financial year, containing details of outward sales supplies made, inward purchase supplies received during the previous year under various tax heads, and details of taxes payable and paid. It is a consolidation of all the monthly or quarterly returns (GSTR-1, GSTR-2A, GSTR-3B) filed during that year.</b></li>
                                {/* Add more services here */}
                            </ul>
                        </div>
                    </div>

                    {/* Right side service list */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4">
                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:text-lg hover:bg-gray-100 hover:bg-opacity-50">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Compliance</h1>
                            <p className="text-lg mb-4"> The Goods and Services Tax (GST) is a single and destination based tax levied on goods & services consumed in an economy. GST as envisaged by the Central Government is a single uniform indirect tax which will treat India as one nation one market.</p>
                            <p className="text-lg mb-4">With start of its inception from 1st July 2017, compliance with GST Law has always been challenging issue for business organizations. GST requires greater integration of tax domain knowledge, expertise and technology, as compliance has become vast, paperless and data-intensive, with sector-specific nuances.</p>
                               The digitalization has also created a new paradigm in tax administration and compliances.

                            <p className="text-lg mb-4">The GST Council has laid down rules for the way we have to maintain records, how we have to raise invoices and how we have to report our purchases and sales, and ultimately, the way we have to pay our taxes and file returns.</p>
                            <p className="text-lg mb-4"> In simple terms, adherence to these rules and regulations is what constitutes GST compliance. Not being compliant, can be a heavy cost for a business. The legislation also imposes higher corrective implications in case of errors resulting in short payment of taxes or incorrect availment of credit.

                               </p>
                               <p className="text-lg mb-4"> The GST compliance rating is a score given by the government to a business so that other businesses can see how compliant they are with the tax department. The new GST regime has introduced compliance guidance that mandate businesses to remain compliant. All businesses are required to adopt the GST compliance rules set by the government. These compliance rules can be clubbed into three categories:.</p>
                            <img
                                src="assets/gstservices/compliance.webp"
                                alt="GST Services"
                                className="w-full object-cover rounded-lg shadow-md mb-4 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
