import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import ProductGrid from "../Products/ProductGrid";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();
  // handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: delta,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => {
        return (
          <div
            key={index}
            className="items-start flex justify-between space-x-4 py-4 border-b"
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-3"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Size:{product.size} | color:{product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="border rounded-lg px-2 py-1 text-xl font-medium cursor-pointer"
                  >
                    -
                  </button>
                  <span className="mx-4">{product.quantity} </span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="border rounded-lg px-2 py-1 text-xl font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p>₹{product.price}</p>

            <button
              onClick={() => {
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color
                );
              }}
            >
              <RiDeleteBin6Fill className="h-6 w-6 mt-2 text-red-700 cursor-pointer" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
