import { useEffect, useState } from "react";
import Logo from "./assets/JEstrada-logo.png";
import njLogo from "./assets/NJ-T.png";
import { motion } from "motion/react";

export default function Navbar({ introDone }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      key={introDone}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 w-full z-30"
    >
      <nav
        className={`w-full transition-all duration-300
        ${
          scrolled
            ? "bg-[#A10702]/85 backdrop-blur-md shadow-lg"
            : "bg-[#A10702]"
        }`}
      >
        <div className="flex items-center justify-between p-3 bebas">

          {/* LEFT */}
          <div className="flex items-center gap-6 text-2xl">

            {introDone && (
              <motion.img
                layoutId="siteLogo"
                src={Logo}
                alt=""
                className="size-16"
              />
            )}

            <ul className="hidden md:flex space-x-6 text-white text-xl">
              <li><a href="#home" className="hover:bg-white hover:text-[#243010] px-4 py-2">Home</a></li>
              <li><a href="#about" className="hover:bg-white hover:text-[#243010] px-4 py-2">About Us</a></li>
              <li><a href="#work" className="hover:bg-white hover:text-[#243010] px-4 py-2">Our Work</a></li>
              <li><a href="#contact" className="hover:bg-white hover:text-[#243010] px-4 py-2">Contact Us</a></li>
            </ul>

          </div>

          {/* RIGHT (desktop only) */}
          <div className="hidden md:flex items-center space-x-6 text-white">

            <a href="tel:9739956139" className="hover:underline text-xl">
              Call (973) 995-6139
            </a>

            <div className="w-0.5 h-10 bg-black"></div>

            <img src={njLogo} alt="" className="size-12" />

          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 text-white">

            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About Us</a>
            <a href="#work" onClick={() => setOpen(false)}>Our Work</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>

            {/* MOBILE PHONE */}
            <a href="tel:9739956139" className="pt-4 border-t border-white/30">
              Call (973) 995-6139
            </a>

            {/* MOBILE NJ LOGO */}
            <div className="flex items-center pt-2">
              <img src={njLogo} alt="" className="size-10" />
            </div>

          </div>
        )}

      </nav>
    </motion.header>
  );
}