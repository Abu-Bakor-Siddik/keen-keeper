"use client";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { toast } from "react-toastify";

const QuickCheckIn = ({ id, name }) => {


  const handleCheckIn = (label) => {
    toast.success(`${label} check-in with ${name}`);
  };

  return (
    <>
      <div className="flex justify-between text-center gap-4">
        <button
          onClick={() => handleCheckIn("Call")}
          className="shadow rounded-2xl p-5 bg-base-200 items-center flex flex-col flex-1 hover:bg-base-300  cursor-pointer border-0">
          <FiPhoneCall size={20} />
          <p className="mt-1 text-sm">Call</p>
        </button>
        <button
          onClick={() => handleCheckIn("Text")}
          className="shadow rounded-2xl p-5 bg-base-200 items-center flex flex-col flex-1 hover:bg-base-300  cursor-pointer border-0">
          <MdOutlineTextsms size={20} />
          <p className="mt-1 text-sm">Text</p>
        </button>
        <button
          onClick={() => handleCheckIn("Video")}
          className="shadow rounded-2xl p-5 bg-base-200 items-center flex flex-col flex-1 hover:bg-base-300  cursor-pointer border-0">
          <LuVideo size={20} />
          <p className="mt-1 text-sm">Video</p>
        </button>
      </div>
    </>
  );
};

export default QuickCheckIn;