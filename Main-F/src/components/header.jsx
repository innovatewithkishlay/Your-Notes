import React from "react";
import { motion } from "framer-motion";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Header() {
  return (
    <header>
      <nav className="bg-[#f5ba13] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex-shrink-0 flex items-center"
              >
                <DescriptionIcon className="text-white text-3xl" />
              </motion.div>
              <motion.span
                className="text-white ml-3 text-2xl font-semibold tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                KEEPER{" "}
                <span className="text-sm block sm:inline font-normal">
                  - Keep Your Notes
                </span>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
}
