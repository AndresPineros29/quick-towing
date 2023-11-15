import { useState } from "react";
import { TestimonialsData } from "../data/TestimonialData";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const Testimonials = () => {
  const [comment, setComment] = useState(0);
  const cLength = TestimonialsData.length;

  return (
    <section
      id="testimonials"
      className="p-8 md:p-20 xl:px-56 xl:py-24 flex flex-col justify-center items-center bg-black/50"
    >
      <h2 className="my-14 text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold">
        It is Not just us who say it...
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-between w-full p-8 md:p-14 rounded-2xl bg-primary shadow-red-300 shadow-lg">
        <div className="flex flex-col w-full gap-4">
          <span className="flex items-center gap-4 md:text-3xl lg:text-5xl font-semibold text-white">
            <FaUserCircle />
            <h2>{TestimonialsData[comment].name}</h2>
          </span>
          <span className="flex flex-col gap-2">
            <p className="text-gray-300 md:text-xl font-medium w-full">
              {TestimonialsData[comment].comment}
            </p>
            <span className="flex flex-row gap-1 text-yellow-200">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <p className="text-gray-800 text-sm md:text-base">
              {TestimonialsData[comment].service}
            </p>
          </span>
        </div>
        <div className="flex justify-center items-center gap-[20%] text-2xl md:text-4xl text-white w-1/3">
          <BsFillArrowLeftSquareFill
            className="cursor-pointer"
            onClick={() => {
              comment === 0
                ? setComment(cLength - 1)
                : setComment((prev) => prev - 1);
            }}
          />
          <BsFillArrowRightSquareFill
            className="cursor-pointer"
            onClick={() => {
              comment === cLength - 1
                ? setComment(0)
                : setComment((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
