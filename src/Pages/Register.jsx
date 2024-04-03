import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles/register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sound from '/level-up-191997.mp3';
import SoundErr from '/livechat-129007.mp3';

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const successNotificationSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };

    const errorNotificationSound = () => {
        const audio = new Audio(SoundErr);
        audio.play();
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        contactNumber: Yup.number().required('Contact number is required'),
        gender: Yup.string().required('Gender is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    return (
        <div className="body">
            <Formik
                initialValues={{
                    name: '',
                    contactNumber: '',
                    gender: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    try {
                        const response = await axios.post('https://diet-suggestion-app-backend.onrender.com/api/user/register', values);
                        toast.success(response.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            onOpen: successNotificationSound,
                            transition: Zoom,
                        });
                        navigate('/login');
                    } catch (error) {
                        console.error('Error submitting form:', error);
                        if (error.response && error.response.status === 409) {
                            toast.error('User already exists.Please give an alternate email id', {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                onOpen: errorNotificationSound,
                                transition: Zoom,
                            });
                        } else {
                            toast.error('Error submitting form', {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                onOpen: errorNotificationSound,
                                transition: Zoom,
                            });
                        }
                    } finally {
                        setLoading(false);
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <div className="register">
                        <div className="register-2">
                            <Form className="r-form">
                                <div className="form-details">
                                    <p className="r-title">Register</p>
                                    <hr style={{ background: 'black', height: '0.2rem' }} />
                                    <p className="message text-center">Signup now and get full access to our app. </p>
                                    <div className="form-group">
                                        <label className='text-dark p-1'>Name :</label><br />
                                        <Field type="text" name="name" placeholder="Enter your name" autoComplete='name' className="input" />
                                        <ErrorMessage name="name" component="div" className="error-message text-danger" />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-dark p-1'>Contact Number :</label> <br />
                                        <Field type="tel" name="contactNumber" placeholder="Contact Number" autoComplete='tel' className="input" />
                                        <ErrorMessage name="contactNumber" component="div" className="error-message text-danger" />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-dark p-1 px-1'>Gender :</label><br />
                                        <Field as="select" name="gender" className="input">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Field>
                                        <ErrorMessage name="gender" component="div" className="error-message text-danger" />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-dark p-1'>Email :</label> <br />
                                        <Field type="email" name="email" placeholder="Email" autoComplete='email' className="input" />
                                        <ErrorMessage name="email" component="div" className="error-message text-danger" />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-dark p-1'>Password :</label><br />
                                        <Field type="password" name="password" placeholder="Password" autoComplete='new-password' className="input" />
                                        <ErrorMessage name="password" component="div" className="error-message text-danger" />
                                    </div>
                                    <button type="submit" className="submit mt-3" disabled={isSubmitting}>
                                        <span>{loading ? <div className="loader"></div> : 'Sign Up'}</span>
                                    </button>
                                    <p className="signin pt-2">Already have an account? <Link to='/login'>Sign in</Link></p>
                                </div>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
