import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='relative group w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black-200 text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10'>
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
