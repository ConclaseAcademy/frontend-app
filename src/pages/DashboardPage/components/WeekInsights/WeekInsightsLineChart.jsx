import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  {
    name: 'Mon',
    day: 1000,
  },
  {
    name: 'Tue',
    day: 3000,
  },
  {
    name: 'Wed',
    day: 2000,
  },
  {
    name: 'Thu',
    day: 2780,
  },
  {
    name: 'Fri',
    day: 1890,
  },
  {
    name: 'Sat',
    day: 2390,
  },
  {
    name: 'Sun',
    day: 3490,
  },
];

export default function WeekInsightsLineChart() {
  return (<div style={{height:'200px', padding:'0px', margin:'0px'}}>
    <ResponsiveContainer 
      width="100%" height="100%" 
      // style={{padding:'10px'}}
      >
      <LineChart width={300} height={100}
        data={data} margin={{ top: 10, right: 20, left: 20, bottom: 1 }}  >
        <Tooltip />
        {/* <Legend /> */}
        <XAxis 
          dataKey="name" stroke='#1E3868' 
          padding={0} style={{margin:'0px', padding:'0px', fontWeight:'700', fontSize:'13px'}} 
          axisLine={false} tickLine={false}  />
        <Line 
          type="monotone" dataKey="day" 
          stroke="#1E3868" strokeWidth={3} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}
