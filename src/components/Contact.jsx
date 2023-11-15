import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaFacebookF, FaPhone, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="my-5 sm:py-16 py-6">
      <div className="xl:px-0 sm:px-16 px-6 flex gap-10 md:gap-0 flex-col items-center md:items-stretch md:flex-row justify-around ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.39567886265!2d-80.31185919589296!3d25.78253887210818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1700030364285!5m2!1ses!2sco"
            allowfullscreen=""
            loading="lazy"
            className="h-[300px] sm:w-[600px] sm:h-[400px] md:w-[600px] md:h-[450px]"
          ></iframe>
        </div>
        <div className="grid content-around gap-5 md:gap-0 text-white">
          <span className="flex flex-row gap-5 items-center text-xl sm:text-3xl cursor-pointer">
            <FaLocationDot className="text-primary" />
            <h4>Miami, Florida</h4>
          </span>
          <span className="flex flex-row gap-5 items-center text-xl sm:text-3xl cursor-pointer">
            <FaPhone className="text-primary" />
            <h4>+1 305-505-8787</h4>
          </span>
          <span className="flex flex-row gap-5 items-center text-xl sm:text-3xl cursor-pointer">
            <FaWhatsapp className="text-primary" />
            <h4>+1 305-505-8787</h4>
          </span>
          <span className="flex flex-row gap-5 items-center text-xl sm:text-3xl cursor-pointer">
            <FaInstagram className="text-primary" />
            <h4>@quick_Towing</h4>
          </span>
          <span className="flex flex-row gap-5 items-center text-xl sm:text-3xl cursor-pointer">
            <FaFacebookF className="text-primary" />
            <h4>Quick Towing Fl</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
