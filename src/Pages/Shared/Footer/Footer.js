import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png'

const Footer = () => {
    const myStyle = {
        backgroundImage:
            `url(${footerBg})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <footer style={myStyle} className="footer p-10 text-black flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="mb-8 lg:mb-0">
                <span className="footer-title">Services</span>
                <div className="flex flex-col lg:flex-row">
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover lg:ml-4">Design</Link>
                    <Link className="link link-hover lg:ml-4">Marketing</Link>
                    <Link className="link link-hover lg:ml-4">Advertisement</Link>
                </div>
            </div>
            <div className="mb-8 lg:mb-0">
                <span className="footer-title">Company</span>
                <div className="flex flex-col lg:flex-row">
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover lg:ml-4">Contact</Link>
                    <Link className="link link-hover lg:ml-4">Jobs</Link>
                    <Link className="link link-hover lg:ml-4">Press kit</Link>
                </div>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <div className="flex flex-col lg:flex-row">
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover lg:ml-4">Privacy policy</Link>
                    <Link className="link link-hover lg:ml-4">Cookie policy</Link>
                </div>
            </div>
        </footer>
    );
};


export default Footer;