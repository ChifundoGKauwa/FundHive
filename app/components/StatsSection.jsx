"use client";

import useCountUp from "./useCountUp";

const stats = [
  { label: "Projects Funded", value: 2847, type: "number" },
  { label: "Total Raised", value: 12400000, type: "currency" },
  { label: "Active Backers", value: 45892, type: "number" },
  { label: "Success Rate", value: 78, type: "percent" },
];

function formatStatValue(value, type) {
  if (type === "currency") return "$" + value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (type === "percent") return value + "%";
  return value.toLocaleString();
}

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => {
          const animatedValue = useCountUp({
            end: stat.value,
            duration: 1200,
            format: (v) => formatStatValue(v, stat.type),
          });
          return (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{animatedValue}</div>
              <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 