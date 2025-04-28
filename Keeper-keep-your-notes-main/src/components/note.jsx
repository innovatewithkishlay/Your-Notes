import React from "react";
import PropDisplay from "./propDisplay";

export default function Note(props) {
    return (
        <div className="flex-grow">
            <div className="grid gap-2 md:gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                {props.notes.map((note, index) => {
                    return (
                        <PropDisplay
                            {...props}
                            key={index}
                            id={index}
                            title={note.title}
                            content={note.content}
                        />
                    );
                })}
            </div>
        </div>
    );
}
