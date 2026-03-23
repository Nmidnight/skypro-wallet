import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
const data = [
  { name: "Еда", value: 3590, color: "#d9b6ff" },
  { name: "Транспорт", value: 1835, color: "#ffb53d" },
  { name: "Жильё", value: 0, color: "#6ee4fe" },
  { name: "Развлечения", value: 1250, color: "#b0aeff" },
  { name: "Образование", value: 600, color: "#bcec30" },
  { name: "Другое", value: 2306, color: "#ffb9b8" },
];

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

export const AnalysisTable = () => {
  return (
    <div style={{ maxWidth: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 30 }}>
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
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
