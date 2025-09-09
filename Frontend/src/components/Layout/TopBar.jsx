import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram ,FaYoutube } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";



const TopBar = () => {
  return (
    <div className="bg-red-500 text-white p-2 overflow-x-hidden   ">
      <div className="container mx-auto flex justify-between ml-5">
        <div className="flex items-center space-x-5">
          <a href="#" className="hover:text-gray-300">
            <FaMeta className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-100">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-100">
            <FaYoutube  className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm flex items-center  font-semibold font-serif">
          <span>Ordrer item above 200 for free shipping</span>
        </div>
        <div className="flex  items-center mr-10">
          <span>
<MdOutlinePermPhoneMsg className=" h-6 w-6 inline"/>
+91 - 8596357475
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
