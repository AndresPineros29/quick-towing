import { useState } from "react";
import { motion as m } from "framer-motion";
import { FaGasPump, FaCarBurst, FaBatteryFull } from "react-icons/fa6";

const Services = () => {
  const [colorChange, setColorChange] = useState(false);
  const [colorChange2, setColorChange2] = useState(false);
  const [colorChange3, setColorChange3] = useState(false);

  return (
    <div id="services" className="sm:py-16 py-6 md:py-24">
      <div className="xl:px-0 sm:px-16 flex flex-col items-center">
        <h3 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl mb-10 sm:mb-16">
          Services
        </h3>
        {/* --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`flex flex-col items-center ${
              colorChange ? "bg-primary" : "bg-white"
            }`}
            onMouseEnter={() => setColorChange(true)}
            onMouseLeave={() => setColorChange(false)}
          >
            <FaCarBurst
              className={` text-7xl my-8 ${
                colorChange ? "text-white" : "text-primary"
              }`}
            />
            <h4
              className={`text-2xl font-semibold ${
                colorChange ? "text-white" : "text-gray-900"
              }`}
            >
              Accident Towing
            </h4>
            <p
              className={`p-10 text-center font-medium ${
                colorChange ? "text-white" : "text-gray-900"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
              iaculis.
            </p>
          </div>

          {/* --------------- */}
          <div
            className={`flex flex-col items-center ${
              colorChange2 ? "bg-primary" : "bg-white"
            }`}
            onMouseEnter={() => setColorChange2(true)}
            onMouseLeave={() => setColorChange2(false)}
          >
            <FaBatteryFull
              className={` text-7xl my-8 ${
                colorChange2 ? "text-white" : "text-primary"
              }`}
            />
            <h4
              className={`text-2xl font-semibold ${
                colorChange2 ? "text-white" : "text-gray-900"
              }`}
            >
              Battery Replacement
            </h4>
            <p
              className={`p-10 text-center font-medium ${
                colorChange2 ? "text-white" : "text-gray-900"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
              iaculis.
            </p>
          </div>
          {/* --------------- */}
          <div
            className={`flex flex-col items-center ${
              colorChange3 ? "bg-primary" : "bg-white"
            }`}
            onMouseEnter={() => setColorChange3(true)}
            onMouseLeave={() => setColorChange3(false)}
          >
            <FaGasPump
              className={` text-7xl my-8 ${
                colorChange3 ? "text-white" : "text-primary"
              }`}
            />
            <h4
              className={`text-2xl font-semibold ${
                colorChange3 ? "text-white" : "text-gray-900"
              }`}
            >
              Fual Supply
            </h4>
            <p
              className={`p-10 text-center font-medium ${
                colorChange3 ? "text-white" : "text-gray-900"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
              iaculis.
            </p>
          </div>
        </div>
        <m.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="my-10 sm:my-16 px-5 py-4 bg-primary text-4xl text-white font-bold rounded-xl"
        >
          See More
        </m.button>
      </div>
    </div>
  );
};

export default Services;
