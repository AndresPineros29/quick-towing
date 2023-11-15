import logo from "../assets/logo-quick-towing.png";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center sm:py-10 py-6 md:py-14">
      <span>
        <img
          draggable="false"
          src={logo}
          className="max-w-[80px] sm:max-w-[150px] md:max-w-[200px]"
        />
      </span>
      <span>
        <h5 className="sm:text-lg font-bold text-white">Navigation</h5>
        <ul className="text-gray-300 font-medium cursor-pointer text-xs sm:text-base">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">AboutUs</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </span>
      <span>
        <h5 className="sm:text-lg font-semibold text-white">Contact</h5>
        <ul className="text-gray-300 font-medium cursor-pointer text-xs sm:text-base">
          <li>+1 305-505-8787</li>
          <li>contact@quicktowing.com</li>
          <li>Miami, Florida</li>
        </ul>
      </span>
    </div>
  );
};

export default Footer;
