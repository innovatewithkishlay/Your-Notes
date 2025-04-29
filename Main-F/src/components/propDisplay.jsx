import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const PropDisplay = (props) => {
    const handleClick = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="bg-white p-2.5 m-4 rounded-xl hover:shadow-[0_0_12px_4px_#ccc] w-52 max-h-42 p-4 divide-slate-500 border-2 border-zinc-200 font-medium transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 relative">
            <h2 className="p-1">{props.title}</h2>
            <p className="max-h-28 p-2 overflow-y-auto font-light text-sm scroll mb-2">
                {props.content}
            </p>
            <button
                onClick={handleClick}
                className="text-[#f5ba13] absolute right-3 bottom-1 hover:text-slate-500"
                type="delete"
            >
                <DeleteIcon />
            </button>
        </div>
    );
};

export default PropDisplay;
