import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "opacity-95 md:backdrop-blur-md shadow-md bg-[#273f2d]"
          : "shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <img src={logo1} alt="Logo" className="h-5 w-5" />
          <span className="font-semibold text-white">markethink</span>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-6 text-white text-base lg:text-lg">
          <Link
            to="/"
            className="px-2 py-2 border-b-2 border-transparent hover:border-green-600 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/"
            className="px-2 py-2 border-b-2 border-transparent hover:border-green-600 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/service"
            className="px-2 py-2 border-b-2 border-transparent hover:border-green-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/footer"
            className="px-2 py-2 border-b-2 border-transparent hover:border-green-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        <button className="hidden md:block ml-4 md:ml-6 px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full border border-[#98AA28] hover:bg-[#EDFF8166] text-white">
          Free Trial
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 text-white border-t border-gray-200 text-base bg-[#273f2d]">
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/service" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/footer" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
