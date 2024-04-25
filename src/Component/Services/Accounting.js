import React from 'react';

const Accounting = () => {

    const benefits = [
        {
            title: 'Legal Warning:',
            points: [
                'You can use only the valid Digital Signatures issued to you. It is illegal to use Digital Signatures of anybody other than the one to whom it is issued.'
            ]
        },
        {
            title: 'Certification Agencies:',
            points: [
                'Certification Agencies are appointed by the office of the Controller of Certification Agencies (CCA) under the provisions of IT Act, 2000. There are a total of eight Certification Agencies authorised by the CCA to issue Digital Signature Certificates (DSCs). The details of these Certification Agencies are available on the portal of the Ministry Certifying Authorities.'
            ]
        },
        {
            title: 'Class of DSCs:',
            points: [
                'The Ministry of Corporate Affairs has stipulated a Class-II or above category signing certificate for e-Filings under MCA21. A person who already has the specified DSC for any other application can use the same for filings under MCA21 and is not required to obtain a fresh DSC.'
            ]
        },
        {
            title: 'Validity of Digital Signatures:',
            points: [
                'The DSCs are typically issued with one year validity and two year validity. These are renewable on expiry of the period of initial issue.'
            ]
        },
        {
            title: 'Costing/ Pricing of Digital Signatures:',
            points: [
                'It includes the cost of medium (a UBS token which is a one time cost), the cost of issuance of DSC and the renewal cost after the period of validity. The company representatives and professionals required to obtain DSCs are free to procure the same from any one of the approved Certification Agencies as per the MCA portal. The issuance costs in respect of each Agency vary and are market driven.'
            ]
        }, {
            title: 'Obtain Digital Signature Certificate:',
            points: [
                'Digital Signature Certificate (DSC) Applicants can directly approach Certifying Authorities (CAs) with original supporting documents, and self-attested copies will be sufficient in this case.',
                ' DSCs can also be obtained, wherever offered by CA, using Aadhar eKYC based authentication, and supporting documents are not required in this case',
                'A letter/certificate issued by a Bank containing the DSC applicant’s information as retained in the Bank database can be accepted. Such letter/certificate should be certified by the Bank Manager'
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
                    src="assets/gstservices/GST2.jpg"
                    alt="Services Header"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-center">Digital Signature & Accounting </h1>
                </div>
            </div>

            {/* Service Cards Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center items-start">
                    {/* Left side image with description */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <img
                            src="assets/gstservices/Avail-Digital-Signature-Certificate-DSC.jpg"
                            alt="GST Services"
                            className="w-full object-cover rounded-lg shadow-md mb-4 hover:border-black hover:border-solid hover:border-2 hover:bg-black hover:bg-opacity-50"
                        />
                        <div className="bg-white rounded-lg shadow-md p-6 hover:border-black hover:border-solid hover:border-2 hover:text-white hover:bg-black hover:bg-opacity-50">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Digital Signature </h2>
                            <h2 className="text-2xl mb-4 font-semibold">About Digital Signature Certificate (DSC)</h2>
                            <p className="text-md mb-4"><mark>The Information Technology Act, 2000 has provisions for use of Digital Signatures on the documents submitted in electronic form in order to ensure the security and authenticity of the documents filed electronically. This is secure and authentic way to submit a document electronically. As such, all
                                filings done by the companies/LLPs under MCA21 e-Governance programme are required to be filed using Digital Signatures by the person authorised to sign the documents.</mark></p>
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

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:border-black hover:border-solid hover:border-2 hover:text-black hover:bg-grey hover:bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Benefits of a Digital Signature Certificate</h2>

                                <ul className="pl-8">
                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Reduced cost and time:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                Instead of signing the hard copy documents physically and scanning them to send them via e-mail, you can digitally sign the PDF files and send them much more quickly. A Digital Signature certificate holder does not have to be physically present to conduct or authorize a business.
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Data integrity:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                Documents that are signed digitally cannot be altered or edited after signing, which makes the data safe and secure. The government agencies often ask for these certificates to cross-check and verify the business transaction.
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Authentication:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                Helpful in authenticating the personal information details of the individual holder when conducting business online.
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Authenticity of documents:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                Digitally signed documents give confidence to the receiver to be assured of the signer’s authenticity. They can take action on the basis of such documents without getting worried about the documents being forged.
                                            </li>
                                        </ul>
                                    </li>

                                    <hr />
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4" >Classes Of Digital Signature Certificate</h2>
                                    <p className="text-md mb-4"><mark> The type of applicant and the purpose for which the Digital Signature Certificate is obtained defines the kind of DSC one must apply for depending on the need. There are three types of Digital Signature certificates issued by the certifying authorities
                                    </mark></p>


                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Class 1 Certificates:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                These are issued to individual/private subscribers and are used to confirm that the user’s name and email contact details from the clearly defined subject lie within the database of the certifying authority.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Class 2 Certificates:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                These are issued to the director/signatory authorities of the companies for the purpose of e-filing with the Registrar of Companies (ROC). Class 2 certificate is mandatory for individuals who have to sign manual documents while filing returns with the ROC. However, from 01.01.2021, the Controller of Certifying Authority has instructed to discontinue
                                                Class 2 Certificates and Class 3 Certificates will be issued in place of Class 2 Certificates.
                                            </li>
                                        </ul>
                                    </li>




                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            Class 3 Certificates:
                                        </span>
                                        <ul className="list-disc pl-4">
                                            <li className="mb-2 flex items-center">
                                                These certificates are used in online participation/bidding in e-auctions and online tenders anywhere in India. The vendors who wish to participate in the online tenders must have a Class 3 digital signature certificate..
                                            </li>
                                        </ul>
                                    </li>


                                    <hr />
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Documents For Applying Digital Signature Certificate</h2>
                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            1. Submission of Digital Signature Certificate Registration form properly completed.
                                        </span>
                                    </li>
                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            2. PAN Card, Aadhar Card, Photograph.
                                        </span>
                                    </li>
                                    <li className="mb-4">
                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            3. E-mail Id and Mobile number
                                        </span>
                                    </li>


                                    <li className="mb-2 flex items-center">

                                        <span className='font-semibold text-lg flex items-center'>
                                            <span className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">&#10004;</span>
                                            NOTE: All the documents required needs to be visually clear.
                                        </span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Accounting;
