import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center bg-neutral-600 justify-center">
      <div className="w-14 aspect-square border-3 border-e-transparent border-neutral-50 rounded-full animate-spin animate-duration-125"></div>
    </div>
  );
};

export default Loading;
