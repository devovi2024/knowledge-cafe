import React from 'react'; 
import profile from '../../images/profile.png';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto">
            {/* Header title */}
            <h1 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
                Knowledge Cafe
            </h1>

            {/* Profile Image */}
            <img 
                src={profile} 
                alt="Profile" 
                className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-lg hover:scale-105 transition duration-300"
            />
        </header>
    );
};

export default Header;
