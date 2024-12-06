import { FaBook, FaCheckCircle, FaFileAlt, FaLightbulb, FaMobileAlt, FaMoneyBillAlt, FaTrophy, FaUser } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <header className=" text-white py-2 fixed w-full z-10 ">
        <div className=" mt-4 mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <a
              href="/"
              className="text-[#007AFF] hover:text-[#FF6A13] transition-all"
            >
              Coggno
            </a>
          </div>

          {/* Navbar Links for Larger Screens */}
          <nav className="hidden md:flex whitespace-nowrap items-center space-x-8 text-lg bg-gradient-to-r from-[#007AFF] to-[#00C6FF] rounded-full px-8 py-4 shadow-lg">
            <a href="#courses" className="hover:text-[#FF6A13] transition-all">
              Courses
            </a>
            <a
              href="#solutions"
              className="hover:text-[#FF6A13] transition-all"
            >
              Solutions
            </a>
            <a href="#products" className="hover:text-[#FF6A13] transition-all">
              Products
            </a>
            <a href="#pricing" className="hover:text-[#FF6A13] transition-all">
              Pricing
            </a>
            <a href="#about-us" className="hover:text-[#FF6A13] transition-all">
              About Us
            </a>
            <a
              href="#course-dispatch"
              className="hover:text-[#FF6A13] transition-all"
            >
              Course Dispatch
            </a>
            <a
              href="#unlock-prime"
              className="hover:text-[#FF6A13] bg-white rounded-full py-2 px-4 text-[#007AFF] transition-all"
            >
              Unlock Prime
            </a>
          </nav>

          {/* Call to Action Button */}
          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Login Button */}
            <a
              href="#login"
              className="text-[#007AFF] py-2 px-2 rounded-full hover:bg-[#007AFF] hover:text-white transition-all duration-300"
            >
              Login
            </a>

            {/* Sign Up Button */}
            <a
              href="#signup"
              className="bg-[#007AFF] whitespace-nowrap text-white py-2 px-6 rounded-full hover:bg-[#0056b3] transition-all duration-300"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={30} className="text-white" />
            ) : (
              <FaBars size={30} className="text-white" />
            )}
          </div>
        </div>

        {/* Mobile Menu (Conditional rendering based on state) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-[#007AFF] to-[#00C6FF] text-white absolute w-full top-16 left-0 py-6 flex flex-col items-center space-y-6">
            <a
              href="#courses"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Courses
            </a>
            <a
              href="#solutions"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Solutions
            </a>
            <a
              href="#products"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Products
            </a>
            <a
              href="#pricing"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Pricing
            </a>
            <a
              href="#about-us"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              About Us
            </a>
            <a
              href="#course-dispatch"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Course Dispatch
            </a>
            <a
              href="#unlock-prime"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Unlock Prime
            </a>
            <a
              href="#login"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Login
            </a>
            <a
              href="#sign-up"
              className="text-lg hover:text-[#FF6A13] transition-all"
            >
              Sign Up
            </a>
            <a
              href="#cta"
              className="bg-[#FF6A13] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>
        )}
      </header>
      <div className="font-sans  mx-auto container py-10">
        {/* Hero Section */}
        <section className="relative mt-20 bg-[#ABD3FF4A] text-[#007AFF] py-20 rounded-xl shadow-xl">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 leading-snug">
                Empower Your Workforce with Over
                <span className="text-[#007AFF]"> 10000+ Online Training Courses</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Industry-specific, accessible, and compliant online courses for safety, compliance, workplace diversity, and beyond.
              </p>
              <button className="mt-8 px-6 py-3 bg-[#FFAA33] text-white font-medium rounded-full shadow hover:shadow-lg transition-transform duration-300">
                Book a Demo
              </button>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <img
                src="/images/hero.png"
                alt="Workforce Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-12 max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-700 font-medium">Trusted By:</p>
            <div className="flex justify-center gap-8 mt-4">
              <img src="/images/img5.png" alt="DHL" className="h-[70px]" />
              <img src="/images/img6.png" alt="DHL" className="h-[70px]" />
              <img src="/images/img7.png" alt="DHL" className="h-[70px]" />
              <img src="/images/img8.png" alt="DHL" className="h-[70px]" />

            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#F9FAFB] rounded-t-lg mt-9">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-4xl flex-1 text-gray-900 mb-4 md:mb-0">
                Why Choose Coggno for Your Online Training Needs?
              </h2>
              <p className="text-gray-600 flex-1 text-sm md:ml-9 text-center md:text-left">
                Our online courses provide individual training experiences that are
                relevant to today’s issues and challenges. Equip your team with
                essential skills for compliance and success. Our courses empower HR
                and compliance professionals to foster growth and excellence.
              </p>
            </div>
            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaBook size={30} />,
                  title: "10,000+ Courses",
                },
                {
                  icon: <FaMoneyBillAlt size={30} />,
                  title: "Cost-Effective Pricing",
                },
                {
                  icon: <FaMobileAlt size={30} />,
                  title: "Mobile Friendly",
                },
                {
                  icon: <FaUser size={30} />,
                  title: "Easy To Use",
                },
                {
                  icon: <FaCheckCircle size={30} />,
                  title: "Full Regional Compliance",
                },
                {
                  icon: <FaFileAlt size={30} />,
                  title: "Printable Certificate",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#ABD3FF4A] rounded-3xl w-72  p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <div className="w-16 h-16 bg-[#007AFF] text-[white] rounded-full flex items-center justify-center mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 text-center">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            {/* Button */}
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-[#FF8C00] text-white font-medium rounded-full shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                Book Demo →
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#FF9D42] to-[#FF9D42] text-white py-20 rounded-xl relative">
          <div className="gap-12 mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-6xl font- text-white leading-tight mb-6">
                Check Out Our Popular Products
              </h2>
              <p className="text-x-lg text-white mb-8">
                Discover our most popular products, handpicked to address today’s critical compliance and workplace skill needs. Each is crafted by industry experts to ensure the highest quality
              </p>
              <button className="px-10 py-4 bg-white text-[#007AFF] font-semibold rounded-full shadow-xl transform hover:scale-110  transition duration-300 ease-in-out">
                Book a Demo
              </button>
            </div>

            {/* Right Section */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex items-center gap-4">
              {/* Image 1 with Overlay Content */}
              <div
                className="relative flex items-center justify-center rounded-lg"
                style={{
                  backgroundImage: `url(/images/img9.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '300px',
                  height: '300px',
                }}
              >
                {/* Overlay for Text and Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2 mt-24">Product 1</h3>
                  <p className="text-sm text-center mb-4">
                    Discover this amazing product designed to solve your challenges effectively.
                  </p>
                  <button className="px-6 py-2 bg-white text-[#FF6A13] font-semibold rounded-full shadow-lg hover:bg-[#FF6A13] hover:text-white transition duration-300">
                    Learn More &rarr;
                  </button>
                </div>
              </div>

              {/* Image 2 with Overlay Content */}
              <div
                className="relative flex items-center justify-center rounded-lg"
                style={{
                  backgroundImage: `url(/images/img10.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '300px',
                  height: '300px',
                }}
              >
                {/* Overlay for Text and Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2 mt-24">Product 2</h3>
                  <p className="text-sm text-center mb-4">
                    Discover this amazing product designed to solve your challenges effectively.
                  </p>
                  <button className="px-6 py-2 bg-white text-[#FF6A13] font-semibold rounded-full shadow-lg hover:bg-[#FF6A13] hover:text-white transition duration-300">
                    Learn More &rarr;
                  </button>
                </div>
              </div>

              {/* Forward Icon */}
              <button
                className="flex items-center justify-center w-12 h-12 bg-[#FF9D42] text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
                onClick={() => console.log('Forward button clicked')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

          </div>
        </section>
      </div>
      <footer className="bg-gradient-to-r from-[#007AFF] to-[#00C6FF] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 - Logo and About Section */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">Coggno</h3>
              <p className="text-lg mb-6">
                Empowering teams with the best online training tools. Our
                platform provides accessible learning solutions for businesses
                worldwide.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white text-2xl hover:text-[#FF6A13] transition-all"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-[#FF6A13] transition-all"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-[#FF6A13] transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-[#FF6A13] transition-all"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-4 text-lg">
                <li>
                  <a href="#" className="hover:text-[#FF6A13] transition-all">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6A13] transition-all">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6A13] transition-all">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6A13] transition-all">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="text-lg mb-4">
                Stay updated with our latest news and courses.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="p-4 rounded-full text-black w-full"
                />
                <button className="px-6 py-3 bg-[#FF6A13] text-white font-semibold rounded-full hover:scale-105 transition duration-300 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row - Copyright and Terms */}
          <div className="mt-12 text-center">
            <p className="text-lg">
              Developed by Time Global <br />
              <a
                href="#"
                className="text-white hover:text-[#FF6A13] transition-all"
              >
                Terms of Service
              </a>{" "}
              |
              <a
                href="#"
                className="text-white hover:text-[#FF6A13] transition-all"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;