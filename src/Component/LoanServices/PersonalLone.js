import React from 'react';

const PersonalLoan = () => {

    const benefits = [
        {
            title: '1. HDFC Bank Personal Loan',
            points: [
                'HDFC Bank offers one of the most popular personal loans in India, with competitive interest rates and flexible repayment options. The loan can be taken for a variety of purposes, including home renovation, medical expenses, travel, and more. Customers can borrow up to Rs. 40 lakhs with a repayment tenure of up to 60 months. Additionally, HDFC Bank provides instant loan approval for existing customers and offers a special interest rate for women applicants.'
            ]
        },
        {
            title: '2. ICICI Bank Personal Loan',
            points: [
                'ICICI Bank is another leading player in the personal loan market in India, offering personal loans at attractive interest rates and easy documentation. Customers can borrow up to Rs. 50 lakhs with a repayment tenure of up to 60 months. ICICI Bank also provides a pre-approved personal loan facility for existing customers, allowing them to avail of funds instantly without any documentation.'
            ]
        },
        {
            title: '3. Bajaj Finserv Personal Loan',
            points: [
                'Bajaj Finserv is a non-banking financial company (NBFC) that provides personal loans at competitive interest rates, flexible repayment options, and minimal documentation. Customers can borrow up to Rs. 40 lakhs with a repayment tenure of up to 84 months. Bajaj Finserv also offers a unique feature called the Flexi Personal Loan facility, which allows customers to withdraw funds as per their requirement and only pay interest on the utilized amount.'
            ]
        },
        {
            title: '4. SBI Personal Loan',
            points: [
                'State Bank of India is the largest public sector bank in India and offers personal loans at attractive interest rates and flexible repayment options. Customers can borrow up to Rs. 20 lakhs with a repayment tenure of up to 72 months. SBI also provides a special interest rate for government employees and pensioners.'
            ]
        },
        {
            title: '5. Axis Bank Personal Loan',
            points: [
                'Axis Bank is a leading private sector bank in India and offers personal loans at competitive interest rates and minimal documentation. Customers can borrow up to Rs. 40 lakhs with repayment tenure from 12- 60 months and interest rates beginning from 10.49%. Axis Bank also provides a pre-approved personal loan facility for existing customers, allowing them to avail of funds instantly without any documentation.'
            ]
        }, {
            title: '6. Citibank Personal Loan',
            points: [
                'Citibank is a multinational bank that offers personal loans at competitive interest rates and flexible repayment options. Customers can borrow up to Rs. 30 lakhs with repayment tenure from 12- 60 months. Selective customers can get Citi Quick Cash which is an exclusive instalment facility offered. It can be easily availed through Citibank Mobile App or Citibank online.'
            ],
        },
        {
            title: '7. Tata Capital Personal Loan',
            points: [
                'Tata Capital is a financial services company that provides personal loans at competitive interest rates along with easy documentation. Customers can borrow up to Rs. 35 lakhs with repayment tenure of up to 72 months at interest rates starting from 10.99%.'

            ],
        }
    ];

    return (
        <div>
            {/* Top Section with Image and Text Overlay */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/loan-services/All-loan-services.png"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Personal Loan  </h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-start">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4 mb-8">
                        <img
                            src="assets/loan-services/personal-loan.jpg"
                            alt="GST Services"
                            className="w-full object-cover rounded-lg shadow-md mb-4 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                        />
                        <div className="bg-white rounded-lg shadow-md p-6 hover:border-black hover:border-solid hover:border-2 hover:text-white hover:bg-black hover:bg-opacity-50">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Personal Loan Services </h2>
                            <h2 className="text-2xl mb-4 font-semibold"> Top Personal Loan Finance Companies in India</h2>
                            <p className="text-md mb-4"><mark>In recent years, personal loans have become an increasingly popular financial solution for many individuals in India. Whether it’s to finance a wedding, home renovation, or even to pay off high-interest credit card debt, personal loans provide a flexible and convenient option for individuals looking for a quick source of funds. However, with so many options available in the market, it can be challenging to determine the best personal loans in India. In this article, we’ll explore the top personal loans available in India, highlighting their unique features and benefits.</mark></p>
                            {/* <h3 className="font-semibold mb-4">Listed below are the forms required to file GST Returns:</h3> */}
                            <ul className="pl-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="mb-4">
                                        <h1 className='text-lg font-bold mb-4'><span className="h-6 w-6 bg-green-500 text-white rounded-full  items-center justify-center mr-2 inline-block">&nbsp;&#8377;</span>
                                            {benefit.title}</h1>
                                        <ul className="pl-4">
                                            {benefit.points.map((point, subIndex) => (
                                                <li key={subIndex} className='mb-2'>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side service list */}

                    <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4 mb-8">

                        <div className="bg-white rounded-lg shadow-md p-6 mt-10 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:bg-grey hover:bg-opacity-50">

                            <ul className="pl-8">
                                <hr />
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4">Documents Required For Personal Loan</h2>
                                <h4 className="text-xls font-bold text-gray-800 mb-4">For Salaried</h4>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        1. Proof of Identity – Passport/Driving License/Voter ID/ PANCard
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        2. Residence Proof – Passport/License Agreement
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        3. Last 3 months bank statement where salary was credited
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        4. Salary slips for 3 months
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        5. 2 Passport size photographs
                                    </span>
                                </li>
                                <hr></hr>
                                <h5 className="text-xl font-bold text-gray-800 mb-4">For Self-employed</h5>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        1. KYC Documents – Proof of Identity, Address Proof, DOB Proof
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        2. Proof of Residence
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        3. Income Proof
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        4. Last 6 months bank statement
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        5. Office Address Proof
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        6. Proof of Residence of Ownership
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        7. Proof of business continuity
                                    </span>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        NOTE: All the documents required needs to be visually clear.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="overflow-x-auto mt-10 relative  shadow-md sm:rounded-lg">
                            <h2 className='flex justify-center text-xl mb-4 font-semibold'>Bank Interest rates for Personal Loans</h2>
                            <table class="min-w-full border-collapse border border-gray-300 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="bg-gray-200 uppercase">
                                    <tr>
                                        <th class="border border-gray-300 px-4 py-2 ">Institution</th>
                                        <th class="border border-gray-300 px-4 py-2">Interest rates</th>
                                        <th class="border border-gray-300 px-4 py-2">Loan amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">HDFC</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">From 10.5%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 40 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Axis Bank</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">From 10.49%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 40 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">ICICI bank</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">10.75%-19%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 40 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Bank of Baroda</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">10.75% – 18.5%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 5 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">SBI</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">From 11%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 30 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">IndusInd</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">From 10.49%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 50 Lakhs</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Yes Bank</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">From 10.99%</td>
                                        <td class=" border border-gray-300 px-4 py-2 text-black font-semibold">Upto 40 Lakhs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalLoan;
