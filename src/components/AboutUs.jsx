import { motion as m } from "framer-motion";
import { transition01 } from "../transitions";
import about from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex  justify-around items-center my-5 sm:py-16 py-6"
    >
      <div className="xl:px-0 sm:px-16 px-6 flex md:flex-row flex-col-reverse">
        <div className="flex justify-center relative mt-10 md:m-0">
          <img
            draggable="false"
            src={about}
            alt="trucks"
            className="w-[80%] md:w-[50%] z-[1]"
          />
          <m.div
            initial={{ x: "10%" }}
            whileInView={{ x: 0 }}
            transition={transition01}
            className="hidden md:block absolute right-44 -bottom-10 w-[50%] h-[100%] bg-primary "
          />
          <m.div
            initial={{ x: "-10%" }}
            whileInView={{ x: 0 }}
            transition={transition01}
            className="hidden md:block absolute left-44 -top-10 w-[50%] h-[100%] border-4 border-primary "
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-[28px] text-center sm:text-5xl font-bold text-primary">
            About Auick Towing
          </h3>
          <p className="text-xl text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
            iaculis. Sed sem lectus, imperdiet sit amet semper ac, lobortis
            congue ligula. Proin suscipit justo nunc, vitae facilisis ipsum
            accumsan ac. Quisque imperdiet dolor venenatis euismod ultricies
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
