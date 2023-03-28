import React from "react";
import title5 from '../../assets/tile-5.jpg'

const AccuTouch = () => {
  return (
    <div className="mt-24 w-[90%] mx-auto">
      <div className="text-center mb-20">
        <h1 className="font-bold text-4xl">HOW WE DO IT?</h1>
        <p className="font-semibold text-2xl mt-2">AccouTouch Therapy</p>
      </div>

      <div className="md:flex gap-20 items-center">
        <div
          className=" bg-sky-300 py-20 w-[55%]"
          style={{ borderRadius: "47% 53% 47% 53% / 49% 26% 74% 51%    " }}
        >
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-[85%] ml-24"
          />
        </div>

        <div className="w-[45%] space-y-6">
          <h2 className="font-semibold text-3xl">DIET</h2>
          <p>
            Right food is the basis of all health. We will work with you to help
            you understand what to eat and what to avoid.
          </p>
          <button className="bg-sky-300 rounded-md px-5 py-2">
            Click Here
          </button>
        </div>
      </div>

      <div className="md:flex gap-20 items-center">
        <div className="w-[45%] space-y-6">
          <h2 className="font-semibold text-3xl">Healthy & Colorful Recipes</h2>
          <p>
            In your kitchen sits the wisdom of Ayurvedic herbs and ingredients
            for wellness. We tell you how to use them
          </p>
          <button className="bg-sky-300 rounded-md px-5 py-2">
            Click Here
          </button>
        </div>

        <div
          className=" bg-sky-300 py-20 w-[55%]"
          style={{ borderRadius: "55% 45% 76% 24% / 47% 62% 38% 53% " }}
        >
          <img
            src="https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-[85%] ml-24"
          />
        </div>
      </div>

      <div className="md:flex gap-20 items-center">
        <div
          className=" bg-sky-300 py-20 w-[55%]"
          style={{ borderRadius: "47% 53% 47% 53% / 49% 26% 74% 51%    " }}
        >
          <img
            src={title5}
            alt=""
            className="w-[85%] ml-24"
          />
        </div>

        <div className="w-[45%] space-y-6">
          <h2 className="font-semibold text-3xl">Lifestyle</h2>
          <p>We give you simple bio-hacks to give your health a head start</p>
          <button className="bg-sky-300 rounded-md px-5 py-2">
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccuTouch;
