import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";


const CustomLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - 12}
      fill="#000"
      fontSize={14}
      fontWeight={600}
      textAnchor="middle"
    >
      {value} ₽
    </text>
  );
};

export const AnalysisTable = ({data}) => {
  return (
    <div style={{ maxWidth: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data || []} margin={{ top: 30 }}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#000", fontSize: 12, fontWeight: 400 }}
          />
          <YAxis hide />
          <Tooltip />

          <Bar
            dataKey="value"
            radius={[12, 12, 12, 12]}
            label={<CustomLabel />}
            minPointSize={2}
          >
            {data?.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
