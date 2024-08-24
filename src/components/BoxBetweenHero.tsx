import React from "react";

const BoxBetweenHero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center h-[450px] lg:h-[150px] mt-[400px] lg:mt-[100px] py-5 px-5 lg:px-20 lg:py-20 bg-primary-text w-full lg:w-[75%] mx-auto z-10 gap-4">
      <div className="p-5 w-[60%] lg:w-40 h-20 cursor-pointer bg-primary hover:bg-accent flex justify-center items-center">
        <img src="./image/linkedin.png" className=" w-[100px] lg:w-[280px]" />
      </div>
      <div className="p-5 w-[60%] lg:w-40 h-20 cursor-pointer bg-primary hover:bg-accent flex justify-center items-center">
        <img src="./image/youtube.png" className=" w-[100px] lg:w-[280px]" />
      </div>
      <div className="p-5 w-[60%] lg:w-40 h-20 cursor-pointer bg-primary hover:bg-accent flex justify-center items-center">
        <img src="./image/medium.png" className=" w-[100px] lg:w-[280px]" />
      </div>
      <div className="p-5 w-[60%] lg:w-40 h-20 cursor-pointer bg-primary hover:bg-accent flex justify-center items-center">
        <img src="./image/instagram.png" className=" w-[100px] lg:w-[280px]" />
      </div>
    </div>
  );
};

export default BoxBetweenHero;
