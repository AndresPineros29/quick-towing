import { motion as m } from "framer-motion";
import { transition01 } from "../transitions";
import grua from "../assets/grua-header.png";

const Header = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition01}
      id="home"
      className="sm:py-16 py-6 flex md:flex-row items-center flex-col"
    >
      <div className="justify-center items-start flex-col flex-1 xl:px-0 sm:px-16 px-6">
        <m.div
          initial={{ y: "-50%" }}
          animate={{ y: "0" }}
          transition={transition01}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold text-4xl sm:text-[52px] lg:text-7xl text-center  text-white leading-[48px] md:leading-[55px]">
            Blazing Fast Towing is <br className="sm:block hidden" />{" "}
            <span> Your Fast Solution</span>{" "}
          </h1>
        </m.div>

        <m.p
          initial={{ y: "-50%" }}
          animate={{ y: "0" }}
          transition={transition01}
          className="font-normal text-justify sm:text-start text-dimWhite sm:text-xl leading-[30.8px] text-red-200 mt-5 lg:mt-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
          interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
          iaculis. Sed sem lectus, imperdiet sit amet semper ac, lobortis congue
          ligula. Proin suscipit justo nunc, vitae facilisis ipsum accumsan ac.
          Quisque imperdiet dolor venenatis euismod ultricies.
        </m.p>

        <div className="flex justify-start gap-28 items-center my-5 lg:mt-10">
          <m.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={transition01}
              className="text-sm lg:text-2xl font-medium text-black bg-white px-4 py-3 rounded-lg"
            >
              <a href="#contact">Contact Us</a>
            </m.span>
          </m.div>
          <m.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={transition01}
              className="text-sm lg:text-2xl font-medium text-white border-white border-2  px-4 py-3 rounded-lg cursor-pointer"
            >
              Learn More
            </m.span>
          </m.div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center md:my-0 my-10 relative">
        <m.img
          initial={{ x: "50%" }}
          animate={{ x: "0" }}
          transition={transition01}
          draggable="false"
          src={grua}
          alt="truck"
          className="w-[80%] lg:w-[90%] md:w-full relative z-[1]"
        />
        {/* gradient start */}
        <m.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={transition01}
          className="absolute z-[0] w-[70%] h-[80%] bottom-24  bg-gradient-to-t from-white to-white/0 rounded-full"
        />
        {/* gradient end */}
      </div>
    </m.section>
  );
};

export default Header;
