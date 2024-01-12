import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="text-center py-4 text-[#232323] font-[Helvetica]">
        <p>© {year} Julian Grande. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
