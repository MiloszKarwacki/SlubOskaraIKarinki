"use client";
import React, { useState } from "react";

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleMouseDown = () => {
    setShowEasterEgg(true);
  };

  const handleMouseUp = () => {
    setShowEasterEgg(false);
  };

  return (
    <div className="text-xs text-center my-4 border-t border-black pt-4 relative">
      Created by
      <div
        className={`cursor-pointer ${showEasterEgg ? "animate-bounce" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {showEasterEgg ? "XD" : "Miłosz Karwacki"}
      </div>
    </div>
  );
};

export default Footer;
