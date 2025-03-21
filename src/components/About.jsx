import { useState } from "react";
import Sphere from "./icon";
import { ABOUT_TEXT, EDUCATION, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        {EDUCATION.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold">{item.degree}</h3>
            {item.university && <p>{item.university}</p>}
            {item.graduation && <p>{item.graduation}</p>}
            {item.school && <p>{item.school}</p>}
            {item.year && <p>{item.year}</p>}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        {CERTIFICATIONS.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.issuedBy}</p>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <div id="about" className="overflow-x-hidden border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 font-bold text-center text-4xl">
        About <span className="font-bold text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[500px] h-[500px] perspective-1000">
              <div className="relative w-[500px] h-[500px] transform-style-3d animaterotateSphere">
                <Sphere />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              onClick={() => handleTabChange("education")}
              className={`${
                tab === "education"
                  ? "bg-gradient-to-br from-[#6A1B6E] to-[#0B4C7D]"
                  : "bg-transparent"
              } px-6 py-2 rounded-full border-2 border-white text-white transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D]`}
            >
              Education
            </button>
            <button
              onClick={() => handleTabChange("certifications")}
              className={`${
                tab === "certifications"
                  ? "bg-gradient-to-br from-[#6A1B6E] to-[#0B4C7D]"
                  : "bg-transparent"
              } px-6 py-2 rounded-full border-2 border-white text-white transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D]`}
            >
              Certifications
            </button>
          </div>

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;








