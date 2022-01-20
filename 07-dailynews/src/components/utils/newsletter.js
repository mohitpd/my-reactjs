import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {addNewsLetter, clearNewsletter} from '../../store/actions';
import {showToast} from './toasts';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
    const userData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        dispatch(addNewsLetter({email: value}));
    };

    useEffect(() => {
        if (userData.newsletter) {
            console.log('dsdsf');
            console.log(userData);
            if (userData.newsletter === 'added') {
                showToast('SUCCESS', 'Thank you for subscribing.');
                textInput.current.value = '';
                // dispatch(clearNewsletter());
            }
            if (userData.newsletter === 'failed') {
                showToast('ERROR', 'You are already on the DB');
                textInput.current.value = '';
                // dispatch(clearNewsletter());
            }
        }
    }, [userData]);

    useEffect(() => {
        return () => dispatch(clearNewsletter());
    }, [dispatch]);

    return (
        <>
            <div className='mt-5 border-0 border-t-[5px] border-solid border-[#3c3c3c] pt-5'>
                <h1 className='text-center text-yellowtail'>Join our newsletter</h1>
                <div className='form w-[500px] my-0 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Example: youremail@gmail.com' name='email' ref={textInput} />
                        <button type='submit' className='inline-block mt-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                            Add me to the List
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
