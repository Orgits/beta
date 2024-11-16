import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="./" >Home</Link>
                    {}
                </li>
                <li className="dropdown">
                    <Link href="/about-us" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About Us</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="./">About Us</Link></li>
                        <li><Link href="./">Team</Link></li>
                        <li><Link href="./">FAQ</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="./">Portfolio</Link>
                    {}
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="./">Services Version One</Link></li>
                        <li><Link href="./-2">Services Version Two</Link></li>
                        <li><Link href="./-details/1">Services Details</Link></li>
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