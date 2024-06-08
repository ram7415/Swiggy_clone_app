// import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-6 mb-6">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="text-center text-gray-600">
          Get to know more about Swiggy and our mission to serve you better.
        </p>
      </header>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Swiggy, our mission is to make your dining experience more
            enjoyable and convenient. We strive to bring the best food from your
            favorite local restaurants straight to your doorstep. With our
            user-friendly platform, swift delivery, and excellent customer
            service, we aim to be your go-to choice for food delivery.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Swiggy was founded with the goal of revolutionizing the food
            delivery industry. Since our inception, we have grown exponentially
            and expanded our services to multiple cities. Our dedicated team
            works tirelessly to ensure that we meet the high standards we set
            for ourselves and continuously improve our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">
            At Swiggy, we hold ourselves to the highest standards of integrity,
            customer satisfaction, and innovation. We believe in fostering a
            positive and inclusive work environment where everyone is encouraged
            to share their ideas and contribute to our collective success.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Have any questions or feedback? We would love to hear from you.
            Reach out to us through the form below or connect with us on social
            media.
          </p>
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
        </section>
      </div>
    </div>
  );
};

export default About;
