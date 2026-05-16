"use client";

import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const TimelinePage = () => {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("All");
  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") {
      return <FiPhoneCall className="text-green-700 text-xl" />;
    }
    if (type === "Text") {
      return <MdOutlineTextsms className="text-blue-500 text-xl" />;
    }
    if (type === "Video") {
      return <LuVideo className="text-red-500 text-xl" />;
    }
  };

  if (!timeline || timeline.length === 0) {
  return (
    <div className="text-center mt-10 p-40 container mx-auto bg-base-200 rounded-2xl">
      <h2 className="text-3xl font-bold">No Timeline Found</h2>
      <p className="text-gray-500 mt-2">
        Start a Call, Text, or Video check in to add them in your timeline.
      </p>
    </div>
  );
}

  return (
    <div className="max-w-3xl mx-auto mt-10 px-5">
      <h2 className="text-4xl font-bold mb-8">Timeline</h2>
        <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 gap-2">{filter} <RiArrowDropDownLine /> </div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 gap-2 p-2 shadow-sm">
                <button onClick={() => setFilter("All")} className={`btn ${filter === "All" ? "btn-neutral" : ""}`}>All</button>
                <button onClick={() => setFilter("Call")} className={`btn ${filter === "Call" ? "btn-success" : ""}`}>Call</button>
                <button onClick={() => setFilter("Text")} className={`btn ${filter === "Text" ? "btn-info" : ""}`}>Text</button>
                <button onClick={() => setFilter("Video")} className={`btn ${filter === "Video" ? "btn-error" : ""}`}>Video</button>
            </ul>
        </div>
      <div className="space-y-5">
        {filteredTimeline.map((item,index) => (
          <div
            key={index}
            className="flex items-center gap-4 shadow p-5 rounded-2xl">
            <div>{getIcon(item.type)}</div>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
