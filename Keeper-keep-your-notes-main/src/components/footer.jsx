import React from "react";

export default function Footer() {
    return (
        <footer className="relative">
            <div className="relative h-10 grid place-items-center ">
                <p className="text-[#94a3b8]">
                    Copyright &#169; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
