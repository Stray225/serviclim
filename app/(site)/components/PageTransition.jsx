"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
