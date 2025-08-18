import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// Define types for the data
interface ChartData {
  month: string;
  blue: number;
  green: number;
  red: number;
}

// Define types for tooltip props
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const MonthlyBarChart: React.FC = () => {
  const data: ChartData[] = [
    { month: 'Jan', blue: 35, green: 27, red: 9 },
    { month: 'Feb', blue: 5, green: 27, red: 9 },
    { month: 'Mar', blue: 14, green: 6, red: 2 },
    { month: 'Apr', blue: 14, green: 25, red: 10 },
    { month: 'May', blue: 9, green: 1, red: 6 },
    { month: 'Jun', blue: 36, green: 48, red: 7 },
    { month: 'Jul', blue: 23, green: 36, red: 17 },
    { month: 'Aug', blue: 23, green: 6, red: 17 },
    { month: 'Sep', blue: 36, green: 33, red: 6 },
  ];

  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${entry.value}m`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom Y-axis tick formatter
  const formatYAxisTick = (value: number): string => `${value}m`;

  return (
    <div className="w-full h-[197px] bg-gray-50 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="25%"
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#6B7280',
              fontSize: 13,
              fontWeight: 500,
            }}
          />
          <YAxis
            tickFormatter={formatYAxisTick}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#6B7280',
              fontSize: 12,
            }}
            domain={[0, 50]}
            tickCount={6}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Blue bars */}
          <Bar
            dataKey="blue"
            name="Series 1"
            fill="#4338CA"
            radius={[3, 3, 0, 0]}
            maxBarSize={32}
          />

          {/* Green bars */}
          <Bar
            dataKey="green"
            name="Series 2"
            fill="#059669"
            radius={[3, 3, 0, 0]}
            maxBarSize={32}
          />

          {/* Red bars */}
          <Bar 
            dataKey="red" 
            name="Series 3" 
            fill="#DC2626" 
            radius={[3, 3, 0, 0]} 
            maxBarSize={32} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;