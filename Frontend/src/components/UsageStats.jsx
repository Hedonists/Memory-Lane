import React from 'react';

export default function UsageStats() {
  const stats = [
    { value: '143', label: 'Conversations' },
    { value: '1,872', label: 'Messages' },
  ];

  return (
    <div className="p-3 sm:p-4 bg-zinc-900 border border-zinc-800 rounded-md mb-6">
      <h2 className="text-lg font-medium mb-2">Usage Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-zinc-800 p-3 rounded">
            <h3 className="text-xl font-outfit ">{stat.value}</h3>
            <p className="text-xs text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
