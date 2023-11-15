import { motion as m } from "framer-motion";

import { useState } from "react";
import {
  FaWhatsapp,
  FaArrowCircleUp,
  FaFacebookF,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Corner = () => {
  const [onView, setOnView] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <section className="fixed bottom-3 right-3 md:bottom-14 md:right-14 z-[5]">
      <div className="flex flex-col gap-3">
        <m.div
          initial={{ y: "480%" }}
          whileInView={{ y: 0 }}
          className={`flex justify-center items-center bg-gray-300 w-14 h-14 rounded-full text-3xl text-gray-800 cursor-pointer ${
            onView ? "block" : "hidden"
          }`}
        >
          <FaPhone />
        </m.div>
        <m.div
          initial={{ y: "360%" }}
          whileInView={{ y: 0 }}
          className={`flex justify-center items-center bg-green-500 w-14 h-14 rounded-full text-4xl text-white cursor-pointer ${
            onView ? "block" : "hidden"
          }`}
        >
          <FaWhatsapp />
        </m.div>
        <m.div
          initial={{ y: "240%" }}
          whileInView={{ y: 0 }}
          className={`flex justify-center items-center bg-gradient-to-tl from-purple-500 to-orange-500  w-14 h-14 rounded-full text-4xl text-white cursor-pointer ${
            onView ? "block" : "hidden"
          }`}
        >
          <FaInstagram />
        </m.div>
        <m.div
          initial={{ y: "120%" }}
          whileInView={{ y: 0 }}
          className={`flex justify-center items-center bg-blue-800 w-14 h-14 rounded-full text-4xl text-white cursor-pointer ${
            onView ? "block" : "hidden"
          }`}
        >
          <FaFacebookF />
        </m.div>
        <div
          className="flex justify-center items-center bg-gray-300 w-14 h-14 rounded-full text-3xl text-gray-800 cursor-pointer"
          onClick={() => setOnView(!onView)}
        >
          <FaMessage />
        </div>
        <div
          className="flex w-14 h-14 justify-center text-6xl text-gray-300 cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp />
        </div>
      </div>
    </section>
  );
};

export default Corner;
