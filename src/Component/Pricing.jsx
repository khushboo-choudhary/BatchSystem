import React from "react";
import { useNavigate } from "react-router-dom";
import pricingData from "./data.json";

export default function Pricing() {
  const navigate = useNavigate();
  console.log(pricingData, "This is pricing");

  const handleSub = () => {
    // toast.success('Subscribed')
    alert("Subscribed");
    navigate("/");
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.pricing.map((plan, index) => (
            <div className="border rounded-lg shadow-md p-6" key={index}>
              <h2 className="text-2xl font-semibold mb-4">{plan.plan} Plan</h2>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 10a5 5 0 0110 0 1 1 0 11-2 0 3 3 0 00-6 0 1 1 0 11-2 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center mb-6">
                <span className="text-xl font-semibold mr-2">$</span>
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={handleSub}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

