import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const percentage = 70;

const data01 = [
  { name: 'Filled', value: percentage },
  { name: 'Remaining', value: 100 - percentage },
];

export default function WeeklyProgressCard() {
  const renderCenterLabel = ({ cx, cy }) => {
    return (
      <>
        <circle cx={cx} cy={cy} r={50} fill="#D9D9D9" /> {/* optional yellow or gray background */}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight="bold"
          fill="#000"
        >
          {percentage}%
        </text>
      </>
    );
  };

  return (
    <div style={{ height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            label={renderCenterLabel}
            labelLine={false}
            stroke="none"
          >
            <Cell fill="#319F43A3" />  {/* Filled part - greenish */}
            <Cell fill="#E0E0E0" />    {/* Unfilled part - gray */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
