import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Spline from "@splinetool/react-spline";
import StarsCanvas from "./canvas/Stars";

const Tech = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
      {/* {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
      <div className="w-full md:w-auto">
        <StarsCanvas />
      </div>
      <div className="w-full h-[70%] xs:aspect-[16/9] xs:w-full md:w-[800px] md:h-[600px] lg:w-[10000px] m-auto">
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/FvWuvWXmaxwpLUtE/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
