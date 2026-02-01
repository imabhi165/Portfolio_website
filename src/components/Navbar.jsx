import React, { useEffect, useRef, useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { FaPen, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { href: "#home", icon: BiHomeAlt, label: "Home" },
    { href: "#about", icon: BiUser, label: "About" },
    { href: "#experience", icon: BsBriefcase, label: "Experience" },
    { href: "#projects", icon: BsClipboardData, label: "Projects" },
    { href: "#post", icon: FaPen, label: "Blog" },
    { href: "#contact", icon: BsChatSquare, label: "Contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuRef = useRef(null);

  // Close on Escape or click outside
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }

    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMobileOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  // Active link using IntersectionObserver
  useEffect(() => {
    const observers = [];

    const options = { root: null, rootMargin: "0px", threshold: 0.45 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, options);

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Brand + Mobile Top Bar */}
      <nav className="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <div className="flex justify-between items-center bg-black/80 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10 shadow-2xl">
          <a
            href="#home"
            className="text-white font-semibold text-sm"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            {/* Use a simple text brand; replace with logo if desired */}
            Abhishek
          </a>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="p-2 rounded-md text-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4C7D]"
            onClick={() => setMobileOpen((s) => !s)}
          >
            {mobileOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              ref={menuRef}
              className="mt-3 rounded-xl bg-black/90 backdrop-blur-2xl border border-white/10 shadow-xl overflow-hidden"
              role="menu"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col p-3">
                {navItems.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm text-white/80 hover:text-white transition-colors duration-150 ${active === item.href ? "bg-gradient-to-r from-[#0B4C7D]/30 to-[#6A1B6E]/30" : ""}`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop & Tablet Navigation (Top) */}
      <motion.nav
        className="hidden sm:flex fixed top-0 left-0 right-0 z-50 justify-center pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="navigation"
        aria-label="Primary Navigation"
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
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center space-x-3 px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 group relative ${active === item.href ? "text-white" : ""}`}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.06,
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

                {/* Active indicator */}
                {active === item.href && (
                  <motion.span
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-md bg-gradient-to-r from-[#0B4C7D] to-[#6A1B6E]"
                    layoutId="nav-active"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
