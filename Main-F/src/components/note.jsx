import React from "react";
import PropDisplay from "./propDisplay";
import { motion } from "framer-motion";

export default function Note(props) {
  return (
    <div className="flex-grow">
      <div className="grid gap-2 md:gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {props.notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <PropDisplay
              {...props}
              id={index}
              title={note.title}
              content={note.content}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
