import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="./home1" >Home</Link>
                    {}
                </li>
                <li className="dropdown">
                <Link href="./about-us" >About Us</Link>
                    {/* <Link href="./about-us" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About Us</Link> */}
                    {/* <ul className="dropdown-menu">
                        <li><Link href="./about-us">About Us</Link></li>
                        <li><Link href="./">Team</Link></li>
                        <li><Link href="./">FAQ</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="./">Audit and Assurance</Link></li>
                        <li><Link href="./">Report & Certification</Link></li>
                        <li><Link href="./">Outsourcing Support Service </Link></li>
                        <li><Link href="./">Governance, Risk & Compliance Advisory </Link></li>
                        <li><Link href="./">Advisory & Assistance</Link></li>
                        <li><Link href="./">FEMA Advisory</Link></li>
                        <li><Link href="./">Corporate Law</Link></li>
                        <li><Link href="./"> Formation & Registration Services</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/blog-3-column">Blog</Link>
                   
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;