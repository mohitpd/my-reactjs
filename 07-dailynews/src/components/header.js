import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

const Header = () => {
    return (
        <>
            <header>
                <div className='items-center text-center w-full p-3  bg-white border-0 border-b-[3px] border-solid border-gray-500 box-border shadow-sm text-yellowtail font-medium text-gray-900 text-lg'>The Daily News</div>
            </header>
            <nav className='items-center flex border-0 border-b border-solid border-gray-300'>
                <Link className='p-2 text-blue-400 font-semibold no-underline' to={'/'}>
                    Home
                </Link>
                <Link className='p-2 text-blue-400 font-semibold no-underline' to={'/contact'}>
                    Contact
                </Link>
            </nav>
        </>
    );
};

export default Header;
