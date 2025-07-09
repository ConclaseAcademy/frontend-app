import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
];

export default function WeeklyProgressCard() {

  // Custom center label
  const renderCenterLabel = ({ cx, cy }) => {
    return (
      <>
        <circle cx={cx} cy={cy} r={50} fill="#F2F93B" /> 
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight="bold"
          fill="#000"
        >
          100%
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
            fill="#F55C03BA"
            label={renderCenterLabel} 
            labelLine={false}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
