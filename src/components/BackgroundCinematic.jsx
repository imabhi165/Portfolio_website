import React from "react";
import { motion } from "framer-motion";

const BackgroundCinematic = ({ className = "", style = {} }) => {
  return (
    <div
      className={`absolute inset-0 -z-30 w-full h-full ${className}`}
      style={style}
    >
      {/* soft vignette */}
      <div className="absolute inset-0 bg-black/30" />

      {/* moving light sweep */}
      <motion.div
        initial={{ x: "-30%", rotate: -15, opacity: 0 }}
        animate={{ x: ["-30%", "120%"], opacity: [0, 0.15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-full w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] blur-2xl"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* subtle noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
    </div>
  );
};

export default BackgroundCinematic;
