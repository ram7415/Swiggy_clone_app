// import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FEFFD2] text-[#FF7D29]">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-6">
          Welcome to Swiggy, your one-stop destination for all your food
          cravings! Whether you are at home, at work, or on the go, Swiggy
          delivers your favorite meals from the best restaurants in town, right
          to your doorstep.
        </p>
        <div className="bg-[#FFEEA9] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At Swiggy, our mission is to provide fast, reliable, and delicious
            food delivery services. We are committed to connecting you with the
            best restaurants and ensuring that your food arrives hot and fresh
            every time.
          </p>
        </div>
        <div className="bg-[#FFBF78] p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <UserClass
            name={"Ram class component"}
            location={"Indore"}
            contact={"yram"}
          />
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or feedback, feel free to reach out to us
            at{" "}
            <a
              href="mailto:contact@swiggy.com"
              className="text-[#FF7D29] underline"
            >
              contact@swiggy.com
            </a>
            . We would love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
