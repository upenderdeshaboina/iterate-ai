import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { GiCampCookingPot } from "react-icons/gi";

import logo from '../../logo.png'
import './navbar.css'
const Navbar =()=>{
    const [dropdownVisible,setDropdown]=useState(false)
    const toggleDropdown=()=>{
        setDropdown(!dropdownVisible)
    }
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className="logo">
                <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
            </div>
            <ul className='nav-links'>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='puja' className='link'>Puja</Link></li>
                <li><Link to='/' className='link'>Panchang</Link></li>
                <li><Link to='/' className='link'>Temples</Link></li>
                <li><Link to='/' className='link'>Library</Link></li>
            </ul>
            <ul className="navbar-right">
                <li>
                    <select className='select'>
                        <option>English</option>
                        <option>हिंदी</option>
                    </select>
                </li>
                <li className='icon-li'>
                    <button onClick={toggleDropdown} className="icon-button">
                        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="User Icon" className="user-icon" />
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <p>To check all available pujas & offers:</p>
                            <button className="login-button">Login / Create an account</button>
                            <div className="account-details">
                                <p>Account Details</p>
                                <div className="account-item">
                                    <div className='item'>
                                        <IoPersonSharp color='#BDB8B8'/>
                                        <p>My Profile </p>
                                    </div>
                                    <MdKeyboardArrowRight color='#000000'/>
                                </div>
                                <Link to='/epuja/history' className='li'>
                                    <div className="account-item">
                                    <div className='item'>
                                        <CiViewList color='#BDB8B8'/>
                                        <p>My Puja Bookings</p>
                                    </div>
                                    <MdKeyboardArrowRight color='#000000'/>
                                </div>
                                </Link>
                                <div className="account-item">
                                    <div className='item'>
                                        <IoPersonSharp color='#BDB8B8'/>
                                        <p>My Ramotsav Bookings</p>
                                    </div>
                                    <MdKeyboardArrowRight color='#000000'/>
                                    
                                </div>
                                <div className="account-item">
                                    <div className='item'>
                                        <GiCampCookingPot color='#bdb8b8'/>
                                        <p>Book a Puja</p>
                                    </div>
                                    <div className='item'>
                                        <span className="new-badge">New</span>
                                        <MdKeyboardArrowRight color='#000000'/>
                                    </div>
                                </div>
                            </div>
                            <div className="support-details">
                                <p className='support-text'>Help & Support for Puja Booking</p>
                                <div className="support-item">
                                    <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLWljb24tMTE2LWwyc2R1d2ppLmpwZw.jpg' alt='phone' className='phone'/>
                                    <div className='contact-div'>
                                    <span className='text'>080-711-74417</span>
                                    <p className='text'>You can call us from 10:30 AM - 7:30 PM</p>
                                </div></div>
                                <div className="support-links">
                                    <div className='contact-us'>
                                        <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/gmail-660_040119014433.jpg?size=948:533' alt='mail' className='contact-us-logo'/>
                                        <p>Email us</p>
                                    </div>
                                    <div className='contact-us'>
                                        <img src='https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png' alt='whatsapp' className='contact-us-logo'/>
                                        <p>Whatsapp us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            </div>
            
        </nav>
    )
}
export default Navbar