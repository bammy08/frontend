import React from 'react';
import logo from '../images/logo.png';
import { MdEmail } from 'react-icons/md';
import {
  FaFacebookF,
  FaInstagram,
  FaSquarePhone,
  FaTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-green-100">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex flex-col gap-3">
            <img className="w-36" src={logo} alt="logo" />
            <ul className="flex flex-col gap-2 text-gray-500">
              <li className="flex items-center gap-1">
                <span>
                  <MdEmail />
                </span>
                <span className="mb-1">support@farmconnect.com</span>
              </li>
              <li className="flex  items-center gap-1 text-sm ">
                <span>
                  <FaSquarePhone />
                </span>
                <span className="mb-1">+234-704-724-5849</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5/12 lg:w-8/12 sm:w-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div>
              <h2 className="font-semibold text-lg mb-2">Useful Links</h2>
              <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className="flex flex-col gap-2 text-gray-500 text-sm">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Shop</Link>
                  </li>
                  <li>
                    <Link>Delivery Information</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 text-gray-500 text-sm">
                  <li>
                    <Link>Our Services</Link>
                  </li>
                  <li>
                    <Link>Company Profile</Link>
                  </li>
                  <li>
                    <Link>Become A Seller</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="font-semibold text-lg mb-2">Join Our Newsletter</h2>
            <span>Get email updates about our products and special offers</span>
            <div className="h-[50px] w-full bg-white border relative">
              <input
                className="h-full bg-transparent w-full rounded text-gray-500 px-3 outline-0"
                placeholder="Enter your email"
                type="text"
              />
              <button className="h-full absolute right-0 bg-orange-400 text-white uppercase px-4 font-semibold rounded text-sm">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-start items-center gap-3">
              <li className="bg-green-600 cursor-pointer h-[30px] w-[30px] rounded-full flex justify-center items-center text-white">
                <FaFacebookF />
              </li>
              <li className="bg-green-600 cursor-pointer h-[30px] w-[30px] rounded-full flex justify-center items-center text-white">
                <FaTwitter />
              </li>
              <li className="bg-green-600  cursor-pointer h-[30px] w-[30px] rounded-full flex justify-center items-center text-white">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-wrap justify-center font-semibold items-center text-gray-500 mx-auto py-5 text-center">
        <span>&copy; {currentYear} FarmConnect. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
