import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TransformationStories.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TransformationStories = () => {
  return (
    <div className="my-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <div className="flex justify-around items-center bg-gray-50 py-8">
            <div
              className=" bg-sky-300 py-8 w-[32%]"
              style={{ borderRadius: "77% 23% 40% 60% / 43% 64% 36% 57% " }}
            >
              <img
                src="https://img.freepik.com/free-photo/dark-haired-girl-red-sweater-sits-stairs-shot-woman-with-brown-eyes_197531-14215.jpg?w=1060&t=st=1679927904~exp=1679928504~hmac=f0b91dfa906af3e01bc589f5deaa1d79108eadea82657cb6c0b733f61bda88f3"
                alt=""
                className="w-64 h-64 mt-10 ml-52 rounded-2xl"
              />
              <p className="text-center font-semibold mb-4 ml-52">
                Dipannita Arohi,32
              </p>

              <div className="flex gap-5 items-center justify-center text-xl ml-52">
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>

            <div className="w-[40%]">
              <h2 className="font-semibold text-3xl mb-8">
                DEEPTA MANOHAR
                <br />
                TRANSFORMATION STORIES
              </h2>
              <p className="text-sm">
                I was Suffering from digestion issues from past 5 years faced,
                acidity, bloating along with digestion issues, I had hair fall
                and acne problem which gave me stress and anxiety and frequently
                used to suffer from fever So in January 3rd week of this I
                started taking treatment from Deepta. After Starting the
                treatment, I slowly started recovering from digestive issues
                that too without medicines from past few years I was under
                ayurvedic medicines for digestion. It was very difficult for me
                to live without medicines with the help of Deepta from guidance
                Kd healing. And diet my acidity improved. My acne reduced and
                startled regrowing my hair for which I took number of
                Supplements and along with that My mind is also clear I'm a
                happy & healthy person now.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around items-center bg-gray-50 py-8">
            <div
              className=" bg-sky-300 py-8 w-[32%]"
              style={{ borderRadius: "77% 23% 40% 60% / 43% 64% 36% 57% " }}
            >
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1060&t=st=1679924858~exp=1679925458~hmac=29a356e91dd736e314020d59362d126d6a9bc75d7f2c5ce475905d6da93425da"
                alt=""
                className="w-64 h-64 mt-10 ml-52 rounded-2xl"
              />
              <p className="text-center font-semibold mb-4 ml-52">
                Shelpa patil,29
              </p>

              <div className="flex gap-5 items-center justify-center text-xl ml-52">
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>

            <div className="w-[40%]">
              <h2 className="font-semibold text-3xl mb-8">
                DEEPTA MANOHAR
                <br />
                TRANSFORMATION STORIES
              </h2>
              <p className="text-sm">
                I was Suffering from digestion issues from past 5 years faced,
                acidity, bloating along with digestion issues, I had hair fall
                and acne problem which gave me stress and anxiety and frequently
                used to suffer from fever So in January 3rd week of this I
                started taking treatment from Deepta. After Starting the
                treatment, I slowly started recovering from digestive issues
                that too without medicines from past few years I was under
                ayurvedic medicines for digestion. It was very difficult for me
                to live without medicines with the help of Deepta from guidance
                Kd healing. And diet my acidity improved. My acne reduced and
                startled regrowing my hair for which I took number of
                Supplements and along with that My mind is also clear I'm a
                happy & healthy person now.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-around items-center bg-gray-50 py-8">
            <div
              className=" bg-sky-300 py-8 w-[32%]"
              style={{ borderRadius: "77% 23% 40% 60% / 43% 64% 36% 57% " }}
            >
              <img
                src="https://img.freepik.com/free-photo/two-young-pretty-women-portrait-outdoors_624325-2293.jpg?w=1060&t=st=1679927794~exp=1679928394~hmac=bf3b36c6ff085eeeacd290bcc8ac442ebbc3a569717ad1fdb7e4fbdbef8cee1c"
                alt=""
                className="w-64 h-64 mt-10 ml-52 rounded-2xl"
              />
              <p className="text-center font-semibold mb-4 ml-52">
            Monhori Debi,26
              </p>

              <div className="flex gap-5 items-center justify-center text-xl ml-52">
                <FaLinkedinIn />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>

            <div className="w-[40%]">
              <h2 className="font-semibold text-3xl mb-8">
                DEEPTA MANOHAR
                <br />
                TRANSFORMATION STORIES
              </h2>
              <p className="text-sm">
                I was Suffering from digestion issues from past 5 years faced,
                acidity, bloating along with digestion issues, I had hair fall
                and acne problem which gave me stress and anxiety and frequently
                used to suffer from fever So in January 3rd week of this I
                started taking treatment from Deepta. After Starting the
                treatment, I slowly started recovering from digestive issues
                that too without medicines from past few years I was under
                ayurvedic medicines for digestion. It was very difficult for me
                to live without medicines with the help of Deepta from guidance
                Kd healing. And diet my acidity improved. My acne reduced and
                startled regrowing my hair for which I took number of
                Supplements and along with that My mind is also clear I'm a
                happy & healthy person now.
              </p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default TransformationStories;
