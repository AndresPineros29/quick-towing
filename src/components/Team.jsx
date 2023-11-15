import { motion as m } from "framer-motion";
import { transition01 } from "../transitions";
import exp1 from "../assets/exp-1.jpg";
import exp2 from "../assets/exp-2.jpg";
import exp3 from "../assets/exp-3.jpg";

const Team = () => {
  return (
    <div className="sm:py-16 py-6 md:py-24">
      <div className="flex flex-col gap-14 xl:px-0 sm:px-16">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-white font-bold text-4xl md:text-6xl">
            Expert Team
          </h3>
          <p className="text-gray-300 text-xl text-center max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            interdum nisi. Curabitur eu massa felis. Etiam interdum fermentum
            iaculis. Sed sem lectus, imperdiet sit amet semper ac, lobortis
            congue ligula.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-around">
          <m.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={transition01}
            src={exp1}
            className="md:max-w-xs lg:max-w-[400px] xl:max-w-md border-primary border-4 my-5 lg:m-0 "
          />
          <m.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={transition01}
            src={exp2}
            className="md:max-w-xs lg:max-w-[400px] xl:max-w-md border-primary border-4 my-5 lg:m-0 "
          />
          <m.img
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={transition01}
            src={exp3}
            className="md:max-w-xs lg:max-w-[400px] xl:max-w-md border-primary border-4 my-5 lg:m-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
