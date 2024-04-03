import React from 'react';
import Sidebar from '../components/Sidebar';
import './Styles/dashboard.css'
import Footer from './Footer';

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar  />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
