import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const FormThree = () => {
    const formikProps = {
        initialValues: {
            firstname: '',
            color: '',
        },
        validationSchema: Yup.object({firstname: Yup.string().required('Sorry, this is required').max(6, 'Sorry the name is too long')}),
        onSubmit: (values) => {
            console.log(values);
        },
    };

    return (
        <Formik {...formikProps}>
            <div className='container'>
                <div className='col-md-12 mt-5'>
                    <Form>
                        <div>
                            <label htmlFor='firstname'>First name</label>
                            <Field name='firstname' type='text' className='form-control' />
                            <ErrorMessage name='firstname' />
                        </div>

                        <div>
                            <label htmlFor='color'>Color</label>
                            <Field as='select' name='color' className='custom-select'>
                                <option value='red'>Red</option>
                                <option value='blue'>Blue</option>
                                <option value='green'>Green</option>
                            </Field>
                        </div>

                        <hr className='mb-4' />
                        <button className='btn btn-primary btn-lg btn-block' type='submit'>
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </Formik>
    );
};

export default FormThree;
