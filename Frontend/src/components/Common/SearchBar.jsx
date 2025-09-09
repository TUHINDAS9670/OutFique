import React, { useState } from "react";
import { IoCloseCircle, IoLogoXbox, IoSearch } from "react-icons/io5";
import {useDispatch} from "react-redux"
import{useNavigate} from"react-router-dom"
import {
  setFilters,
  fetchProductByFilters,
} from "../../redux/slices/productSlice";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
 const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductByFilters({ search: searchTerm }));
    navigate(`/collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
      {isOpen ? (
        <form onSubmit={handleSubmit} className="flex relative items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={handleChange}
              className=" w-full bg-gray-100 px-4 py-2 pl-2 pr-12 outline-red-500 border-red-100 placeholder:text-xl rounded-lg"
            />
            {/* search icon */}
            <button type="submit" className="absolute right-2 top-1 transform translate-y-1">
              <IoSearch className="w-6 h-6 hover:text-black text-gray-800 cursor-pointer" />
            </button>
            {/* Close button */}
            <button  className="absolute top-1 transform translate-y-1 ml-2">
              <IoCloseCircle   onClick={handleSearchToggle} className="w-6 h-6 hover:text-black text-gray-800 cursor-pointer"/>
            </button>
          </div>
        </form>
      ) : (
        <button>
          <IoSearch
            onClick={handleSearchToggle}
            className="w-6 h-6 hover:text-black text-gray-800 cursor-pointer"
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
