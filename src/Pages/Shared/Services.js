import React from "react";
import titleIcon from "../../assets/tileIcon-1.svg";
import titleIcon2 from "../../assets/tileIcon-2.svg";
import titleIcon3 from "../../assets/tileIcon-3.svg";
import titleIcon4 from "../../assets/tileIcon-4.svg";
import titleIcon5 from "../../assets/tileIcon-5.svg";
import flower from "../../assets/flower.png";
import plant from "../../assets/plant.png";

const Services = () => {
  return (
    <section>
      <div
        className="bg-gradient-to-b from-cyan-300 to-cyan-100 px-10 pt-20 pb-[20rem] mt-[8rem]"
        style={{ borderRadius: "0rem 10rem 10rem 10rem" }}
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-4">
            We are hear to Serve People to Return Back to Health
          </h2>
          <p className="font-semibold text-xl mb-20">Our clients have seen</p>
        </div>
        <div className="grid md:grid-cols-3 w-[80%] mx-auto gap-24">
          <div
            className="bg-white h-[400px] px-4 py-8"
            style={{ borderRadius: "0px 60px 0px 60px" }}
          >
            <img className="w-20 mx-auto mb-10" src={titleIcon} alt="" />
            <h3 className="text-center font-semibold text-xl mb-5">
              Upto 2-3 inch loss
            </h3>
            <p className="text-center">
              {" "}
              and reduction in blood pressure medication
            </p>
          </div>

          <div
            className="bg-white h-[400px] px-4 py-8"
            style={{ borderRadius: "0px 60px 0px 60px" }}
          >
            <img className="w-44 mx-auto mb-10" src={titleIcon2} alt="" />
            <h3 className="text-cente font-semibold text-xl mb-5 px-2">
              Up to 10 kgs weight loss
            </h3>
            <p className="text-center">
              {" "}
              and reduction in blood pressure medication
            </p>
          </div>

          <div
            className="bg-white h-[400px] px-4 py-8"
            style={{ borderRadius: "0px 60px 0px 60px" }}
          >
            <img
              className="w-44 mx-auto mb-10"
              src={titleIcon3}
              alt=""
            />
            <h3 className="text-center font-semibold text-xl mb-5">
              Relief from hot flashes & mood swings
            </h3>
            <p className="text-center">
              {" "}
              with diet and natural natural supplement
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 w-[50%] mx-auto gap-24 mt-20">
          <div
            className="bg-white h-[400px] px-4 py-8"
            style={{ borderRadius: "0px 60px 0px 60px" }}
          >
            <img
              className="w-44 mx-auto mb-10"
              src={titleIcon4}
              alt=""
            />
            <h3 className="text-center font-semibold text-xl mb-5">
              Reversing diabetes naturally
            </h3>
            <p className="text-center"> and reduction in PCOD symptoms</p>
          </div>

          <div
            className="bg-white h-[400px] px-4 py-8"
            style={{ borderRadius: "0px 60px 0px 60px" }}
          >
            <img
              className="w-44 mx-auto mb-10"
              src={titleIcon5}
              alt=""
            />
            <h3 className="text-center font-semibold text-xl mb-5">
              Natural healthy pregnancy
            </h3>
            <p className="text-center"> after failed IUI and IVF cycles</p>
          </div>
        </div>
      </div>

      <div
        className="bg-[#1A5F7A] w-[55%] mx-auto mt-[-13rem] md:p-24 text-white relative"
        style={{ borderRadius: "8rem 0rem 0rem 0rem" }}
      >
        <img
          className="w-96 absolute left-[-105px] top-[-80px]"
          src={plant}
          alt=""
        />
        <div className="">
          <h2 className="font-bold text-4xl mb-2 text-center">
            Our Philosophy
          </h2>
          <hr
            className="w-40 mx-auto text-cyan-400
        "
          />
          <p className="mb-16 text-center">Is Unlearn and Relearn</p>
          <p className="md:text-2xl">
            We go beyond symptoms, we listen to what your body is telling us
            with pulse diagnosis and understanding the symptoms which are
            experienced by your body. We identify your root cause and we help
            you heal inside out, through Accutouch therapy
          </p>
        </div>

        <img
          className="w-60 absolute right-[-90px] bottom-[-30px]"
          src={flower}
          alt=""
        />
      </div>
    </section>
  );
};

export default Services;
