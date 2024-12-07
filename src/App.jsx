import { useState } from "react";
import { FaBars, FaBook, FaCheckCircle, FaFacebook, FaFileAlt, FaInstagram, FaLinkedin, FaMobileAlt, FaMoneyBillAlt, FaTimes, FaTwitter, FaUser } from "react-icons/fa";

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
        <section className="relative mt-28 bg-[#ABD3FF4A] text-[#007AFF] py-20 rounded-xl shadow-xl">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl  text-gray-900 leading-snug">
                Empower Your <br /> Workforce with Over <br /> 10000+ Online <br /> Training Courses
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Industry-specific, accessible, and compliant online courses for <br /> safety, compliance, workplace diversity, and beyond.
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
        <section className="py-16 mt-9">
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
                  width: '400px',
                  height: '400px',
                }}
              >
                {/* Overlay for Text and Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2 mt-48">Product 1</h3>
                  <p className="text-sm mb-4">
                    Discover this amazing product designed to solve your challenges effectively.
                  </p>
                  <button className=" py-1 bg-white text-[#007AFF] font-semibold rounded-full shadow-lg">
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
                  width: '400px',
                  height: '400px',
                }}
              >
                {/* Overlay for Text and Button */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2 mt-48">Product 2</h3>
                  <p className="text-sm mb-4">
                    Discover this amazing product designed to solve your challenges effectively.
                  </p>
                  <button className="py-1 bg-white text-[#007AFF] font-semibold rounded-full shadow-lg">
                    Learn More &rarr;
                  </button>
                </div>
              </div>

              {/* Forward Icon */}
              <button
                className="flex items-center justify-center w-12 h-12 bg-[#FF9D42] text-white"
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

        <section className="bg-gradient mt-16 py-20  relative">
          <div className="gap-12 mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-6xl text-black leading-tight mb-6">
                Explore Our  <br /> Prime <br /> Subscription
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Coggno Prime provides a subscription to thousands of relevant online professional development training courses and modules to best in breed curriculum. With Coggno Prime, your employees have unlimited access to the training they need anywhere, anytime, on any device.              </p>
              <button className="px-10 py-4 text-white bg-[#007AFF] font-semibold rounded-full shadow-xl transform hover:scale-110 transition duration-300 ease-in-out">
                Unlock Prime →
              </button>
              <span>
                <button className="px-10 py-4 text-[#007AFF]">
                  Learn More →
                </button>
              </span>
            </div>

            {/* Right Section */}
            <div className="mt-10 md:mt-0 md:w-2/3 flex items-center gap-8 justify-center md:justify-between">

              {/* Card 1 */}
              <div className="flex flex-col items-center bg-[#007AFF] rounded-xl shadow-xl w-[270px] h-[350px] p-6">
                <h3 className="text-3xl font-semibold mb-4 text-center text-white">Software Prime Set</h3>
                <img
                  src="/images/zz 1.png"
                  alt="Product 1"
                  className="mb-4 max-w-xs object-cover"
                  style={{ maxWidth: '100px' }}
                />
                <p className="text-sm text-center text-white mb-6">
                  Prime Software Library is a collection of relevant and up to date instructional Software training curriculum.                </p>
                <button className="px-6 py-3 text-[#007AFF] bg-white font-semibold rounded-full shadow-lg hover:bg-[#FF5A12] hover:text-white transition duration-300">
                  Learn More &rarr;
                </button>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow-xl w-[270px] h-[350px] p-6">
                <h3 className="text-3xl font-semibold mb-4 text-center text-gray-800">Soft Skills Prime Set</h3>
                <img
                  src="/images/zz 1.png"
                  alt="Product 2"
                  className="mb-4 max-w-xs "
                  style={{ maxWidth: '100px' }}
                />
                <p className="text-sm text-center text-gray-600 mb-6">
                  Prime Software Library is a collection of relevant and up to date instructional Software training curriculum.                </p>
                <button className="px-6 py-3 bg-[#007AFF] text-white font-semibold rounded-full shadow-lg  hover:text-white transition duration-300">
                  Learn More &rarr;
                </button>
              </div>

              {/* Forward Icon */}
              <button
                className="flex items-center justify-center w-12 h-12 text-[#007AFF]"
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

        <section className="py-2 rounded-t-lg">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-5xl text-center flex-1 text-gray-900 mb-4 md:mb-0">
                Featured Courses
              </h2>
            </div>
            {/* Cards Section */}
            <div className="flex gap-9 mx-auto justify-center flex-wrap">
              {[
                {
                  title: "Marketing",
                  icon: "->",
                  text: "100+ Experts | 400+ Units",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                },
                {
                  title: "Business",
                  icon: "->",
                  text: "100+ Experts | 400+ Units",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                },
                {
                  title: "Software",
                  icon: "->",
                  text: "100+ Experts | 400+ Units",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#007AFF] rounded-3xl w-[270px] h-[350px] p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="w-full h-1 bg-white mb-1 mx-auto"></div>
                  <p className="text-sm text-white mb-4">
                    {item.text}
                  </p>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full object-cover rounded-lg mb-4"
                  />
                </div>
              ))}

              <span className="flex items-center">
                {/* View More Icon */}
                <button
                  className="flex items-center justify-center w-12 h-12 text-[#007AFF]"
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
              </span>
            </div>
            {/* More Button */}
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-[#007AFF] text-white font-medium rounded-full shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                View All Courses →
              </button>
            </div>
          </div>
        </section>


        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-5xl text-center text-gray-900 mb-4">Build Your Training Library With Ease</h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Everything you need to build a complete training library in one place.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Fast</h3>
                    <p className="text-gray-600">
                      Rapidly search our 10,000+ collection of courses and find the ones you need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Cost Effective</h3>
                    <p className="text-gray-600">
                      Building your training library is fast, easy, and cost-effective.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Convenience</h3>
                    <p className="text-gray-600">
                      Our complete selection of curated courses are all available in one place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Security</h3>
                    <p className="text-gray-600">
                      The data you share is safe with SSL-Certificates and 256-Bit Encryption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Analyze</h3>
                    <p className="text-gray-600">
                      Realize your workforces true potential through online learning programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mr-4"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Variety</h3>
                    <p className="text-gray-600">
                      A wide range of courses covering sales and marketing, HR, management, safety, and technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-12 text-center">
              <button className="bg-[#007AFF] text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-700">
                Unlock Prime →
              </button>
            </div>
          </div>
        </section>


        <section className="py-9 rounded-t-lg">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-5xl text-center flex-1 text-gray-900 mb-4 md:mb-0">
                What Our Clients Say
              </h2>
            </div>
            {/* Cards Section */}
            <div className="flex gap-9 mx-auto justify-center flex-wrap">
              {[
                {
                  title: "Oliva Wilson",
                  icon: "->",
                  text: "I was impressed with Coggno’s approach and their high quality courses. They truly provided exactly what my team and I needed. I highly recommend them and will definitely be using them again!",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  owner: "Owner Larana, Inc.",
                },
                {
                  title: "Oliva Wilson",
                  icon: "->",
                  text: "I was impressed with Coggno’s approach and their high quality courses. They truly provided exactly what my team and I needed. I highly recommend them and will definitely be using them again!",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  owner: "Owner Larana, Inc.",
                },
                {
                  title: "Oliva Wilson",
                  icon: "->",
                  text: "I was impressed with Coggno’s approach and their high quality courses. They truly provided exactly what my team and I needed. I highly recommend them and will definitely be using them again!",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  owner: "Owner Larana, Inc.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#98c9fe] rounded-3xl w-[300px] h-[370px]  p-6 shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-bold text-black mb-1 mt-12">{item.title}</h3>
                  <p className="text-sm text-black mb-1">{item.owner}</p>
                  <div className="w-32 h-1 bg-white mb-3"></div>
                  <p className="text-sm text-black mb-4">{item.text}</p>

                  {/* Rating */}
                  <div className="flex items-center">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                  </div>
                </div>
              ))}

              <span className="flex items-center">
                {/* View More Icon */}
                <button
                  className="flex items-center justify-center w-12 h-12 text-[#007AFF]"
                  onClick={() => console.log("Forward button clicked")}
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
              </span>
            </div>
          </div>
        </section>

        <section className="py-20 rounded-t-lg">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-center items-center mb-12">
              <h2 className="text-5xl text-center text-gray-900 mb-4 md:mb-0">
                Latest Insights on Workplace <br /> Training & Compliance
              </h2>
            </div>

            {/* Cards Section */}
            <div className="flex gap-9 mx-auto justify-center flex-wrap">
              {[
                {
                  text: "As industries evolve, so do the skills needed to thrive. Explore the top five skills that you need to stay ahead of the curve",
                  title: "5 Key Skills Every Professional Needs to Succeed in 2024",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  date: "Dec 7, 2024",
                },
                {
                  text: "As industries evolve, so do the skills needed to thrive. Explore the top five skills that you need to stay ahead of the curve",
                  title: "5 Key Skills Every Professional Needs to Succeed in 2024",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  date: "Dec 8, 2024",
                },
                {
                  text: "As industries evolve, so do the skills needed to thrive. Explore the top five skills that you need to stay ahead of the curve",
                  title: "5 Key Skills Every Professional Needs to Succeed in 2024",
                  imageSrc: "images/8 1.png", // Replace with actual image source
                  date: "Dec 9, 2024",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#ABD3FF4A] rounded-3xl w-[300px] h-auto p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col"
                >
                  {/* Image */}
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                  />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="text-sm text-gray-500 mb-4">{item.text}</p>

                  {/* Button and Date */}
                  <div className="flex justify-between items-center mt-auto">
                    <button className="text-sm text-[#007AFF]">
                      Find out more →
                    </button>
                    <span className="text-sm text-gray-600">{item.date}</span>
                  </div>
                </div>
              ))}

              <span className="flex items-center mt-9">
                {/* View More Icon */}
                <button
                  className="flex items-center justify-center w-12 h-12 text-[#007AFF]"
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
              </span>
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