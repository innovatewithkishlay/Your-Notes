import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
export default function Header() {
    return (
        <header>
            <nav className="bg-[#f5ba13]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 relative flex items-center">
                                {/* <img src="./img/icon.png" alt="icon" /> */}
                                <DescriptionIcon className="text-white hover:rotate-180"/>
                                <span className="text-white ml-2 text-2xl heading font-semi-bold">
                                    KEEPER{" "}
                                    <span className="text-sm">
                                        - Keep Your Notes
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
