import React from 'react';

const Accounting = () => {

    const benefits = [
        {
            title: '	To gauge the income and expenditure of the business:',
            points: [
                'To ensure smoothness and transparency, every individual, firm, or corporation must know about the income generated and expenditure incurred. This helps them to plan and strategize their financial resources and exploit them accordingly.'
            ]
        },
        {
            title: '	Timely access to operational information:',
            points: [
                'Up to date records provide access to operational information at any time to management. Since business owners or managers are not directly associated with all transactions, accounting and bookkeeping will help them to keep an eye on all the activities from time to time.'
            ]
        },
        {
            title: '	Regular reconciliation rationalizes decisions:',
            points: [
                'Monthly or quarterly reconciliation of data helps the management to analyze the beneficial or detrimental aspects of a business. Accounting services come with the additional benefit of periodical reconciliation of data. Hence, future decisions can be rationalized after analyzing the profit and loss.'
            ]
        },
        {
            title: 'Attract investors with accurate financial statements:',
            points: [
                'Investing in any business is followed only after a complete analysis of its financial condition. While approaching investors, you need to make sure that your books of accounts are up-to-date and accurate. Inconsistency in financial statements may refrain investors from jumping into your business.'
            ]
        },
        {
            title: '	Ready to furnish data for timely compliance:',
            points: [
                'Accounting makes it easy to extract data and submit it on time for regular return filing, compliances, and scrutiny of any business.'
            ]
        },
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
                    src="assets/gstservices/Accounting-Bookkeeping.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Accounting & Book Keeping </h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-start">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-solid border-violet-800 hover:border-black hover:border-solid  ">
                            <img
                                src="assets/gstservices/accounting.jpg"
                                alt="GST Services"
                                className="w-full object-cover rounded-lg shadow-md mb-4  border-solid border-violet-800 hover:border-black hover:border-solid  "
                            />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Accounting </h2>
                            <h2 className="text-2xl mb-4 font-semibold">What Is Accounting  </h2>
                            <p className="text-md mb-4">Accounting is the backbone of any business organization. Proper accounting system with adequate internal
                                controls not only help to make timely compliances under various legislations but also help in assessment of
                                the periodic performance, avoidance of frauds and errors as well as implementation of budgeting & MIS system in the organization</p>
                            {/* <h3 className="font-semibold mb-4">Listed below are the forms required to file GST Returns:</h3> */}

                            <h6 className="text-xl mb-4 font-semibold">Benefits of Accounting and Bookkeeping </h6>
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


                                <hr />
                                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Documents required for Accounting and Bookkeeping Services</h2>
                                <li className="mb-4">
                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        - Company / Business Incorporation Documents.
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>

                                        - Bank statement of a financial year or monthly statement (with remarks).
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Purchase-Sales invoices, if any.
                                    </span>
                                </li>


                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Expense bills, if any
                                    </span>

                                </li>



                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Any receivable and payable detail
                                    </span>

                                </li>



                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Any other Government registration taken
                                    </span>

                                </li>


                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        - Cash Expenses
                                    </span>

                                </li>
                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Bank Statement of partner/ members with remarks if used for business transactions
                                    </span>

                                </li>
                                <li className="mb-2 flex items-center">

                                    <span className='text-md flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        -Expenses made for company or LLP registration by promoters
                                    </span>

                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right side service list */}

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">

                        <div className="mx-auto w-2/3 bg-grey-600 mb-4">
                            <div className="bg-grey-900 rounded-lg shadow-md p-6 bg-inherit">
                                <p className="text-lg mb-4 text-black">
                                    " We use accounting assurance services to help our clients grow and reach their aspirations.
                                    This is more than just preparing financial statements and tax returns.
                                    We are constantly developing new services while looking for new efficiencies in core disciplines."
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 mt-1 border-black border-solid border-2 text-black ">

                            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">What Is Bookkeeping</h2>

                            <ul className="pl-8">
                                <li className="mb-4">
                                    {/* <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Reduced cost and time:
                                    </span> */}
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            Bookkeeping is a separate process from accounting, which occurs within the broader scope of accounting. The accounts are prepared from the information provided by bookkeeping. A strong relationship between these two functions is necessary to take the business to the next level.
                                        </li>
                                    </ul>
                                </li>

                                <li className="mb-4">
                                    {/* <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Data integrity:
                                    </span> */}
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            Bookkeeping is a segment of the whole accounting system. Bookkeeping is the basis for accounting as it contains the proper records of all financial transactions whereas, accounting involves organising, summarising, classification and reporting financial transactions.
                                        </li>
                                    </ul>
                                </li>

                                <li className="mb-4">
                                    {/* <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Authentication:
                                    </span> */}
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            If the bookkeeping is correct, the accounting of a company will be proper. Thus, accounting is broader than bookkeeping and accounting of a company relies on a proper and accurate bookkeeping system.
                                        </li>
                                    </ul>
                                </li>

                                {/* <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Authenticity of documents:
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            Digitally signed documents give confidence to the receiver to be assured of the signer’s authenticity. They can take action on the basis of such documents without getting worried about the documents being forged.
                                        </li>
                                    </ul>
                                </li> */}

                                <hr />
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4" >Objectives of Bookkeeping</h2>
                                <p className="text-md mb-4">The objectives of bookkeeping are as follows: </p>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        To record the transactions:
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            The first objective of bookkeeping is to maintain accurate and complete records of all financial transactions in an orderly manner. It systematically records all transactions and ensures that all financial transactions recorded are reflected in the books of accounts. These transactions can be used for future references.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        To show the correct position:
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            Bookkeeping helps to ascertain the overall impact of all financial transactions of a company. It reflects the financial effect of all business transactions that have taken place in a financial year. It provides financial information to the shareholders and management of the company, thus helping them formulate future policies and plans.
                                        </li>
                                    </ul>
                                </li>




                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        To detect errors and frauds:
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            Bookkeeping helps to identify the transactions and summarise them chronologically in a systematic manner. It ensures that the books of accounts are correct, up-to-date, chronological and complete. Thus, it helps to detect any errors or frauds in the business.
                                        </li>
                                    </ul>
                                </li>


                                <hr />
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Types of Bookkeeping System</h2>
                                <p className="text-md mb-4">There are two types of bookkeeping systems. The business entities can choose any one of the types of bookkeeping system. Some entities use a combination of both types. The following are the two types of bookkeeping system: </p>

                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Single-entry system of bookkeeping
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            The single-entry system of bookkeeping is a basic system to record daily receipts or generate a weekly or daily report of a company’s cash flow. In the single-entry system of bookkeeping, the bookkeeper records one entry for each financial transaction or activity.
                                        </li>

                                        <li className="mb-2 flex items-center">
                                            The single-entry system of bookkeeping involves recording only one side of the transaction or activity. It maintains only the purchases, cash receipts and payments and sales. It is used mainly by small businesses, which have minimal transactions.
                                        </li>


                                    </ul>
                                </li>



                                <li className="mb-4">
                                    <span className='font-semibold text-lg flex items-center'>
                                        <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                        Double-entry system of bookkeeping
                                    </span>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-2 flex items-center">
                                            The double-entry system of bookkeeping records a double entry for each financial activity or transaction. The double entry system provides balances and checks as it records the corresponding credit entry for every debit entry. It is not cash-based, and the transactions are entered when revenue is earned, or debt is incurred.
                                        </li>

                                        <li className="mb-2 flex items-center">
                                            The double-entry system of bookkeeping is based on the duality concept, i.e. every financial transaction affects two accounts. It means that every debit entry to an account has a corresponding credit entry in another account and vice versa. This system is universally adopted and is considered accurate for recording business/financial transactions.
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Accounting;
