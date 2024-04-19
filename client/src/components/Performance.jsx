import React from "react";
import BarGraph from "./BarGraph";
import GaugeChart from "./Grade";

const Performance = () => {
  const metrics = {
    studyTime: "3 hours",
    quizzesTaken: "5",
    averageScore: "45%",
    averageImprovement: "12%",
  };
  const MetricCard = ({ title, metric }) => (
    <div className="border-b border-gray-200 py-2">
      <div className="flex justify-between">
        <h3 className="text-gray-600">{title}</h3>
        <span className="text-gray-900">{metric}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Performance
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Weekly Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              Weekly Summary of Your Education Performance Metrics
            </h2>
            <MetricCard title="Study Time" metric={metrics.studyTime} />
            <MetricCard title="Quizzes Taken" metric={metrics.quizzesTaken} />
            <MetricCard title="Average Score" metric={metrics.averageScore} />
          </div>

          {/* Bar Chart Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">2h 20m</h2>
            <p className="text-sm text-gray-600 mb-4">
              Average time you spent per day
            </p>
            <div className="h-1/2">
              <BarGraph />
            </div>
          </div>

          {/* Progress Circle Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">User's StudyScore</h2>
            <GaugeChart score={90} />
          </div>

          {/* Average Improvement Card */}
          <div className="col-span-full md:col-span-2 lg:col-span-1 bg-green-500 p-6 rounded-lg shadow text-white">
            <h2 className="text-2xl font-semibold">
              {metrics.averageImprovement}
            </h2>
            <p>Average Improvement</p>
            <p>Aprox for each session</p>
            {/* Dropdown or additional content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
