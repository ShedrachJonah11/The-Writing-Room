import React from "react";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const [mobile, setMobile] = useState(false);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const handleMobile = (val) => {
    setMobile(val);
  };
  return (
    <>
      <header className="header w-full">
        <span className="hidden tablet:flex">
          {" "}
          <DestopMenu onMobie={handleMobile} />{" "}
        </span>
        <span className="flex tablet:hidden">
          {" "}
          <MobileMenu onMobie={handleMobile} />
        </span>
      </header>
    </>
  );
};

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const { authenticate } = useSelector((state) => state.auth);

  return (
    <div className={` scontainer  relative justify-between w-full flex`}>
      <div
        className={` absolute -top-[65%] w-full p-3 h-screen  bg-red-500 ${
          menu
            ? "translate-x-0 ease-out duration-300"
            : "translate-x-[100vw] ease-in duration-300 hidden"
        }`}
      >
        <span className="flex justify-end" onClick={() => setMenu(false)}>
          <GrClose size={30} className="bg-white p-1 rounded-md" />
        </span>
        <ul className=" flex flex-col gap-2 justify-start items-start ">
          {nav.map((link) => (
            <li key={link.id}>
              <Link
                className="capitalize bg-red-200 p-1 rounded-md"
                to={link.url}
                onClick={() => setMenu(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex mt-3">
          <span className="">
            {authenticate ? (
              <User />
            ) : (
              <Link
                to={"/login"}
                onClick={() => setMenu(false)}
                className="bg-black flex  text-white p-2 rounded-lg"
              >
                {" "}
                Sign in/Sign Up
              </Link>
            )}
          </span>
        </div>
      </div>
      <div className="logo">
        <h1 className="tablet:text-[2rem]">
          <Link to="/">The Writing Room</Link>
        </h1>
      </div>
      <nav>
        <ul>
          {nav.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="account flexCenter">
        <span className="hidden tablet:flex">
          {authenticate ? (
            <User />
          ) : (
            <Link
              to={"/login"}
              onClick={() => setMenu(false)}
              className="bg-black flex  text-white p-2 rounded-lg"
            >
              {" "}
              Sign in/Sign Up
            </Link>
          )}
        </span>
        <span
          className="flex  tablet:hidden bg-red-100 rounded-sm"
          onClick={() => setMenu(true)}
        >
          <FiMenu size={30} />
        </span>
      </div>
    </div>
  );
};

const DestopMenu = () => {
  const { authenticate } = useSelector((state) => state.auth);
  return (
    <div className="scontainer flex w-full">
      <div className="logo">
        {/* <Link to="/">The Writing Room</Link> */}
        <h1 className="tablet:text-[2rem]">
          {" "}
          <Link to="/" className="tablet:text-[2rem]">
            The Writing Room
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          {nav.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="account flexCenter">
        <span className="hidden tablet:flex">
          {authenticate ? (
            <User />
          ) : (
            <Link
              to={"/login"}
              className="bg-black flex  text-white p-2 rounded-lg"
            >
              {" "}
              Sign in/Sign Up
            </Link>
          )}
        </span>
        <span className="flex tablet:hidden   bg-red-100 rounded-sm">
          <FiMenu size={30} />
        </span>
      </div>
    </div>
  );
};
