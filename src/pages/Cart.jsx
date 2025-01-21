// Cart.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../store/cartSlice"; // Import your actions

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Access cart items

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Remove item from cart
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id)); // Increase item quantity
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id)); // Decrease item quantity
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex space-x-8">
        {/* Left Side: Cart Items */}
        <div className="w-2/3">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/100"}
                      alt={item.name}
                      className="w-40 h-32 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="px-2 py-1 bg-red-500 text-white rounded-l hover:bg-red-600"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-12 text-center border-t border-b border-gray-300"
                        />
                        <button
                          onClick={() => handleIncrease(item.id)}
                          className="px-2 py-1 bg-green-500 text-white rounded-r hover:bg-green-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Total Balance and Payment Details */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Shipping:</span>
            <span>$5.00</span> {/* Example shipping fee */}
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">${(totalPrice + 5).toFixed(2)}</span> {/* Total including shipping */}
          </div>

          <Link to="/checkout" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
