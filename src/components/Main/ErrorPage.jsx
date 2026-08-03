import { useLoadingStore } from "@/stores/LoadingStore";
import React from "react";
import { useEffect } from "react";

const ErrorPage = () => {
  const { error } = useLoadingStore();

  useEffect(() => {
    console.log("This is the error- ", error);
  }, []);

  return (
    <div className=" h-screen flex-1 flex justify-center pt-27 bg-neutral-700">
      <p className="text-neutral-50">An error occurred</p>
    </div>
  );
};

export default ErrorPage;
