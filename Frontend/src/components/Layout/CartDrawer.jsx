import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CartDrawer = ({ isDrawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/Login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50  ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoCloseCircle className="h-6 w-6 text-gray-400 cursor-pointer" />
        </button>
      </div>
      {/* cart contents with scrollable area */}
      <div className="flex flex-col  p-4 overflow-y-auto">
        <h2 className="font-semibold text-xl mb-4">Your Cart</h2>
        {cart && cart?.products?.length > 0 ? (
          //  {/* component for cart contents */}
          <CartContent cart={cart} userId={userId} guestId={guestId} />
        ) : (
          <p>Your cart is empty</p>
        )}

        {/* checkout button fixed at bottom */}
        <div className="p-4 bg-white sticky bottom-0">
          {cart && cart?.products?.length > 0 && (
            <>
              <button
                onClick={handleCheckout}
                className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                checkout
              </button>
              <p className="text-sm tracking-normal text-gray-500 mt-2 text-center">
                Shipping,taxes and discountcodes calculated at checkout.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
