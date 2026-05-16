"use client";

import { Pie, PieChart } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

const FriendshipAnalytics = () => {
  const { timeline } = useTimeline();

  if (!timeline || timeline.length === 0) {
  return (
        <div className="text-center mt-10 bg-base-200 p-40 rounded-2xl">
        <h2 className="text-3xl font-bold">No Analytics Found</h2>
        <p className="text-gray-500 mt-2">
            Add call,text & videos to timeline to get the analyctics.
        </p>
        </div>
    );
   }
   
  const analyticsData = [
    {
      name: "Call",
      value: timeline.filter((t) => t.type === "Call").length,
      fill: "#22c55e",
    },
    {
      name: "Text",
      value: timeline.filter((t) => t.type === "Text").length,
      fill: "#3b82f6",
    },
    {
      name: "Video",
      value: timeline.filter((t) => t.type === "Video").length,
      fill: "#ef4444",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-10">
        Friendship Analytics
      </h1>

      <div className="flex justify-center">
        <PieChart
          width={400}
          height={400}
        >
          <Pie
            data={analyticsData}
            dataKey="value"
            nameKey="name"
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={5}
            cornerRadius="10"
            isAnimationActive={true}
          />
        </PieChart>
      </div>


    </div>
  );
};

export default FriendshipAnalytics;