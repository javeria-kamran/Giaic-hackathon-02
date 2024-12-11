import React from "react";
import Link from "next/link";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:flex lg:space-x-10">
        {/* Left Section - Contact and Shipping Information */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Hekto Demo</h1>
          <p className="text-sm text-gray-500 mt-2">
            Cart / Information / Shipping / Payment
          </p>

          {/* Contact Information */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Contact Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Already have an account? <a href="#" className="text-blue-500">Log in</a>
            </p>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 p-3 rounded-md mt-4"
            />
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                Keep me up to date on news and exclusive offers
              </label>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Shipping address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-3 rounded-md mt-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 p-3 rounded-md mt-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full border border-gray-300 p-3 rounded-md"
                disabled
              />
            </div>
            <button className="w-full bg-pink-500 text-white p-3 rounded-md mt-6">
              <Link href ="/shoplist">Continue Shipping</Link>
            </button>
          </div>
        </div>

        {/* Right Section - Cart Summary */}
        <div className="mt-10 lg:mt-0 lg:w-2/5 bg-white p-6 rounded-md shadow-md">
          {/* Cart Items */}
          <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
          <div className="mt-4 space-y-4">
            {/* Repeat this block for each cart item */}
            <div className="flex items-center">
              {/* Replace with product image */}
              <img
                src="/path-to-product-image.jpg" 
                alt="Product"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-gray-800">Product Name</h3>
                <p className="text-sm text-gray-500">Color: Brown</p>
                <p className="text-sm text-gray-500">Size: XL</p>
              </div>
              <p className="text-gray-800 font-semibold">$20.00</p>
            </div>
            {/* End of cart item block */}
          </div>

          {/* Subtotals and Totals */}
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-semibold text-gray-800">$219.00</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-600">Total:</p>
              <p className="font-semibold text-gray-800">$325.00</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Shipping & taxes calculated at checkout.
            </p>
          </div>

        <Link href = "/ordercmpltd">
        <button className="w-full bg-green-500 text-white p-3 rounded-md mt-6">
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
