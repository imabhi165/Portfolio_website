import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimatedGradient = ({ className = "", style = {} }) => {
  const gradient =
    "linear-gradient(270deg,#0B4C7D 0%,#6A1B6E 25%,#7b61ff 50%,#00ccb1 75%,#ffc414 100%)";

  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "50% 50%", "100% 50%"] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 200%",
        ...style,
      }}
      className={`absolute inset-0 -z-20 w-full h-full ${className}`}
    >
      {/* subtle overlay to soften colors */}
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  );
};

export default BackgroundAnimatedGradient;
