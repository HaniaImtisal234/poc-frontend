import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const handleClick = () => {
  toast.success("Button clicked successfully!");
};
const EmailSection = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-4/5">
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <h1 className="text-2xl font-semibold mb-3">Email</h1>
          <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
            Write your email here...
          </p>
        </div>

        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
          <h1 className="text-2xl font-semibold mb-4 text-center">Response</h1>
          <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
            Response for the email....
          </p>
        </div>
      </div>

      <div className="h-1/5 flex justify-end items-center bg-gray-100 space-x-4 pr-20">
        <button
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          onClick={handleClick}
        >
          Approve
        </button>
        <button
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          onClick={handleClick}
        >
          Disapprove
        </button>
      </div>
    </div>
  );
};

export default EmailSection;
