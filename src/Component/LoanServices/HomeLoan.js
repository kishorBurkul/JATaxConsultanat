import React from 'react';

const HomeLoan = () => {

    const benefits = [
        {
            title: 'Home Purchase Loan',
            points: ['It is a common type of loan for ready-to-occupy properties, pre-owned homes and under-construction homes. Most lenders provide from 75 to 90 percent of the value of the property  value(called loan to value or LTV).'

            ]
        },
        {
            title: '2. Composite Loan',
            points: [
                'This type of loan is for the purchase of a plot and construction in it. Here the loan disbursement begins at the time of plot purchase, and the balance is disbursed at pre-decided stages of construction.'
            ]
        },
        {
            title: 'Home Construction Loan',
            points: [
                'This loan funds you to renovate or repair a home you already own.']
        },
        {
            title: 'Home Extension Loan',
            points: [
                'Similar to the Home Improvement Loan, this funds the extension of your home to add living space.']
        },
        {
            title: 'Bridge Loan',
            points: [
                'If you want to purchase a new house by selling your old property, you may be short of funds due to a lag in time between the transactions. You can make up the gap with this loan. As the name suggests, the loan covers the lag between the purchase and sale.']
        },
    ];

    return (
        <div>
            {/* Top Section with Image and Text Overlay */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/loan-services/home-loan2.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Home Loan </h1>
                </div>
            </div>

            {/* Service Cards Section */}

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row">

                    {/* Left content */}
                    <div className="flex-1 flex items-center justify-center p-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Build your dream house with Home loans</h2>
                            <h2 className="text-2xl font-bold mb-4">What is a Home Loan?</h2>
                            <p className="mt-4">Buying a house is everybody’s dream. It’s an expensive dream and not possible for most people without using up a lifetime of savings. A home loan helps you realize your dream and keep your savings intact at the same time. What is more, it comes with many benefits.</p>
                            <p className="mt-4">You can get a home loan to build a new home or renovate an existing home. Low – interest rates, flexible repayment options, tax benefits, long tenures, top-up facilities, and prepayment options are some of the benefits of a home loan. A home loan is a long-term commitment unlike a Personal loan or other types of loans. Therefore, it is essential to exercise caution while applying for a home loan. Fincover helps you in getting the loan at the best rates.</p>
                            {/* <p className="mt-4">The home loan market is crowded with lenders, so it isn’t easy to pick the best loan option that meets your requirement from the clutter. At Fincover, you can compare, analyse, and choose the best home loan from India’s leading banks. You can find comprehensive information about home loans and apply online immediately from the comfort of your home.</p>
                         */}
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="assets/loan-services/home-loan.png" alt="Placeholder Image" className="max-w-full max-h-full" />
                    </div>

                </div>
                <div className="flex flex-wrap justify-center items-start">
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4 mb-8">
                       
                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid">
                        <img
                            src="assets/loan-services/home-loan1.jpg"
                            alt="GST Services"
                            className="w-full object-cover rounded-lg shadow-md mb-4  border-solid border-violet-800 hover:border-black hover:border-solid"
                        />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Home Loan Services </h2>
                            <h2 className="text-2xl mb-4 font-semibold"> Types of Home Loans</h2>
                            {/* <p className="text-md mb-4"><mark>In recent years, personal loans have become an increasingly popular financial solution for many individuals in India. Whether it’s to finance a wedding, home renovation, or even to pay off high-interest credit card debt, personal loans provide a flexible and convenient option for individuals looking for a quick source of funds. However, with so many options available in the market, it can be challenging to determine the best personal loans in India. In this article, we’ll explore the top personal loans available in India, highlighting their unique features and benefits.</mark></p>
                             */}
                            <h3 className="font-semibold mb-4">Banks provide home loans for different purposes. Before applying, analyse your requirements and apply the appropriate type of loan to avoid rejection.</h3>
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

                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid">

                            <ul className="pl-8">
                                <hr />
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4">Documents Required to get a Home Loan</h2>
                                <h4 className="text-md font-semibold text-gray-800 mb-4">
                                    Usually, home loans require a set of documents to be submitted to the lenders. Some of the standard documents required for processing a home loan are:</h4>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        1. A loan application form duly filled
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        2. ID Proof such as PAN card, Aadhaar card and Voter ID card
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        3. Age Proof like Driving License or Aadhaar card
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        4. Address Proof like bank passbook, Ration Card, Voter ID
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        5. Proof of Income for salaried borrowers like a bank statement, IT returns and payslip
                                    </span>
                                </li>

                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        6.  Proof of Income for self-employed borrowers like IT returns, the balance sheet of your company
                                    </span>
                                </li>

                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        7. Proof of business address
                                    </span>
                                </li>

                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&nbsp;&#10004;&nbsp;</span>
                                        8. Property related documents such as registered sale deed, NOC from the builder and complete building plan.
                                    </span>
                                </li>



                                <hr></hr>

                            </ul>
                        </div>
                        {/* <div className="overflow-x-auto mt-10 relative shadow-md sm:rounded-lg">
                            <h2 className='flex justify-center text-xl mb-4 font-semibold'>Home Loan Interest Rates of Top Public Sector Banks 2024s</h2>
                            <table className="min-w-full border-collapse border border-gray-300 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="bg-gray-200 uppercase">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Name of Bank</th>
                                        <th className="border border-gray-300 px-4 py-2">Up to Rs. 30 Lakh</th>
                                        <th className="border border-gray-300 px-4 py-2">Above Rs. 30 Lakh & Up to Rs. 75 Lakh</th>
                                        <th className="border border-gray-300 px-4 py-2">Above Rs. 75 Lakh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Bank of Baroda</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.65%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.65%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.90%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Punjab National Bank</td>
                                        <td className="border border-gray-300 px-4 py-2">8.45% – 10.25%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.15%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.15%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Punjab & Sind Bank</td>
                                        <td className="border border-gray-300 px-4 py-2">8.50% – 10.00%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.50% – 10.00%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.50% – 10.00%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">SBI</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.15%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.05%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 10.05%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Union Bank of India</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 10.75%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 10.90%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 10.90%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Bank of India</td>
                                        <td className="border border-gray-300 px-4 py-2">8.30% – 10.75%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.30% – 10.75%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.30% – 10.75%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">UCO Bank</td>
                                        <td className="border border-gray-300 px-4 py-2">8.45% – 10.30%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.45% – 10.30%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.45% – 10.30%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Bank of Maharashtra</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 11.15%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 11.15%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.35% – 11.15%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Canara Bank</td>
                                        <td className="border border-gray-300 px-4 py-2">8.50% – 11.25%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.45% – 11.25%</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% – 11.15%</td>
                                    </tr>
                                    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                                        <td className="border border-gray-300 px-4 py-2">Indian Overseas Bank</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% onwards</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% onwards</td>
                                        <td className="border border-gray-300 px-4 py-2">8.40% onwards</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}





                    </div>
                </div>
            </div>

            {/* <div className="overflow-x-auto mt-10 relative shadow-md sm:rounded-lg mx-auto lg:mx-250 lg:max-w-4xl xl:max-w-5xl">
                <h2 className='flex justify-center text-xl mb-4 font-semibold'>Home Loan Interest Rates of Top Private Sector Banks 2024</h2>
                <table className="min-w-full border-collapse border border-gray-300 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-200 uppercase">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name of Lender</th>
                            <th className="border border-gray-300 px-4 py-2">Up to Rs. 30 Lakh</th>
                            <th className="border border-gray-300 px-4 py-2">Above Rs. 30 Lakh & Up to Rs. 75 Lakh</th>
                            <th className="border border-gray-300 px-4 py-2">Above Rs. 75 Lakh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">HDFC Bank Ltd.</td>
                            <td className="border border-gray-300 px-4 py-2">8.50% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.50% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.50% onwards</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Kotak Mahindra Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.70% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.70% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.70% onwards</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">ICICI Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% onwards</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Axis Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% – 13.30%</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% – 13.30%</td>
                            <td className="border border-gray-300 px-4 py-2">8.75% – 9.65%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Karur Vysya Bank</td>
                            <td className="border border-gray-300 px-4 py-2">9.00% – 11.05%</td>
                            <td className="border border-gray-300 px-4 py-2">9.00% – 11.05%</td>
                            <td className="border border-gray-300 px-4 py-2">9.00% – 11.05%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">South Indian Bank</td>
                            <td className="border border-gray-300 px-4 py-2">9.84% – 11.24%</td>
                            <td className="border border-gray-300 px-4 py-2">9.84% – 11.04%</td>
                            <td className="border border-gray-300 px-4 py-2">9.84% – 11.69%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Karnataka Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 10.60%</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 10.60%</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 10.60%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Federal Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.80% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.80% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.80% onwards</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Dhanlaxmi Bank</td>
                            <td className="border border-gray-300 px-4 py-2">9.35% – 10.50%</td>
                            <td className="border border-gray-300 px-4 py-2">9.35% – 10.50%</td>
                            <td className="border border-gray-300 px-4 py-2">9.35% – 10.50%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Tamilnad Mercantile Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 9.95%</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 9.95%</td>
                            <td className="border border-gray-300 px-4 py-2">8.60% – 9.95%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">Bandhan Bank</td>
                            <td className="border border-gray-300 px-4 py-2">9.16% – 15.00%</td>
                            <td className="border border-gray-300 px-4 py-2">9.16% – 13.33%</td>
                            <td className="border border-gray-300 px-4 py-2">9.16% – 13.33%</td>
                        </tr>
                        <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-green-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                            <td className="border border-gray-300 px-4 py-2">RBL Bank</td>
                            <td className="border border-gray-300 px-4 py-2">8.90% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.90% onwards</td>
                            <td className="border border-gray-300 px-4 py-2">8.90% onwards</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}

        </div>
    );
}

export default HomeLoan;
