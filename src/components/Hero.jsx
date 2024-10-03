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
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my Portfolio!
          </p>
          {/* 2 buttons here */}
        </div>
        
      </div>
      {/* <Spline scene="https://prod.spline.design/XwybZb4QZs5r93fC/scene.splinecode" /> */}

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
