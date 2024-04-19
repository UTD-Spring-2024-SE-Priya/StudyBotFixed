import React from 'react';

const GaugeChart = ({ score }) => {
  // This function calculates the rotation for the gauge needle
  // for a score out of 100.
  const getRotation = (score) => {
    // Normalize the score to a value between 0 and 100.
    const normalizedScore = Math.min(Math.max(score, 0), 100);
    // Calculate the needle's rotation from -90 to 90 degrees
    return normalizedScore * 1.8 - 90;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center items-center">
        <svg width="120" height="60">
          {/* Gauge background arc */}
          <path
            d="M 10,60 A 50,50 0 0,1 110,60"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="20"
          />
          {/* Gauge value arc */}
          <path
            d="M 10,60 A 50,50 0 0,1 110,60"
            fill="none"
            stroke="#4ade80"
            strokeWidth="20"
            strokeDasharray="157" // Half the circumference of the arc
            strokeDashoffset={157 - (score / 100) * 157}
          />
          {/* Needle */}
          <g transform={`rotate(${getRotation(score)} 60 60)`}>
            <path
              d="M 60,15 L 58,60 L 62,60 Z"
              fill="#374151"
            />
          </g>
        </svg>
      </div>
      <div className="text-3xl font-semibold">{score}</div>
      <div className="text-sm text-gray-500 mt-2">
        Here are some tips on how to improve your score
      </div>
      <button
        className="mt-4 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Details
      </button>
    </div>
  );
};

export default GaugeChart;
