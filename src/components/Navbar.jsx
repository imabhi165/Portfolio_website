import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className="bg-black/90 h-[72px] backdrop-blur-2xl rounded-full 
        px-6 flex justify-between items-center text-center text-2xl text-white/50"
        style={{ width: 'fit-content' }} 
      >
        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#home"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} 
          >
            <BiHomeAlt />
          </motion.a>
        </motion.div>

        {/* About Icon */}
        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#about"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiUser />
          </motion.a>
        </motion.div>
        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#experience"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsBriefcase />
          </motion.a>
        </motion.div>

        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#projects"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsClipboardData />
          </motion.a>
        </motion.div>
        
        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#post"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPen />
          </motion.a>
        </motion.div>

        <motion.div className="flex items-center justify-center w-[60px] h-[60px]">
          <motion.a
            href="#contact"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsChatSquare />
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

















