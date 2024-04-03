import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcApproval } from 'react-icons/fc'
import './Styles/register.css'

const BMRCalculator = () => {
    const initialValues = {
        weight: '',
        height: '',
        age: '',
        gender: 'male',
    };

    const [alertVisible, setAlertVisible] = useState(false); // State to manage alert visibility

    const calculateBMR = (values) => {
        const { weight, height, age, gender } = values;
        let calculatedBMR;

        if (gender === 'male') {
            calculatedBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            // Round to two decimal places
            calculatedBMR = calculatedBMR.toFixed(2);
        } else if (gender === 'female') {
            calculatedBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            // Round to two decimal places
            calculatedBMR = calculatedBMR.toFixed(2);
        }
        return parseFloat(calculatedBMR);
    };

    const getHealthCondition = (bmr) => {
        if (bmr < 1200) {
            return "Very Low BMR. May indicate malnutrition or starvation.";
        } else if (bmr >= 1200 && bmr < 1400) {
            return "Low BMR. May indicate a slow metabolism.";
        } else if (bmr >= 1400 && bmr <= 1800) {
            return "Normal BMR for most adults.";
        } else {
            return "High BMR. May indicate a high metabolism.";
        }
    };

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        const bmr = calculateBMR(values);
        const healthCondition = getHealthCondition(bmr);
        alert(`Your BMR is: ${bmr}\nHealth Condition: ${healthCondition}`);
        setAlertVisible(true); // Set alert visibility to true
        setSubmitting(false);
        // Reset form values after alert is dismissed
        setTimeout(() => {
            resetForm();
            setAlertVisible(false); // Hide the alert
        }, 100); // Adjust this timing according to your UI needs
    };
    return (
        <div className='home w-80 justify-content-center'>
             <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    weight: Yup.number().required('Weight is required').positive('Weight must be a positive number'),
                    height: Yup.number().required('Height is required').positive('Height must be a positive number'),
                    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
                })}
                onSubmit={onSubmit}
            >
                <div className="b-container">
                    <div className="register">
                        <div className="register-2">
                            <Form className="r-form">
                                <div className='from-group'>
                                    <h2 className="r-title">BMR Calculator</h2>
                                    <hr style={{ background: 'black', height: '0.2rem' }} />
                                    <label className='text-dark p-1'>Weight (kg):</label>
                                    <Field type="number" name="weight" className='input' />
                                    <ErrorMessage name="weight" component="div" className='text-danger' />
                                </div>
                                <div className='from-group'>
                                    <label className='text-dark p-1'>Height (cm):</label>
                                    <Field type="number" name="height" className='input' />
                                    <ErrorMessage name="height" component="div" className='text-danger' />
                                </div>
                                <div>
                                    <label className='text-dark p-1'>Age:</label>
                                    <Field type="number" name="age" className='input' />
                                    <ErrorMessage name="age" component="div" className='text-danger' />
                                </div>
                                <div className='from-group'>
                                    <label className='text-dark p-1'>Gender:</label>
                                    <Field as="select" name="gender" className='input'>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Field>
                                </div>
                                <button className="submit mt-3" type="submit">Calculate BMR</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
            {alertVisible && (
                <div className="alert" onClick={() => setAlertVisible(false)}> {/* Close the alert when clicked */}
                    Your BMR calculation alert.
                </div>
            )}
            <div className="main justify-content-center">
                <div className="header text-center text-white"><h2>Why 'BMR' is Important for our body?</h2></div>
                <div className="para p-2">
                    <p style={{ textIndent: '20px' }}>
                        <i className="fa-solid fa-circle-check"></i> BMR stands for Basal Metabolic Rate. It represents the number of calories your body needs to maintain basic physiological functions while at rest. In simpler terms, BMR is the amount of energy expended by your body to keep itself functioning at rest, such as maintaining body temperature, breathing, circulating blood, and other essential activities.
                    </p>
                    <p style={{ textIndent: '20px' }}><i className="fa-solid fa-circle-check"></i> Understanding BMR is essential for various health-related goals, including weight management, nutrition planning, and fitness training. Here's a breakdown of key points related to BMR:</p>
                    <p style={{ textIndent: '20px' }}><i className="fa-solid fa-circle-check"></i> <strong>Caloric Baseline::</strong>BMR forms the foundation for calculating your total daily energy expenditure (TDEE), which represents the total number of calories your body needs each day to maintain your current weight. TDEE is calculated by adding the calories burned through physical activity (such as exercise and daily activities) to your BMR.</p>
                    <div > <p><i className="fa-solid fa-circle-check"></i> <strong>Factors Influencing BMR:</strong> </p>
                        <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                            <div className='cal ms-5'>
                                <p>
                                    <FcApproval /> <strong>Body Composition: </strong>
                                    Muscle mass tends to increase BMR because muscle tissue requires more energy at rest compared to fat tissue.
                                </p>
                                <p>
                                    <FcApproval /> <strong>Age: </strong>
                                    BMR tends to decrease with age due to a decrease in muscle mass and changes in hormone levels.
                                </p>
                                <p>
                                    <FcApproval /> <strong>Gender: </strong>
                                    On average, men tend to have a higher BMR than women due to differences in body composition and hormone levels.
                                </p>
                                <p>
                                    <FcApproval /> <strong>Height and Weight: </strong>
                                    Taller and heavier individuals typically have a higher BMR.
                                </p>
                                <p>
                                    <FcApproval /> <strong>Genetics: </strong>
                                    Genetic factors can influence metabolic rate and BMR to some extent.
                                </p>
                                <p>
                                    <FcApproval /> <strong>Environmental Factors: </strong>
                                    Factors such as temperature, stress levels, and sleep patterns can affect BMR temporarily.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p><i className="fa-solid fa-circle-check"></i> <strong>Calculating BMR:</strong></p>
                    <p >
                        Several formulas are used to estimate BMR, with the Harris-Benedict equation being one of the most commonly used. Here's the simplified version of the Harris-Benedict equation for estimating BMR:
                    </p>
                    <div className='cal ms-5'>
                        <p><strong>For men:</strong> <mark>BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)</mark> </p>
                        <p><strong>For women:</strong> <mark>BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)</mark> </p>
                    </div>
                    <p>
                        These equations provide an estimate of the calories your body needs to maintain basic functions at rest, without any additional physical activity.
                    </p>
                    <p><i className="fa-solid fa-circle-check"></i> <strong>Practical Applications:</strong></p>
                    <div className="score ms-4" style={{ borderLeft: '2px solid red' }}>
                        <div className='cal ms-5'>
                            <p><FcApproval /><strong>Weight Management:</strong> Understanding your BMR can help you determine the appropriate calorie intake for weight loss, maintenance, or gain.</p>
                            <p><FcApproval /><strong>Nutrition Planning:</strong> BMR serves as a starting point for designing personalized meal plans that meet your energy needs.</p>
                            <p><FcApproval /><strong>Fitness Training:</strong>BMR is often used in conjunction with TDEE to create effective exercise and nutrition programs for achieving fitness goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BMRCalculator;
