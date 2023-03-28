import { faPerson, faPersonPregnant, faSyringe, faWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurPrograms = () => {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-4xl text-center">OUR PROGRAMS</h2>
      <h3 className="font-semibold text-2xl text-center">RETURN TO HEALTHY</h3>

      <div className="grid md:grid-cols-2 justify-center items-center w-[70%] mx-auto gap-32">


        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% ",
              }}
              size="3x"
              icon={faSyringe}
            />
          </div>
          <h2 className="font-semibold text-2xl">Blood Pressure</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>
        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% ",
              }}
              size="3x"
              icon={faWalking}
            />
          </div>
          <h2 className="font-semibold text-2xl">Weight Loss</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>
        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% ",
              }}
              size="3x"
              icon={faPersonPregnant}
            />
          </div>
          <h2 className="font-semibold text-2xl">Healthy preganancy</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>
        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% ",
              }}
              size="3x"
              icon={faSyringe}
            />
          </div>
          <h2 className="font-semibold text-2xl">Blood Pressure</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>
        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% "
              }}
              size="3x"
              icon={faPerson}
            />
          </div>
          <h2 className="font-semibold text-2xl">Thyroid</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>
        <div className="text-center space-y-5">
          <div className="mx-auto ">
            <FontAwesomeIcon
              className=" p-4  bg-sky-300"
              style={{
                borderRadius: "59% 41% 63% 37% / 40% 36% 64% 60% ",
              }}
              size="3x"
              icon={faSyringe}
            />
          </div>
          <h2 className="font-semibold text-2xl">Blood Pressure</h2>
          <p className="w-[80%] mx-auto">
            Lorem ipsum madolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor.
          </p>
          <button className="rounded-md py-1 bg-sky-300 px-4">LEAR MORE</button>
        </div>



      
      </div>
    </div>
  );
};

export default OurPrograms;
