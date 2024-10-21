/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window object is available
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
      };

      handleResize(); // Check on mount
      window.addEventListener("resize", handleResize); // Add event listener

      return () => {
        window.removeEventListener("resize", handleResize); // Cleanup on unmount
      };
    }
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />{" "}
          <div className="w-1 sm:h-80 h-40 violet-gradient m-auto" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span class=" bg-gradient-to-r from-violet-600 via-purple-500 to-white text-transparent bg-clip-text bg-300% animate-gradient">
              Soaham
            </span>
          </h1>
          <p className={` font-light lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]", mt-2 text-white-100 xs:w-[560px] w-fit`}>
            A Full Stack Web Developer with strong interest in 3D Web Design 
          </p>
          {/* 2 buttons here */}
          <div className="flex gap-4 ">

          <button
            className="font-poppins flex justify-center gap-2 items-center top-6 shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            Connect 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
          <button
            className="font-poppins flex justify-center gap-2 items-center top-6 shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            <a href="/linktopdf">Resume </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
          </div>

        </div>
      </div>
      {/* <Spline scene="https://prod.spline.design/XwybZb4QZs5r93fC/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/XwybZb4QZs5r93fC/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/kBpNsubJ-8t9w-PW/scene.splinecode" /> */}

      {/* {isMobile ? (
        <div className="w-full h-auto absolute bottom-36">
          <Spline scene="https://prod.spline.design/XwybZb4QZs5r93fC/scene.splinecode" className="h-full" />
        </div>      ) : (
        <div className="absolute right-0 top-0 w-[70vw] h-[160vh] ">
          <Spline scene="https://prod.spline.design/XwybZb4QZs5r93fC/scene.splinecode" className="h-full" />
        </div>
      )} */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[20px] h-[38px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary opacity-80 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
