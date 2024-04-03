import React, { useState, useEffect } from 'react';
import { Link, Outlet,useLocation } from 'react-router-dom';
import './Styles/Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 767);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.split('/')[2]; // Get the last segment of the path
    setActiveLink(path);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className='sidebar-container '>
      <section className={`sidebar sticky-top ${isExpanded ? 'expand' : ''}`}>
        <div className="nav-header">
          <p className="logo mt-4">Healthy Diet</p>
          <i className={`bx ${isExpanded ? 'bx-menu-alt-right' : 'bx-menu'} btn-menu`} onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-links">
          <li className={activeLink === 'recipes' ? 'active' : ''}>
            <Link to="/dashboard/recipes" onClick={handleClick}>
            <i className="fa-solid fa-utensils"></i>
              <span className="title">Recipes</span>
            </Link>
            <span className="tooltip">Recipes</span>
          </li>
          <li className={activeLink === 'fat-burners' ? 'active' : ''}>
            <Link to="/dashboard/fat-burners" onClick={handleClick}>
            <i className="fa-solid fa-person-dress-burst"></i>
              <span className="title">Fat Burners</span>
            </Link>
            <span className="tooltip">Fat Burners</span>
          </li>
          <li className={activeLink === 'gm-plan' ? 'active' : ''}>
            <Link to="/dashboard/gm-plan" onClick={handleClick}>
            <i className="fa-solid fa-layer-group"></i>
              <span className="title">GM Diet Plan</span>
            </Link>
            <span className="tooltip">GM Diet Plan</span>
          </li>
          <li className={activeLink === 'bmi-calculator' ? 'active' : ''}>
            <Link to="/dashboard/bmi-calculator" onClick={handleClick}>
            <i className="fa-solid fa-weight-scale"></i>
              <span className="title">BMI Calculator</span>
            </Link>
            <span className="tooltip">BMI Calculator</span>
          </li>
          <li className={activeLink === 'bmr-calculator' ? 'active' : ''}>
            <Link to="/dashboard/bmr-calculator" onClick={handleClick}>
            <i className="fa-solid fa-calculator"></i>
              <span className="title">BMR Calculator</span>
            </Link>
            <span className="tooltip">BMR Calculator</span>
          </li>
          <li className={activeLink === 'charts' ? 'active' : ''}>
            <Link to="/dashboard/charts" onClick={handleClick}>
            <i className="fa-solid fa-circle-dot"></i>
              <span className="title">Diet Chart</span>
            </Link>
            <span className="tooltip">Diet Chart</span>
          </li>
          <li className={activeLink === 'line-chart' ? 'active' : ''}>
            <Link to="/dashboard/line-chart" onClick={handleClick}>
             <i className="fa-solid fa-chart-line"></i>
              <span className="title">Fat Loss Chart</span>
            </Link>
            <span className="tooltip">Fat Loss Chart</span>
          </li>
          <li>
            <Link to="/"onClick={handleClick}>
            <i className="fa-solid fa-power-off"></i>
              <span className="title">Logout</span>
            </Link>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};

export default Sidebar;
