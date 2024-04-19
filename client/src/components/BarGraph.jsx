import React from "react";

const data = [
  { day: "M", value: 60 },
  { day: "T", value: 100 },
  { day: "W", value: 120 },
  { day: "T", value: 80 },
  { day: "F", value: 70 },
  { day: "S", value: 50 },
  { day: "Today", value: 140 },
];

const maxValue = Math.max(...data.map((item) => item.value));
const minHeight = 10; // Minimum height for the smallest bar to be visible

const BarGraph = () => {
  return (
    <div className="max-w-xs mx-auto p-4">
      <div className="flex justify-between items-end px-4 h-40">
        {" "}
        {/* Adjusted the padding and background color for visibility */}
        {data.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div
              className="bg-green-500"
              style={{
                height: `${Math.max((item.value / maxValue) * 100, minHeight)}px`, // Use max to ensure minHeight
                width: "1em",
                transition: "height 0.3s ease-in-out",
                borderRadius: "1em",
              }}
            ></div>
            <span className="text-sm text-gray-700 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-xs mt-4 text-center">
        Average time you spent per day
      </div>
      <div className="flex justify-between text-xs mt-4">
        <button className="text-blue-500 hover:text-blue-700">
          Set Daily Reminder
        </button>
        <span className="text-green-500">
          Reminder after you reached daily limit
        </span>
      </div>
    </div>
  );
};

export default BarGraph;
