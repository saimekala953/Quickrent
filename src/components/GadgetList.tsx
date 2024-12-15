import React from 'react';
import { Check, Upload } from 'lucide-react';

const gadgets = [
  {
    name: 'Gaming Console',
    price: '$25/day',
    features: ['Latest PS5/Xbox', '2 Controllers', 'Popular Games Included', '4K Gaming'],
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Professional Camera',
    price: '$35/day',
    features: ['Full Frame DSLR', 'Multiple Lenses', 'Tripod Included', '4K Video'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Premium Laptop',
    price: '$45/day',
    features: ['Latest Processor', '16GB RAM', 'Dedicated GPU', '4K Display'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
];

export default function GadgetList() {
  return (
    <div id="gadgets" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose from our selection of premium gadgets
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {gadgets.map((gadget) => (
            <div key={gadget.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <img src={gadget.image} alt={gadget.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">{gadget.name}</h3>
                <p className="mt-4 text-xl text-indigo-600">{gadget.price}</p>
                <ul className="mt-6 space-y-4">
                  {gadget.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Upload className="mr-2 h-5 w-5" />
            List Your Gadget
          </button>
        </div>
      </div>
    </div>
  );
}