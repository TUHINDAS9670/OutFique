import { React, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const {user}=useSelector((state)=>state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <nav className="container mx-auto  items-center justify-between hidden md:flex px-4 mt-3">
        {/* left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Outfique
          </Link>
        </div>
        {/* center -Navigation Link */}
        <div className="space-x-5 ">
          <Link
            to="/collections/all?gender=Men"
            className="font-bold text-gray-600 hover:text-black "
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="font-bold text-gray-600 hover:text-black "
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="font-bold text-gray-600 hover:text-black "
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="font-bold text-gray-600 hover:text-black "
          >
            Bottom Wear
          </Link>
        </div>
        {/* cart,search,profile link */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}

          <Link to="/profile">
            <CgProfile className="h-6 w-6" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <FiShoppingCart className="text-gray-700 h-6 w-6 cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute bg-red-500 -top-1 text-white text-sm rounded-full px-2 py-0.5 ">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* search */}
          <div>
            <SearchBar />
          </div>

          {/* three bars */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiMiniBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
      {/* Mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button>
            <IoCloseCircle
              onClick={toggleNavDrawer}
              className="h-6 w-6 cursor-pointer text-gray-600"
            />
          </button>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
