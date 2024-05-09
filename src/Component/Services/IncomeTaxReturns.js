import React from 'react';

const IncomeTaxReturns = () => {

    const benefits = [
        {
            title: 'Legal Compliance and Avoidance of Penalties:',
            points: [
                'Paying income tax ensures compliance with the law, as it is mandatory for eligible individuals and entities.',
                'Non-compliance can result in penalties, fines and legal consequences, which can be avoided by fulfilling tax obligations on time.'
            ]
        },
        {
            title: 'Avoidance of Legal Issues:',
            points: [
                'Paying income tax honestly provides peace of mind, eliminating the fear of legal repercussions and potential tax audits.',
                'Individuals who fulfil their tax obligations can focus on their personal and professional endeavours without the worry of legal issues arising in the future.'
            ]
        },
        {
            title: 'Nation Building:',
            points: [
                'Income tax is a vital source of revenue for the government, enabling it to fund infrastructure development, social welfare programs, education, healthcare and defense.',
                'By paying income tax, individuals contribute to the overall progress and growth of the nation, helping to build a better future for themselves and fellow citizens.'
            ]
        },
        {
            title: 'Building a Strong Economy:',
            points: [
                'Income tax revenue fuels economic growth by enabling the government to invest in infrastructure, public services and industry development.',
                'A strong economy benefits taxpayers through increased job opportunities, improved business environment and overall prosperity.'
            ]
        },
        {
            title: 'Access to Financial Services:',
            points: [
                'Paying income tax regularly enhances an individuals financial credibility and creditworthiness.',
                'It improves the chances of obtaining loans, mortgages and financial services from banks and financial institutions, ensuring access to capital for personal and professional goals.'
            ]
        }, {
            title: 'Participating in Democratic Governance:',
            points: [
                'Paying income tax is a fundamental aspect of democratic governance, as it enables citizens to contribute to the decision-making process and hold the government accountable.',
                'By fulfilling their tax obligations, individuals actively participate in shaping the nations policies and priorities.'
            ]
        }, {
            title: 'Access to Government Services and Benefits:',
            points: [
                'Income tax payment is often a prerequisite for availing various government services and benefits, such as obtaining loans, subsidies, grants and government contracts.',
                'Individuals who pay income tax have better access to government-funded facilities and schemes, improving their overall quality of life.'
            ]
        }, {
            title: 'Avoidance of Unnecessary Stress and Legal Battles:',
            points: [
                'Paying income tax on time eliminates the stress and anxiety associated with tax evasion or non-compliance.',
                'It helps individuals avoid lengthy legal battles, investigations and reputational damage that can arise from tax evasion allegations.'
            ]
        }
        // Add more objects for each benefit point
    ];

    return (
        <div>
            {/* Top Section with Image and Text Overlay */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/gstservices/GST2.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Income Tax Returns & Compliances</h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-start">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4">
                         <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:text-lg hover:bg-gray-100 hover:bg-opacity-50">
                         <img
                            src="assets/gstservices/Income-Tax-Returns.jpg"
                            alt="GST Services"
                            className="w-full object-cover rounded-lg shadow-md mb-4  border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                        />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Income Tax Returns & Compliances</h2>
                            <h1 className="text-2xl mb-4 font-semibold">Income Tax Returns</h1>
                            <p className="text-md mb-4"><mark>Income tax is a type of tax that the central government charges on the income earned during a financial year by individuals and businesses. Taxes are sources of revenue for the government. The government utilises this revenue for developing infrastructure, providing healthcare, education, subsidies to the farmer/agriculture sector and other government welfare schemes.</mark></p>
                            <h3 className="font-semibold mb-4">Listed below are the forms required to file GST Returns:</h3>
                            <ul className="list-disc pl-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="mb-4">
                                        <h3 className='font-bold mb-4'>{benefit.title}</h3>
                                        <ul className="pl-4">
                                            {benefit.points.map((point, subIndex) => (
                                                <li key={subIndex} className='mb-2'>
                                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full items-center justify-center mr-2 inline-block">&nbsp;&#10004;</span>{point}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side service list */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mt-0 sm:mt-0 md:mt-0 lg:mt-96">
                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:text-lg hover:bg-gray-100 hover:bg-opacity-50">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Overview of Income Tax Compliances</h1>
                            <p className="text-lg mb-4">In today's global business landscape, it has become essential to have a comprehensive understanding of tax and regulatory policies in order to maximise growth and capitalise on opportunities, especially with the increasing investment and transactions by multinational companies in India. Leading tax consultants and advisors in the country specialise in assisting businesses with income tax services and navigating the complexities of tax and regulatory procedures. As the world undergoes significant changes, India is also embracing a new approach to broaden its tax base and enforce stringent compliance measures using digital platforms</p>
                            <p className="text-lg mb-4">Before formulating investment strategies, it is essential for companies to have a thorough understanding of the tax regulatory challenges they may face as they expand their business geographically or undergo structural changes. Companies are actively brainstorming to identify the most optimal tax structures and unlock potential opportunities. In pursuit of their organisational goals, companies often choose to outsource critical aspects of their tax strategy to ensure alignment between investments and tax management.</p>
                            <img
                                src="assets/loan-services/income-tax-in-India.jpg"
                                alt="GST Services"
                                className="w-full object-cover rounded-lg shadow-md mb-4 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto mt-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Documents Required for Income Tax Return Filing in India</h2>
                    <div className="text-md font-bold text-gray-800 mb-4">
                        The necessary documents needed to file Income Tax return in India include the following:
                    </div>
                    <ol className="list-decimal pl-8">
                        <li className="mb-4">
                            Passbook for accounts held with:
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Public Provident Fund (PPF)
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Registered Retirement Savings Plans (RRSP)
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Savings accounts at banks and post offices
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">Pay slips</li>
                        <li className="mb-2">Aadhaar Card</li>
                        <li className="mb-2">PAN Card</li>
                        <li className="mb-2">
                            Form-16: TDS Certificate provided by the employer, describing the salary received and TDS deducted, if applicable.
                        </li>
                        <li className="mb-2">
                            Form-16A: For reporting payments other than salaries, such as interest from permanent deposits, recurring deposits, etc., that exceed the TDS limits under current tax legislation.
                        </li>
                        <li className="mb-2">
                            Form-16B: Provided by the buyer of real estate, which provides information on the amount of tax withheld from the proceeds of the sale.
                        </li>
                        <li className="mb-2">
                            Form-16C: From the landlord, detailing any tax withholdings from rent. Form 26AS: Yearly tax statement containing information on taxes paid using your PAN.
                        </li>
                        <li className="mb-2">
                            Form 26AS: Yearly tax statement containing information on taxes paid using your PAN.
                        </li>
                        <li className="mb-2">
                            TDS certificates for:
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    TDS deducted by your employer.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    TDS deducted by banks.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    TDS deducted by any other organisations from payments made to you.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            Proof of:
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Advance taxes submitted by you.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Self-assessment taxes paid by you.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2"> Documents for Tax Saving Investments</li>
                        <li className="mb-4">
                            Evidence of Deduction Purpose for Articles 80C to 80U, such as:
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Health insurance premium for self and family.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Interest on education loan.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">Bank Statement for a Mortgage Loan.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default IncomeTaxReturns;
