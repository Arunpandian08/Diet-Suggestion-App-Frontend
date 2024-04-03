import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/landingPage.css'

const LandingPage = () => {
    const navigate = useNavigate()
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        // Set showImage to true after a delay to trigger the slide-in effect
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 500); // Adjust the delay as needed

        // Clear the timer on component unmount
        return () => clearTimeout(timer);
    }, []);
    return (

        <div className="landing-container">
            <img className="falling-leaf" src="https://3.bp.blogspot.com/-Kd9yDR0tGVQ/V_NTSVyfaqI/AAAAAAAA__E/HgMxYmQc2CsXH1FsS84du5Hp3wxsPniVgCLcB/s1600/0_16dccb_cfe1022a_orig.gif" alt="Falling Leaf" />
            <img className="falling-leaf" src="https://3.bp.blogspot.com/-Kd9yDR0tGVQ/V_NTSVyfaqI/AAAAAAAA__E/HgMxYmQc2CsXH1FsS84du5Hp3wxsPniVgCLcB/s1600/0_16dccb_cfe1022a_orig.gif" alt="Falling Leaf" />
            <img className="falling-leaf" src="https://3.bp.blogspot.com/-Kd9yDR0tGVQ/V_NTSVyfaqI/AAAAAAAA__E/HgMxYmQc2CsXH1FsS84du5Hp3wxsPniVgCLcB/s1600/0_16dccb_cfe1022a_orig.gif" alt="Falling Leaf" />
            <div className="row h-100">
                <div className="col-6">
                    <div className={`landing-page-image ${showImage ? 'slide-in' : ''}`}>
                        <img className='lang-img' style={{ maxWidth: "80vh" }} src="/Landing-page-img.png" alt="profile" />
                    </div>
                </div>
                <div className={`col-6 ${showImage ? 'slide-in' : ''}`} id="fonts">
                    <img src="/1-logo-removebg-preview.png" style={{ width: '100%' }} alt="logo" />
                    <h1 className='text-head'><i className="fa-solid fa-stethoscope"></i> Healthy Diet</h1> <br />
                    <h5 className='text-white'><i className="fa-solid fa-apple-whole"></i> Fruit in a day is a Healthy Way</h5>
                    <p className='para '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It's hard to wrap your head around the fact that you are helping yourself to lose weight when you eat an apple. They are so sweet that they
                        end up in a lot of deserts.  But they are low in all of the things that you want them to be like calorie, fat, and sodium.They have a good amount
                        of fiber</p>
                    <div className="btns">
                        <button className="continue-application" onClick={() => navigate('/register')}>
                            <div>
                                <div className="pencil"></div>
                                <div className="folder">
                                    <div className="top">
                                        <svg viewBox="0 0 24 27">
                                            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                        </svg>
                                    </div>
                                    <div className="paper"></div>
                                </div>
                            </div>
                            Register
                        </button>
                        <div className="login-btn">
                            <button className='button' onClick={() => navigate('/login')}>
                                <span>LOG IN</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
