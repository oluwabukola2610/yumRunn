import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
     <FaArrowCircleUp
      className="fixed w-full left-[40%] bottom-[40px] z-1 text-black"
      onClick={scrollToTop}
      size={25}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default ScrollTop;
