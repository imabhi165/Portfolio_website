import React from "react";
import profilePic from "../assets/profilePicture.jpg";
import { Photo_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4"
      id="home"
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Profile Image Section */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 200,
            delay: 0.2,
          }}
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4C7D]/10 to-[#6A1B6E]/10 rounded-3xl blur-3xl scale-150" />

          {/* Profile Image - No Card Container */}
          <motion.div
            className="relative w-96 h-[500px] md:w-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            <motion.img
              src={profilePic}
              alt="Abhishek kushwaha"
              className="w-full h-full object-cover opacity-70 hover:opacity-85 transition-opacity duration-500"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-3xl" />

            {/* Floating particles effect */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-sm"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Greeting */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-white/80 font-light mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Abhishek Kushwaha
              </span>
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 h-12 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Creative Thinker",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {Photo_CONTENT}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1k7sHVLMMPRLq5ATBXW5g2Y5CB_53sla4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 text-center"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            animate={{
              borderColor: [
                "rgba(255, 255, 255, 0.4)",
                "rgba(255, 255, 255, 0.8)",
                "rgba(255, 255, 255, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Photo;
