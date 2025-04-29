import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom, Fab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  const areInputsEmpty = () => {
    return note.title.trim() === "" || note.content.trim() === "";
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    if (areInputsEmpty()) {
      alert("Please enter details first!");
      return;
    }
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setExpanded(false);
  }

  function handleTextArea() {
    setExpanded(true);
  }

  return (
    <motion.form
      className="flex justify-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex flex-col grow lg:grow-0 md:grow-0 sm:grow-0 bg-white p-2.5 m-4 rounded-xl hover:shadow-[0_0_12px_4px_#ccc] border-2 border-zinc-200 w-1/3 p-4 divide-y divide-slate-500 font-medium"
        layout
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.input
              key="titleInput"
              className="focus:outline-none px-3 py-2"
              type="text"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={handleChange}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        <textarea
          className="focus:outline-none p-2 resize-none font-normal text-sm"
          name="content"
          placeholder="Take a note..."
          cols="50"
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={handleTextArea}
        ></textarea>

        {isExpanded && (
          <Zoom in={true}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex self-end"
            >
              <Fab
                onClick={handleClick}
                size="small"
                className="hover:text-[#f5ba13]"
                type="submit"
              >
                <AddIcon />
              </Fab>
            </motion.div>
          </Zoom>
        )}
      </motion.div>
    </motion.form>
  );
};

export default CreateNote;
