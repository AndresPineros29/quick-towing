import { useState } from "react";
import logo from "../assets/logo-quick-towing.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navlinks } from "../data/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="w-full flex py-6 justify-between items-center navbar">
      <img
        draggable="false"
        src={logo}
        alt="logo"
        className="w-[100px] lg:w-[150px]"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:scale-110 duration-300 ease-out  cursor-pointer text-lg ${
              index === navlinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              nav.id === "contact"
                ? "bg-white text-gray-800 text-xl font-medium py-2 px-3 rounded-lg"
                : "text-white font-normal"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile */}

      <div className="sm:hidden flex flex-1 justify-end items-center z-[6]">
        <div onClick={() => setToggle(!toggle)} className="z-[7]">
          {toggle ? (
            <AiOutlineClose
              color="#fff"
              size={30}
              className="fixed top-7 right-6"
            />
          ) : (
            <AiOutlineMenu color="#fff" size={30} />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient fixed top-0 right-0 h-full w-full bg-primary items-center`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navlinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-4xl my-10 ${
                  nav.id === "contact"
                    ? "bg-white text-primary font-semibold px-4 py-3 rounded-lg"
                    : "text-white"
                } `}
                onClick={() => setToggle(!toggle)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
