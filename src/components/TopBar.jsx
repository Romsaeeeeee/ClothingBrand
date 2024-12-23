import React from "react";

export default function TopBar() {
    return (
        <div className="w-full h-16 flex justify-center items-center gap-20 px-10 text-lg font-medium text-white bg-[#137B64] shadow-bottommd">
            <a href="">Home</a>
            <a href="">Collections</a>
            <a href="">About</a>
        </div>
    );
}
