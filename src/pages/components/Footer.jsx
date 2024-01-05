import React from "react";
import Link from "next/Link";

const Footer = () => {
    const year = new Date().getFullYear();
    return (

        <div id="footer">
            <div className="text-center py-4 text-[#232323]">
                <p>© {year} Julian Grande</p>
            </div>
        </div>

    );
};

export default Footer;