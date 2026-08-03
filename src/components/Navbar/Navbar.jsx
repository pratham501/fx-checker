import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[16px] sm:px-[24px] sm:py-[20px] ">
      <Logo />
      <p className="uppercase text-neutral-200 text-[10px] sm:text-[14px]">
        164 currencies
      </p>
    </div>
  );
};

export default Navbar;
