import React from 'react';

const data = [
  { day: 'M', value: 60 }, // Assuming the value is in minutes
  { day: 'T', value: 100 },
  { day: 'W', value: 120 },
  { day: 'T', value: 80 },
  { day: 'F', value: 70 },
  { day: 'S', value: 50 },
  { day: 'Today', value: 140 },
];

const maxValue = Math.max(...data.map(item => item.value));

const BarGraph = () => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex justify-between items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <div
              className="bg-green-500 transition-height duration-300 ease-in-out"
              style={{
                height: `${(item.value / maxValue) * 100}%`, // Calculate height as a percentage of the max value
                width: '10px' // Fixed width for each bar
              }}
            />
            <div className="text-sm text-gray-700 mt-2">{item.day}</div>
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-xs mt-4">Average time you spent per day</div>
      <div className="flex justify-between mt-2">
        <div>Set Daily Reminder</div>
        <div className="text-green-500">Reminder after you reached daily limit</div>
      </div>
    </div>
  );
};

export default BarGraph;
