import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const MonthlyBarChart = () => {
  const data = [
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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry, index) => (
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
  const formatYAxisTick = (value) => `${value}m`;

  return (
    <div className="w-full h-[197px]  bg-gray-50 rounded-lg">
      {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance Chart</h3> */}
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
          <Bar dataKey="red" name="Series 3" fill="#DC2626" radius={[3, 3, 0, 0]} maxBarSize={32} />
        </BarChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      {/* <div className="flex justify-center mt-4 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
          <span className="text-sm text-gray-600">Series 1</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
          <span className="text-sm text-gray-600">Series 2</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
          <span className="text-sm text-gray-600">Series 3</span>
        </div>
      </div> */}
    </div>
  );
};

export default MonthlyBarChart;
