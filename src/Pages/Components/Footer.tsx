import backgroundImage from "../../assets/Mask Group.png";
import sideimage from "../../assets/Group 294.png";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/Category.png";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import  { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <section className="px-6 sm:px-20 lg:px-40 py-10">
        <div
          className="relative bg-[#273f2d] bg-cover bg-center text-white h-[auto] min-h-[400px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="contentinfo"
          aria-label="Footer Section"
        >
        <div className="absolute right-15 -bottom-4 translate-x-1/2 hidden lg:block">
  <img
    src={sideimage}
    alt="sidepyramid"
    className="w-40 h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 object-contain"
  />
</div>



          <div className="p-6 sm:p-10 lg:p-30 flex flex-col justify-center max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Subscribe to get information,
              latest news and other interesting offers about
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo1} alt="Logo" className="h-5 w-5" />
              <span className="font-semibold text-white">markethink</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none bg-white w-full sm:w-auto flex-1"
                placeholder="Enter your email"
              />
              <button className="bg-[#98AA28] w-full sm:w-44 h-12 rounded-full hover:bg-[#a7c36a] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
     <section className="px-4 py-8 sm:px-8 md:px-16 lg:px-32">
  <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
    
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-4">
        <img src={logo2} alt="Logo" className="h-5 w-5" />
        <span className="font-semibold text-black">markethink</span>
      </div>
<p className="mb-4 w-full sm:w-3/4 lg:w-64">
        Marketing is a company that focuses on developing company’s strategy to increase digital marketing.
      </p>
      <div className="flex gap-4">
        <FaFacebook className="text-[#a2bdaa]" />
        <FaTwitter className="text-[#a2bdaa]" />
        <FaInstagram className="text-[#a2bdaa]" />
      </div>
    </div>

    <div className="w-full sm:w-auto">
      <h3 className="text-lg font-semibold mb-2">Menu</h3>
      <ul className="space-y-2 text-sm">
        <li><Link to="/" className="hover:underline">Features</Link></li>
        <li><Link to="/" className="hover:underline">Pricing</Link></li>
        <li><Link to="/service" className="hover:underline">About</Link></li>
        <li><Link to="/footer" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    <div className="w-full sm:w-auto">
      <h3 className="text-lg font-semibold mb-2">Services</h3>
      <p>Content Strategy</p>
      <p>Content Development</p>
      <p>Content Creation</p>
      <p>Content Optimization</p>
    </div>

    <div className="w-full sm:w-auto">
      <h3 className="text-lg font-semibold mb-2">Company</h3>
      <p>Site Map</p>
      <p>Terms of Use</p>
      <p>Privacy Notice</p>
      <p>Modern Slavery</p>
    </div>

  </div>
</section>


       <div className="text-center text-gray-400 mt-10">
  <hr className="w-3/4 mx-auto mb-4 border-gray-600" />
  &copy; Copyright Markethink. All rights reserved.
</div>

    </footer>
  );
};

export default Footer;
