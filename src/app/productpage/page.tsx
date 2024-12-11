import React from 'react';
import Link from 'next/link';

const ProductPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
        {/* Left Column - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Place product images here */}
          <img
            src="/images/Rectangle 134.png"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/images/Rectangle 136.png"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/images/Rectangle 137.png"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/images/Rectangle 138.png"
            alt="Product"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Column - Product Info */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Playwood Arm Chair</h1>
          <p className="text-lg text-gray-600 mb-4">$250.00</p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            labore.
          </p>
          <div className="flex items-center mb-6">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm text-gray-700 ml-2">Furniture</span>
          </div>
          <Link href="/shopcart"> 
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button></Link>

        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-200 py-12">
        <div className="mb-8">
          <ul className="flex space-x-4">
            <li className="text-blue-600 font-semibold">Description</li>
            <li className="text-gray-500">Additional Info</li>
            <li className="text-gray-500">Reviews</li>
            <li className="text-gray-500">Video</li>
          </ul>
        </div>
        <div className="text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus vestibulum mauris. Sed consequat, leo eget bibendum
            sodales, augue velit cursus nunc, quis gravida magna mi a libero.
          </p>
          <p className="mt-4">
            Fusce vel dui. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, enim.
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="py-12">
        <h2 className="text-xl font-semibold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Product Cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Place related product image here */}
            <img
              src="/images/Rectangle 128.png"
              alt="Related Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600">$120.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/Group 233.png"
              alt="Related Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600">$80.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/Rectangle 130.png"
              alt="Related Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600">$200.00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/Rectangle 131.png"
              alt="Related Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600">$95.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
