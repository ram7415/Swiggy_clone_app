import React, { useState } from "react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("Partner Onboarding");

  const renderContent = () => {
    switch (activeTab) {
      case "Partner Onboarding":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Partner Onboarding</h2>
            <ul>
              <li className="mb-2">
                I want to partner my restaurant with Swiggy.
              </li>
              <li className="mb-2">
                What are the mandatory documents needed to list my restaurant on
                Swiggy?
              </li>
              <li className="mb-2">How do I track the onboarding status?</li>
              <li>
                How long does it take for my restaurant to go live after
                submitting the documents?
              </li>
            </ul>
          </div>
        );
      case "Legal":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Legal</h2>
            <ul>
              <li className="mb-2">
                What are the legal terms and conditions for partnering with
                Swiggy?
              </li>
              <li className="mb-2">How is the revenue share calculated?</li>
              <li className="mb-2">
                What are the compliance requirements for my restaurant?
              </li>
              <li>Where can I find the Swiggy partner agreement?</li>
            </ul>
          </div>
        );
      case "FAQs":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <ul>
              <li className="mb-2">
                How do I update my restaurant's menu on Swiggy?
              </li>
              <li className="mb-2">
                What should I do if there is an issue with an order?
              </li>
              <li className="mb-2">
                How do I access my restaurant's performance reports?
              </li>
              <li>What is Swiggy's policy on customer reviews and ratings?</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-sky-200">
      <header className="bg-white shadow p-6 mb-6">
        <h1 className="text-4xl font-bold text-center">Help & Support</h1>
        <p className="text-center text-gray-600">
          Let's take a step ahead and help you better.
        </p>
      </header>
      <div className="container mx-auto px-4 py-8 flex">
        <nav className="w-1/4 bg-orange-200 shadow-lg rounded-lg p-4">
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "Partner Onboarding"
                  ? "font-bold text-blue-500"
                  : ""
              }`}
              onClick={() => setActiveTab("Partner Onboarding")}
            >
              Partner Onboarding
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "Legal" ? "font-bold text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Legal")}
            >
              Legal
            </li>
            <li
              className={`p-4 cursor-pointer ${
                activeTab === "FAQs" ? "font-bold text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("FAQs")}
            >
              FAQs
            </li>
          </ul>
        </nav>
        <main className="w-3/4 bg-white shadow-lg rounded-lg p-6 ml-4">
          {renderContent()}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
