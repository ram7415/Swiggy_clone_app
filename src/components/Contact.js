const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FEFFD2] text-[#FF7D29]">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          We would love to hear from you! Whether you have a question about our
          services, need assistance, or just want to provide feedback, feel free
          to reach out to us.
        </p>
        <div className="bg-[#FFEEA9] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 block w-full border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF7D29] text-white px-4 py-2 rounded hover:bg-[#FF5722]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
          <div className="bg-[#FFBF78] p-6 rounded-lg shadow-md">
            <p className="mb-2">Swiggy Headquarters</p>
            <p className="mb-2">123 Foodie Lane</p>
            <p className="mb-2">Indore, MP 452001</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@swiggy.com"
                className="text-[#FF7D29] underline"
              >
                contact@swiggy.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
