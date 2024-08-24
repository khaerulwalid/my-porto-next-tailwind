import React from "react";

const Hero = () => {
  return (
    <section className="pt-36">
      <div className="container ">
        <div className="flex flex-wrap ">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className=" text-base font-semibold text-secondary-text md:text-xl">
              Hai! 👋, saya
              <span className=" block font-bold text-primary-text text-3xl mb-4 lg:text-5xl">
                Khaerul Walid Qutbi
              </span>
            </h1>
            <h2 className=" font-medium text-primary-text lg:text-2xl">
              Web & Mobile Developer |{" "}
              <span className="text-black-text">Content Creator</span>
            </h2>
            <p className=" text-black-text/50 leading-relaxed mb-8">
              Saya adalah seorang Web & Mobile Developer serta Content Creator
              yang bersemangat menciptakan solusi digital inovatif dengan fokus
              pada kualitas dan manfaat bagi pengguna.
            </p>
            <a className=" cursor-pointer text-base font-semibold text-black-text p-4 bg-accent hover:bg-accent/80 hover:text-black-text/85 transition duration-300 ease-in-out">
              Hubungi Saya
            </a>
          </div>
          <div className=" relative w-full self-end px-4 lg:w-1/2 lg:right-0">
            <div className="mt-10">
              <img
                src="./image/wall_hero.png"
                width="300px"
                className="absolute left-1/2 -bottom-150 lg:-bottom-40 -translate-x-1/2 z-0"
              />
              <span className="absolute left-1/2 -bottom-150 lg:-bottom-20 -translate-x-1/2 z-[-10]">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#3366FF"
                    d="M40.4,-42C56.2,-34.8,75.7,-25.8,77.4,-13.9C79.2,-2.1,63.3,12.6,52.4,29.1C41.5,45.5,35.6,63.6,24.7,67.5C13.7,71.4,-2.3,61,-20.2,54.8C-38.1,48.6,-57.8,46.7,-62.2,36.9C-66.5,27.2,-55.6,9.7,-49.3,-5.6C-43,-21,-41.2,-34,-33.8,-42.7C-26.3,-51.4,-13.2,-55.6,-0.5,-55.1C12.3,-54.5,24.5,-49.2,40.4,-42Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
