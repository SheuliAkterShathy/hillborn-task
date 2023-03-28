import React from 'react';

const Hero = () => {
    return (
        <div className="mt-[-4rem]">
      <div
        className="bg-cover bg-right h-screen bg-no-repeat"
        style={{
          backgroundImage:  "url('https://images.unsplash.com/photo-1611071496337-9882cd6c0e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')",
        }}
      >
        <div className="flex justify-end items-center w-[90%] ">
          <div className="mt-44">
            <h2 className="text-4xl text-gray-400 mb-4">
              learn deepa manohar’s way
            </h2>
            <h2 className="text-6xl font-bold text-gray-300 mb-9">
              A Healthy and a <br /> safe journey of <br /> healing for you
            </h2>
            <button className="rounded-full bg-gray-400 px-3 py-2">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;