import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

const Header = () => {
    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-3 md:px-4 mb-3 bg-white border-0 border-b-2 border-solid border-gray-300 box-border shadow-sm'>
                <h3 className='my-0 md:mr-auto font-normal'>Company Name</h3>
                <nav className='my-2 md:my-0 md:mr-3 '>
                    <Link className='p-2 text-gray-900 no-underline' to='/'>
                        Home
                    </Link>
                    <Link className='p-2 text-gray-900 no-underline' to='/purecomp'>
                        PureComp
                    </Link>
                    <Link className='p-2 text-gray-900 no-underline' to='/adjel'>
                        Adjel
                    </Link>
                    <Link className='p-2 text-gray-900 no-underline' to='/user'>
                        User
                    </Link>
                    <Link className='p-2 text-gray-900 no-underline' to='/profile'>
                        Profile
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
