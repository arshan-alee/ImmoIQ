import React, { useState } from "react";

const Navbar = () => {

    return (
        <nav className="bg-gradient-to-r from-secondary via-primary to-secondary p-4">
            <div className="relative flex justify-between items-center p-3">

                <img src='/burger-menu.svg' alt="menu" className="h-8" />
                <img src='/Immo-Logo-white.svg' alt="logo" className="absolute left-1/2 transform -translate-x-1/2 flex" />

                <div className="flex space-x-4 justify-center">
                    <img src='/linkedin.svg' alt="linkedin" className="h-5" />
                    <img src='/instagram.svg' alt="instagram" className="h-6" />
                    <button className="text-white font-semibold">KONTAKT</button>
                </div>


            </div>
            
        </nav>
    );
};

export default Navbar;
