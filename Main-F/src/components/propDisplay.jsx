import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";

const PropDisplay = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <motion.div
      className="bg-white p-4 m-4 rounded-2xl w-60 max-h-60 border-2 border-zinc-200 font-medium relative shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-base font-semibold mb-1 text-zinc-800 break-words">
        {props.title}
      </h2>

      <p className="max-h-28 p-1 overflow-y-auto font-normal text-sm text-zinc-600 leading-relaxed whitespace-pre-wrap">
        {props.content}
      </p>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="text-[#f5ba13] absolute right-2 bottom-2 p-1 hover:text-red-500 transition"
        aria-label="Delete Note"
      >
        <DeleteIcon />
      </motion.button>
    </motion.div>
  );
};

export default PropDisplay;
