import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import BackgroundGradient from "./BackgroundGradient";  
import { FaGithub, FaLink } from 'react-icons/fa'; 

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "all") return true;
    if (filter === "fullstack" && project.category === "Full Stack") {
      return true;
    }
    if (filter === "clone" && project.category === "Clone") {
      return true;
    }
    return false;
  });

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center font-bold text-4xl"
      >
        Projects
      </motion.h1>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 text-white font-medium rounded-full border border-white transition-all duration-300 ${filter === "all" ? "bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E]" : "bg-black hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D]"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("fullstack")}
          className={`px-6 py-2 text-white font-medium rounded-full border border-white transition-all duration-300 ${filter === "fullstack" ? "bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E]" : "bg-black hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D]"}`}
        >
          Full Stack
        </button>
        <button
          onClick={() => setFilter("clone")}
          className={`px-6 py-2 text-white font-medium rounded-full border border-white transition-all duration-300 ${filter === "clone" ? "bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E]" : "bg-black hover:bg-gradient-to-r hover:from-[#6A1B6E] hover:to-[#0B4C7D]"}`}
        >
          Clone
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative shadow-[0_0_10px_#4B0082] hover:shadow-[0_0_15px_#4B0082]">
            <div className="relative group rounded-xl">
              <BackgroundGradient>
                <div
                  className="h-52 md:h-72 rounded-t-xl bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                 
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500 flex-col items-center justify-center">
                   
                    <motion.h5
                      className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E] mb-4"
                      whileHover={{
                        backgroundPosition: "100% 100%",
                        transition: { duration: 0.4 },
                      }}
                    >
                      {project.title}
                    </motion.h5>

                    
                    <div className="flex items-center justify-center gap-4">                     
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
                      >
                        <FaGithub
                          size={24}
                          className="text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white"
                        />
                      </a>                      
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
                      >
                        <FaLink
                          size={24}
                          className="text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
            <div className="text-white rounded-b-xl bg-black px-4 py-8 min-h-[8rem]">
              <p className="text-sm text-[#B0B0B0]">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;













