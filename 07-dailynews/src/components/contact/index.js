import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../../store/actions';
import {showToast} from '../utils/toasts';

const Contact = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {email: '', firstname: '', lastname: '', message: ''},
        validationSchema: Yup.object({
            email: Yup.string().required('Sorry the email is required').email('This is not a valid email'),
            firstname: Yup.string().required('Sorry the field is required'),
            lastname: Yup.string().required('Sorry the field is required'),
            message: Yup.string().required('Sorry you need to say something').max(500, 'Sorry the message is too long'),
        }),
        onSubmit: (values, resetForm) => {
            dispatch(sendMessage(values)).then((payload) => {
                if (payload) {
                    resetForm();
                    showToast('SUCCESS', 'Message Submitted');
                } else {
                    showToast('ERROR', 'Sorry an error occured');
                }
            });
        },
    });

    return (
        <>
            <h1>Contact Us</h1>
            <div className='bg-white'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group mb-6'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' id='exampleInput8' placeholder='email@example.com' name='email' {...formik.getFieldProps('email')} />
                        {formik.errors.email && formik.touched.email ? (
                            <div className='bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700' role='alert'>
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className='form-group mb-6'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' id='firstname' placeholder='Enter your Firstname' name='firstname' {...formik.getFieldProps('firstname')} />
                        {formik.errors.firstname && formik.touched.firstname ? (
                            <div className='bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700' role='alert'>
                                {formik.errors.firstname}
                            </div>
                        ) : null}
                    </div>
                    <div className='form-group mb-6'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input type='text' className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' id='lastname' placeholder='Enter your Lastname' name='lastname' {...formik.getFieldProps('lastname')} />
                        {formik.errors.lastname && formik.touched.lastname ? (
                            <div className='bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700' role='alert'>
                                {formik.errors.lastname}
                            </div>
                        ) : null}
                    </div>

                    <div className='form-group mb-6'>
                        <label htmlFor='message'>Message</label>
                        <textarea className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ' id='message' rows='3' placeholder='Message' name='message' {...formik.getFieldProps('message')}></textarea>
                        {formik.errors.message && formik.touched.message ? (
                            <div className='bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700' role='alert'>
                                {formik.errors.message}
                            </div>
                        ) : null}
                    </div>

                    <button type='submit' className='w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                        Send
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;
