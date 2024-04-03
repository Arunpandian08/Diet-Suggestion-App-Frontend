import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/dashboard.css';

const Footer = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className="p-3 d-flex justify-content-center align-items-center" style={{ background: 'grey'}}>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col col-md-5 col-sm-12">
              <h3>Contact Us</h3>
              <p>123 Street, City, Country</p>
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="col col-md-4 col-sm-12">
              <h3>Links</h3>
              <ul className="list-unstyled">
                <li><Link to="/dashboard/recipes" onClick={handleScroll}>Recipes</Link></li>
                <li><Link to="/dashboard/fat-burners" onClick={handleScroll} >Fat Burners</Link></li>
                <li><Link to="/dashboard/gm-plan" onClick={handleScroll} >GM Diet Plan</Link></li>
                <li><Link to="/dashboard/bmi-calculator" onClick={handleScroll} >BMI Calculator</Link></li>
                <li><Link to="/dashboard/charts" onClick={handleScroll} >Diet Chart</Link></li>
                <li><Link to="/dashboard/line-chart" onClick={handleScroll} >Fat Loss Chart</Link></li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-12">
              <h3>Social Media</h3>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
