import React from "react";
import step1 from '../../assets/step1.svg'
import step2 from '../../assets/step2.svg'
import step3 from '../../assets/step3.svg'
import step4 from '../../assets/step4.svg'

const HowProgramWorks = () => {
  return (
    <section className="mt-32 bg-gray-50 py-20">
      <h2 className="font-bold text-2xl text-center mb-16">
        How the Program Works
      </h2>
      <div className="grid md:grid-cols-4 gap-6 w-[85%] mx-auto">
        <div className="shadow-2xl p-6 rounded-2xl hover:bg-violet-400">
          <h4 className="border w-24 mx-auto text-center mb-6">STEP-1</h4>
          <img
            className="w-12 mx-auto"
            src={step1}
            alt=""
          />
          <h4 className="text-center font-semibold text-xl mb-7 mt-2">
            Clarity Call
          </h4>
          <p className="">
            Have a call with us to know how we work. Make program payment. Start
            program from comfort of your home.
          </p>
        </div>

        <div className="shadow-2xl p-6 rounded-2xl hover:bg-violet-400">
          <h4 className="border w-24 mx-auto text-center mb-6">STEP-2</h4>
          <img
            className="w-36 mx-auto"
            src={step2}
            alt=""
          />
          <h4 className="text-center font-semibold text-xl mb-7 mt-2">
            Register to one of our program
          </h4>
          <p className="">
            on your diet, supplements, lifestyle, etc. Explanations sent via
            text, images & videos.
          </p>
        </div>

        <div className="shadow-2xl p-6 rounded-2xl hover:bg-violet-400">
          <h4 className="border w-24 mx-auto text-center mb-6">STEP-3</h4>
          <img
            className="w-16 mx-auto"
            src={step3}
            alt=""
          />
          <h4 className="text-center font-semibold text-xl mb-7 mt-2">
            Connecting the medical history
          </h4>
          <p className="">
            Fill out a medical history form, do a blood test and have a detailed
            call with our medical expert.
          </p>
        </div>

        <div className="shadow-2xl p-6 rounded-2xl hover:bg-violet-400">
          <h4 className="border w-24 mx-auto text-center mb-6">STEP-4</h4>
          <img
            className="w-32 mx-auto"
            src={step4}
            alt=""
          />
          <h4 className="text-center font-semibold text-xl mb-7 mt-2">
            Follow Up Consults
          </h4>
          <p className="">
            Happen each month. Health progress reviewed. Changes made, when
            needed. Ask questions on chat/ mail. (working hours only please)
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowProgramWorks;
