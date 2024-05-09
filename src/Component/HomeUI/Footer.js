import React from 'react';

const Footer = () => {
    const handleLinkClick = (event) => {
        // Do something when a link is clicked
        console.log('Link clicked:', event.target.href);
    };

    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center ml-36">
                    <div className="text-white">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                            <img src="assets/homepage/logo.jpeg" alt="Logo" className="flex-shrink-0 w-6 h-6 rounded-full dark:text-gray-50" />
                        </div>
                    </div>
                    <h1 className="text-white">J A Gaikwad & Associates</h1>
                </div>

                <div className='flex justify-start'>
                    <div className="text-white">
                        <a href="#" className="text-white hover:text-gray-400 mx-4" onClick={handleLinkClick}>Home</a>
                    </div>
                    <div className="text-white">
                        <a href="#" className="text-white hover:text-gray-400 mx-4" onClick={handleLinkClick}>Services</a>
                    </div>
                    <div className="text-white">
                        <a href="#" className="text-white hover:text-gray-400 mx-4" onClick={handleLinkClick}>About Us</a>
                    </div>
                    <div className="text-white">
                        <a href="#" className="text-white hover:text-gray-400 mx-4" onClick={handleLinkClick}>Contact us</a>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mr-36">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/jagaikwadandassociates" title="Facebook" className="flex items-center p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#3b5998" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-blue-500">
                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="https://www.youtube.com/@jagaikwadandassociates" title="YouTube" className="flex items-center p-1">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-10 fill-current text-red-500">
                            <path fill="#FF0000" d="M23.6,7.2c-0.3-1.1-1.1-2-2.2-2.2c-1.8-0.3-9.1-0.3-9.1-0.3s-7.3,0-9.1,0.3C1.5,5.2,0.7,6.1,0.4,7.2 C0.1,8.4,0,9.8,0,12s0.1,3.6,0.4,4.8c0.3,1.1,1.1,2,2.2,2.2c1.8,0.3,9.1,0.3,9.1,0.3s7.3,0,9.1-0.3c1.1-0.2,1.9-1.1,2.2-2.2 c0.3-1.2,0.4-2.6,0.4-4.8S23.9,8.4,23.6,7.2z M9.5,15.8V8.2l6.7,3.8L9.5,15.8z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
