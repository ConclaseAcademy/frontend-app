import "./JournalAnalysis.css";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Positive',
    journalanalysis: 3000,
  },
  {
    name: 'Neutral',
    journalanalysis: 4000,
  },
  {
    name: 'Negative',
    journalanalysis: 2000,
  },
];

export default function JournalAnalysis() {
  return (
    <div className="journalanalysis-container">
      <h4>Journal Analysis</h4>
      <h3>Overall: Positive</h3>
      <p>Last 30 Days</p>

      <div style={{ height: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 20, bottom: 10, left: 60 }}
            barCategoryGap={10}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name" 
              stroke="#5D93FE"
              style={{fontWeight:'700', fontSize:'13px'}}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="journalanalysis" fill="#5D93FE80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
