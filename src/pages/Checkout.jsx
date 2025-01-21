import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const navigate = useNavigate(); // For redirecting after checkout

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingFee = 5.0; // Example shipping fee
  const grandTotal = totalPrice + shippingFee;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add functionality to process the payment
    alert("Order successfully placed!");
    navigate("/thank-you"); // Redirect to a thank you page after checkout
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Billing Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={billingDetails.name}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, name: e.target.value })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={billingDetails.email}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    email: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                value={billingDetails.address}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    address: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                value={billingDetails.city}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, city: e.target.value })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Postal Code</label>
              <input
                type="text"
                value={billingDetails.postalCode}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    postalCode: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                value={billingDetails.country}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    country: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Payment Method</label>
              <select
                value={billingDetails.paymentMethod}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    paymentMethod: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Payment Details (only for credit card) */}
            {billingDetails.paymentMethod === "creditCard" && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Credit Card Information</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    value={paymentDetails.cardNumber}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium">Expiry Date</label>
                    <input
                      type="text"
                      value={paymentDetails.expiryDate}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          expiryDate: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium">CVV</label>
                    <input
                      type="text"
                      value={paymentDetails.cvv}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          cvv: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Items</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-4">
            <span className="font-semibold">Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Shipping:</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-lg font-bold">${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
