import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            EquiSports is your premium destination for high-quality sports
            equipment and gear. Elevate your game with our cutting-edge products
            tailored for professionals and enthusiasts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-yellow-400 transition">Home</li>
            <li className="hover:text-yellow-400 transition">All Products</li>
            <li className="hover:text-yellow-400 transition">My Account</li>
            <li className="hover:text-yellow-400 transition">Contact Us</li>
            <li className="hover:text-yellow-400 transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className="text-yellow-400">&#9993;</span>
              <span>support@equisports.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-400">&#9742;</span>
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-400">&#128204;</span>
              <span>123 Sports Avenue, New York, USA</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition transform hover:scale-125"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition transform hover:scale-125"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition transform hover:scale-125"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-600 transition transform hover:scale-125"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-700 transition transform hover:scale-125"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EquiSports. All Rights Reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li className="hover:text-yellow-400 transition">
              Terms of Service
            </li>
            <li className="hover:text-yellow-400 transition">Refund Policy</li>
            <li className="hover:text-yellow-400 transition">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
