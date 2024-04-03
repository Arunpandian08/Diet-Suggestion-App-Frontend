import { Link, Outlet } from 'react-router-dom';
import '../Pages/Styles/dashboard.css'

const NavbarComponent = () => {
    return (
        <div >
            <div className="nav">
                <nav className="navbar sticky-top navbar-expand-lg" style={{ borderBottom: '1px solid black' }}>
                    <div className="container-fluid">
                        <Link to='/dashboard/recipes' className="navbar-brand" ><img src="/logo.png" style={{ width: '50%' }} alt="brand-logo" /></Link>
                        <div className=" ms-auto w-100">
                                <div className="scrolling-container">
                                    <marquee behavior="smooth" direction="row">The GM Diet Plan: Lose Fat in Just 7 Days?🥰 What is the GM diet?❤️‍🔥Food For Fat Burning🔥BMI Calculator{" "}<i className="fa-solid fa-calculator"></i></marquee>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default NavbarComponent;
