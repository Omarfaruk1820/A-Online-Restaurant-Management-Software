import { NavLink } from "react-router-dom";
import foodPhoto from "../../assets/assets/others/authentication1.png";
import { FaArrowCircleUp, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      {/* 🔹 Main Footer */}
      <footer className="footer flex flex-col md:flex-row justify-between bg-neutral text-neutral-content p-10 gap-10 md:gap-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <NavLink to="/">
            <img
              src={foodPhoto}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
          </NavLink>
          <p className="font-bold text-white">
            Joinob Ranna Ghor
            <br />
            Providing reliable food since 2024
          </p>
          <p className="text-sm text-gray-300">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h6 className="footer-title text-lg font-semibold text-white">Social</h6>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>
      </footer>

      {/* 🔹 Bottom Footer / Back to Top */}
      <footer className="py-5 px-4 bg-neutral text-neutral-content border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Joinob Software Company Ltd. All rights reserved.
        </p>
        <NavLink
          to="#"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-white transition-colors text-2xl flex items-center justify-center"
        >
          <FaArrowCircleUp />
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
