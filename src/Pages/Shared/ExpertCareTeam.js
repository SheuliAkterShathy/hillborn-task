import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import React from 'react';
import gowtham from '../../assets/gowtham.jpeg'
import deepta from '../../assets/deeeepta.jpg'

const ExpertCareTeam = () => {
    return (
        <div className="mt-20">
            <div className='text-center bg-sky-300 pt-12 pb-60'>
                <h2 className='font-semibold text-2xl'>Your Expert Care Team</h2>
                <p>Finest care from our top care specialists</p>

            </div>

           <div className="flex w-[80%] mx-auto justify-between mt-[-11rem]">
           <div className="shadow-2xl p-8">
                <img className='w-56 mx-auto' src={deepta} alt="" />
                <h4 className="font-bold text-2xl text-center mt-3 mb-4">Deepta Manohar</h4>
                <p className="text-center font-semibold">Acutouch Therapist and</p>
                <p className="text-center font-semibold mb-7">Self Mastery Coach</p>

                <div className="flex gap-7 items-center justify-center text-xl">
                <FaLinkedinIn/>
                <FaInstagram/>
                <FaFacebookF/>
                </div>
            </div>
           <div className="shadow-2xl p-8">
                <img className='w-56 mx-auto' src={gowtham} alt="" />
                <h4 className="font-bold text-2xl text-center mt-3 mb-4">Gowtham Kumar Dr</h4>
                
                <p className="text-center font-semibold mb-7">Digital Marketer</p>

                <div className="flex gap-7 items-center justify-center text-xl">
                <FaLinkedinIn/>
                <FaInstagram/>
                <FaFacebookF/>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ExpertCareTeam;