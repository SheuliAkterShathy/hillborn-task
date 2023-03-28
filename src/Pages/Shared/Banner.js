import React from "react";
import deepta from "../../assets/getamm.jpg";

const Banner = () => {
  return (
    <div className="mt-[-8rem]">
      <div
        className="bg-cover bg-right h-screen bg-no-repeat"
        style={{
          backgroundImage: `url(${deepta})`,
        }}
      >
        <div className="flex justify-center items-center w-[75%] ">
          <div className="mt-44">
            <h2 className="text-4xl text-white mb-4">
              learn deepa manohar’s way
            </h2>
            <h2 className="text-6xl font-bold text-whie mb-9">
              A Healthy and a <br /> safe journey of <br /> healing for you
            </h2>
            <button className="rounded-full bg-white px-3 py-2">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
