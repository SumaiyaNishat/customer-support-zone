import React from "react";
import imgB from "../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 py-20">
        
        
        <div className="left-card bg-gradient-to-l from-[#422AD5] to-[#422AD5] w-full md:w-1/2 h-[250px] relative rounded-xl overflow-hidden">
          <img className="absolute left-0 top-0 h-full object-contain" src={imgB} alt="" />
          <img className="absolute right-0 top-0 h-full object-contain transform scale-x-[-1]" src={imgB} alt="" />
          <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-center">
            <h5 className="text-xl font-semibold text-white">In-Progress</h5>
            <h1 className="text-3xl font-bold text-white">{inProgressCount}</h1>
          </div>
        </div>

        
        <div className="right-card bg-gradient-to-l from-[#00827A] to-[#54CF68]  w-full md:w-1/2 h-[250px] relative rounded-xl overflow-hidden">
          <img className="absolute left-0 top-0 h-full object-contain" src={imgB} alt="" />
          <img className="absolute right-0 top-0 h-full object-contain transform scale-x-[-1]" src={imgB} alt="" />
          <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-center">
            <h5 className="text-xl font-semibold text-white">Resolved</h5>
            <h1 className="text-3xl font-bold text-white">{resolvedCount}</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
