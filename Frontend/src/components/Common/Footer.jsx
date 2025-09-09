import React from "react";
import { FaInstagram, FaMeta, FaYoutube } from "react-icons/fa6";
import { MdOutlinePermPhoneMsg,MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { FaCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="border-t p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8 lg:px-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Be the first to hear about new products, exclusive events, and
            premium offers
          </p>
          <p className="text-gray-600 font-medium text-sm mb-6">
            Sign up and get 10% off your first order
          </p>
          {/* newletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your mail"
              className="p-3 w-full text-sm border-t border-l border-b rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-gray-500 transition-all
             border-gray-200"
              required
            />
            <button
              type="submit"
              className="bg-black cursor-pointer text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-600"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop <RiShoppingBag4Fill className="h-6 w-6 inline ml-2"/></h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's top wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's bottom wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's bottom wear
              </Link>
            </li>
          </ul>
        </div>
        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">
            Support
            <MdOutlineSupportAgent
              className="inline ml-2 w-6 h-6"
            />
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us <PiPlugsConnectedBold className="h-6 w-6 inline mb-2"/></h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https//www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaMeta className="h-5 w-5 " />
            </a>
            <a
              href="https//www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaInstagram className="h-5 w-5 " />
            </a>
            <a
              href="https//www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaYoutube className="h-5 w-5 " />
            </a>
          </div>
          <p>
            Call Us <MdOutlinePermPhoneMsg className=" h-6 w-6 inline" />
          </p>
          <span>+91 - 8596357475</span>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0  border-t border-gray-200 pt-6">
        <p className="text-red-600 text-sm tracking-normal text-center"><FaCopyright className="inline h-4 mb-0.5 w-5"/> 2025 , All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
