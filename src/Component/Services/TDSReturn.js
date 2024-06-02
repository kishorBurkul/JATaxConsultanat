import React from 'react';

const TDSReturn = () => {

    const benefits = [
        {
            title: 'Individuals:',
            points: [
                'Individuals who are liable to make specific payments as per the Income Tax Act fall under the purview of TDS deductors. These payments include salaries, commissions, professional fees, rent, etc., exceeding specified thresholds.'
            ]
        },
        {
            title: 'Hindu Undivided Family (HUF):',
            points: [
                'Hindu Undivided Families, considered as a separate entity under the tax law, are eligible to deduct TDS on payments made in the course of carrying out their business or professional activities.'
            ]
        },
        {
            title: 'Limited Companies or Organisations: ',
            points: [
                'All limited companies, including private and public limited companies, come under the category of eligible TDS deductors. Such companies are required to deduct TDS on various payments like salaries, interest, rent, consultancy fees, etc.'
            ]
        },
        {
            title: 'Partnership Firms:',
            points: [
                'Partnership firms, which consist of two or more individuals or other entities as partners, are eligible to deduct TDS on specific transactions, such as interest, professional fees, rent or any other payments exceeding the specified threshold.'
            ]
        },
        {
            title: 'Body of Individuals:',
            points: [
                'A Body of Individuals formed for a common purpose, where the members contribute to achieve that objective, is eligible to deduct TDS if they meet the criteria set forth by the Income Tax Act.'
            ]
        }, {
            title: 'Association of Individuals:',
            points: [
                'An Association of Individuals is a group of individuals coming together for a shared objective. If such associations are liable to make payments attracting TDS, they must comply with the TDS deduction requirements.'
            ]
        }, {
            title: 'Local Authorities:',
            points: [
                'Local authorities, such as municipal corporations, panchayats and other governmental bodies at the local level, qualify as TDS deductors. They are required to deduct TDS on specific payments as prescribed by the tax laws.'
            ]
        }
        // , {
        //     title: 'Avoidance of Unnecessary Stress and Legal Battles:',
        //     points: [
        //         'Paying income tax on time eliminates the stress and anxiety associated with tax evasion or non-compliance.',
        //         'It helps individuals avoid lengthy legal battles, investigations and reputational damage that can arise from tax evasion allegations.'
        //     ]
        // }
        // Add more objects for each benefit point
    ];

    return (
        <div>
            {/* Top Section with Image and Text Overlay */}
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    className="w-full h-64 sm:h-96 object-cover"
                    src="assets/gstservices/tds.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">TDS Returns & Compliances</h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-start">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">

                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid  ">

                            <img
                                src="assets/gstservices/tdsretrun.webp"
                                alt="GST Services"
                                className="w-full object-cover rounded-lg shadow-md mb-4  border-solid border-violet-800 hover:border-black hover:border-solid  "
                            />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">TDS Returns & Compliances</h2>
                            <h2 className="text-2xl mb-4 font-semibold ml-1">What are the Eligibility Criteria for TDS Deduction in India?</h2>
                            <p className="text-md ml-2 mb-4">TDS is a mechanism prescribed by the Income Tax Act, 1961, where a certain percentage of payments are deducted at the time of making specified transactions. The following entities are eligible as deductors who can deduct TDS in India:</p>
                            {/* <h3 className="font-semibold mb-4">Listed below are the forms required to file GST Returns:</h3> */}
                            <ul className=" pl-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="mb-4">
                                        <h1 className='text-lg font-bold mb-4'><span className="h-6 w-6 bg-green-500 text-white rounded-full items-center justify-center mr-2 inline-block">&nbsp;&#10004;</span>{benefit.title}</h1>
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
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4">
                        <div className="bg-white rounded-lg shadow-md p-6 mt-1 border-black border-solid border-2 text-black ">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Overview of Tax Deducted at Source (TDS) and Compliance</h1>
                            <p className="text-md mb-4"><b>TDS or Tax Deducted at Source</b>, is the amount of tax deducted from money paid at the time of making specified payments such as rent, commission, professional fees, salary, interest and so on.</p>
                            <p className="text-md mb-4">TDS is deducted when a salary or life insurance policy is paid. The TDS sum is then submitted with the Income Tax department. TDS is a method of automatically paying a portion of the tax to the Income Tax department. As a result, TDS is regarded as a method of reducing tax avoidance.</p>
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Example of TDS</h1>

                            <p className="text-md mb-4">XYZ Pvt Ltd makes a payment for office rent of Rs 80,000 per month to the owner of the property. TDS is required to be deducted at 10%. XYZ Pvt Ltd must deduct TDS of Rs 8000 and pay the balance of Rs 72,000 to the owner of the property. Thus, the recipient of income, i.e., the owner of the property in the above case, receives the net amount of Rs 72,000 after deduction of tax at the source. He will add the gross amount, i.e., Rs 80,000, to his income and can take credit for the amount already deducted, i.e., Rs 8,000, by XYZ Pvt Ltd against his final tax liability.</p>
                            <img
                                src="assets/gstservices/tdstcs.jpg"
                                alt="GST Services"
                                className="w-full object-cover rounded-lg shadow-md mb-4 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                            />
                        </div>

                        {/* <div class="overflow-x-auto mt-10">
                            <table class="min-w-full border-collapse border border-gray-300">
                                <thead class="bg-gray-200">
                                    <tr>
                                        <th class="border border-gray-300 px-4 py-2">Type of Payment</th>
                                        <th class="border border-gray-300 px-4 py-2">TDS Rate</th>
                                        <th class="border border-gray-300 px-4 py-2">Threshold Limit (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Salary</td>
                                        <td class="border border-gray-300 px-4 py-2">Based on Income Tax Slab</td>
                                        <td class="border border-gray-300 px-4 py-2">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Interest (FD, RD, SA)</td>
                                        <td class="border border-gray-300 px-4 py-2">10%</td>
                                        <td class="border border-gray-300 px-4 py-2">40,000 (in a financial year)</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Interest (Govt. Sec., Corp. Bonds)</td>
                                        <td class="border border-gray-300 px-4 py-2">10%</td>
                                        <td class="border border-gray-300 px-4 py-2">5,000 (in a financial year)</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Rent</td>
                                        <td class="border border-gray-300 px-4 py-2">10%</td>
                                        <td class="border border-gray-300 px-4 py-2">50,000 (monthly)</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Professional Fees</td>
                                        <td class="border border-gray-300 px-4 py-2">10% (20% without PAN)</td>
                                        <td class="border border-gray-300 px-4 py-2">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Contractor Payments</td>
                                        <td class="border border-gray-300 px-4 py-2">1% (Individual/HUF)</td>
                                        <td class="border border-gray-300 px-4 py-2">N/A</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">2% (Other Types)</td>
                                        <td class="border border-gray-300 px-4 py-2">-</td>
                                        <td class="border border-gray-300 px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}

                    </div>

                </div>
            </div>
            {/* <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto border-solid border-black border-2 mb-4 shadow-lg">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">What are the Basic Documents Required for TDS Return Filing?</h2>
                    <div className="text-md font-bold text-gray-800 mb-4">
                        To ensure a seamless TDS return filing process, it's significant to gather the following key documents:
                    </div>
                    <ol className="list-decimal pl-8">
                        <li className=" mb-4">
                            <span className='font-semibold text-lg'>General Documents:</span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    TAN (Tax Collection and Deduction Account Number) and PAN of the taxpayer.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Business incorporation date.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Tenure for which TDS needs to be filed.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Details of the last TDS filing.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Form 16 and Salary Certificate from the employer.
                                </li>
                            </ul>
                        </li>

                        <li className=" semi-bold  mb-4">
                            <span className='font-semibold text-lg'> Interest Income: </span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Bank statements reflecting interest on savings accounts.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Interest statements for fixed deposits.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    TDS certificates issued by banks and other financial institutions.
                                </li>

                            </ul>
                        </li>

                        <li className=" mb-4">
                            <span className='font-semibold text-lg'>Capital Gains:</span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Investment particulars in Capital Gains Accounts Scheme.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Sale and Purchase Deeds for properties, along with stamp valuation.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Deed of Re-investment for Capital Gains exemption.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Records of property improvement expenses.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Details of expenses incurred during property transfer.
                                </li>

                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Stock statements for share trading (sale and purchase values).
                                </li>
                            </ul>
                        </li>

                        <li className="mb-2">
                            <span className='font-semibold text-lg'>Section 80 Investments:</span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Documents for Section 80C deductions: PPF, NSC, ELSS, ULIPS and LIC investments.
                                </li>

                            </ul>
                        </li>

                        <li className=" semi-bold  mb-4">
                            <span className='font-semibold text-lg'> House Property: </span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Information on co-ownership, if applicable.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Property address and details of property tax and rent.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Bank-issued interest certificate for housing loan..
                                </li>

                            </ul>
                        </li>


                        <li className=" mb-4">
                            <span className='font-semibold text-lg'>Tax Savings Investments:</span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    PPF passbook indicating contributions.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Tuition fees receipts for eligible deductions.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Housing loan repayment certificate.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Donation receipts (along with PAN of the donee).
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Fixed deposit receipts and senior citizen saving scheme deposit receipts.
                                </li>

                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Payment receipts for life and medical insurance.
                                </li>
                            </ul>
                        </li>



                        <li className=" mb-4">
                            <span className='font-semibold text-lg'>Miscellaneous:</span>
                            <ul className="list-disc pl-4">
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Proof of income from sources like horse races, lotteries, etc.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Accrued interest details on NSC during the year.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Dividend amount warrants and interest income certificates.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Bank Passbook or Statements reflecting interest income.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    PPF passbook showing accrued interest.
                                </li>

                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Interest certificates for bonds.
                                </li>
                                <li className="mb-2 flex items-center">
                                    <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                    Rent agreement for properties given on rent.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div> */}
        </div>
    );
};

export default TDSReturn;
