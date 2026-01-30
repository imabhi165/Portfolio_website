import React from "react";
import { motion } from "framer-motion";

const BackgroundConic = ({ className = "", style = {} }) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 45, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 -z-30 w-full h-full ${className}`}
      style={{
        backgroundImage:
          "conic-gradient(from 90deg at 50% 50%, #0B4C7D, #7b61ff, #00ccb1, #ffc414, #0B4C7D)",
        opacity: 0.18,
        ...style,
      }}
    >
      <div className="absolute inset-0 bg-black/6" />
    </motion.div>
  );
};

export default BackgroundConic;
