import { motion as m } from "framer-motion";
import { transition01 } from "../transitions";

const Ready = () => {
  return (
    <div className="bg-gray-800">
      <m.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={transition01}
        className=" flex flex-col sm:flex-row justify-around items-center py-10 md:py-14"
      >
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl font-extrabold text-white">
          WE ARE READY
        </span>
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl font-extrabold text-primary">
          24/7 HOURS
        </span>
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl font-extrabold text-white">
          TO HELP YOU
        </span>
      </m.div>
    </div>
  );
};

export default Ready;
