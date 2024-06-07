import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ebeaea] text-[#000000] py-8 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-[#FFEEA9]">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/About" className="hover:text-[#FFEEA9]">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Contact" className="hover:text-[#FFEEA9]">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Grocery" className="hover:text-[#FFEEA9]">
                  Grocery
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/Cart" className="hover:text-[#FFEEA9]">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="mb-2">123 Swiggy Street, Food City</p>
            <p className="mb-2">Email: contact@swiggy.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4">
                <a href="#" className="hover:text-[#FFEEA9]">
                  Facebook
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-[#FFEEA9]">
                  Twitter
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-[#FFEEA9]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFEEA9]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; 2024 Swiggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
