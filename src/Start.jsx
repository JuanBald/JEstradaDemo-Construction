import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import logo from "./assets/JEstrada-logo.png";

export default function Intro({ setIntroDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setIntroDone(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, [setIntroDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#A10702] z-50 flex items-center justify-center"
          
          initial={{ y: 0 }}
          exit={{
            y: "-100%"
          }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.img
            src={logo}
            className="w-80"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}