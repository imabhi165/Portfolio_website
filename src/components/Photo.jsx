import React from "react";
import profilePic from "../assets/profilePicture.jpg";
import { Photo_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <section className="flex flex-col items-center mt-20 py-0" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <div className="w-80 h-80 bg-[#181818] rounded-full flex items-center justify-center mb-7">
          <img
            src={profilePic}
            alt="Abhishek kushwaha"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>

        <h1 className="text-6xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text lg:text-8xl">
          Hello, I'm Abhishek Kushwaha
        </h1>

        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>

        <p className="my-1 max-w-xl py-6 font-light tracking-tighter text-white">
          {Photo_CONTENT}
        </p>

        <div className="flex space-x-4 mb-8">
          
          <a
            href="#contact"
            className="px-6 py-2 text-white font-medium rounded-full border border-white bg-[#181818] hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D] transition-all duration-300"
          >
            Let's Connect
          </a>
          
          <a
            href="/Abhishek_Kushwaha.pdf"
            className="px-6 py-2 text-white font-medium rounded-full border border-white bg-[#181818] hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D] transition-all duration-300"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Photo;


















