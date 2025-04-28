import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom, Fab } from "@mui/material";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, setExpanded] = useState(false);

    const areInputsEmpty = () => {
        return note.title.trim() === "" || note.content.trim() === "";
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();

        if (areInputsEmpty()) {
            alert("Please enter details first!");
            return;
        }

        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        setExpanded(false);
    }

    function handleTextArea() {
        setExpanded(true);
    }

    return (
        <form className="flex justify-center mb-10">
            <div className="flex flex-col grow lg:grow-0 md:grow-0 sm:grow-0 bg-white p-2.5 m-4 rounded-xl hover:shadow-[0_0_12px_4px_#ccc] border-2 border-zinc-200 w-1/3 p-4 divide-y divide-slate-500 font-medium">
                {isExpanded && (
                    <input
                        className="focus:outline-none px-3 py-2"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange}
                    />
                )}
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
                {isExpanded ? (
                    <Zoom in={true}>
                        <Fab
                            onClick={handleClick}
                            size="small"
                            className="flex self-end hover:text-[#f5ba13]"
                            type="submit"
                        >
                            <AddIcon />
                        </Fab>
                    </Zoom>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
};

export default CreateNote;
