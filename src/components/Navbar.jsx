import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { href: "#home", icon: BiHomeAlt, label: "Home" },
    { href: "#about", icon: BiUser, label: "About" },
    { href: "#experience", icon: BsBriefcase, label: "Experience" },
    { href: "#projects", icon: BsClipboardData, label: "Projects" },
    { href: "#post", icon: FaPen, label: "Blog" },
    { href: "#contact", icon: BsChatSquare, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop & Tablet Navigation (Top) */}
      <motion.nav
        className="hidden sm:flex fixed top-0 left-0 right-0 z-50 justify-center pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="bg-black/80 backdrop-blur-xl rounded-full px-8 py-4 border border-white/10 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 group relative"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm font-medium tracking-wide hidden md:inline">
                  {item.label}
                </span>

                {/* Hover background */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#0B4C7D]/20 to-[#6A1B6E]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Active indicator line */}
                <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation (Bottom) */}
      <motion.nav
        className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="bg-black/90 backdrop-blur-2xl rounded-full px-4 py-2 border border-white/10 shadow-2xl"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center justify-center w-10 h-10 rounded-full text-white/50 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>

                {/* Tooltip for mobile */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
