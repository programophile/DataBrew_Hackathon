import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { date: "Oct 1", sales: 8500 },
  { date: "Oct 3", sales: 9200 },
  { date: "Oct 5", sales: 8800 },
  { date: "Oct 7", sales: 11000 },
  { date: "Oct 9", sales: 10500 },
  { date: "Oct 11", sales: 12300 },
  { date: "Oct 13", sales: 11800 },
  { date: "Oct 15", sales: 13500 },
  { date: "Oct 17", sales: 12900 },
  { date: "Oct 19", sales: 14200 },
  { date: "Oct 21", sales: 13800 },
  { date: "Oct 23", sales: 15100 },
  { date: "Oct 25", sales: 14500 },
  { date: "Oct 27", sales: 16200 },
  { date: "Oct 29", sales: 15800 },
  { date: "Oct 31", sales: 17300 },
];

export function SalesChart() {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[#8b5e3c]">Sales Trend Over Time</h3>
          <p className="text-sm text-[#8b5e3c]/60">Past 30 days performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white">
            Today
          </Button>
          <Button variant="outline" size="sm" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white">
            Week
          </Button>
          <Button variant="outline" size="sm" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white bg-[#8b5e3c] text-white">
            Month
          </Button>
          <Button variant="outline" size="sm" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white">
            Custom
          </Button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d8c3a5" opacity={0.3} />
          <XAxis dataKey="date" stroke="#8b5e3c" opacity={0.6} fontSize={12} />
          <YAxis stroke="#8b5e3c" opacity={0.6} fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fffaf3",
              border: "1px solid #d8c3a5",
              borderRadius: "12px",
              color: "#8b5e3c",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8b5e3c"
            strokeWidth={3}
            dot={{ fill: "#8b5e3c", r: 4 }}
            activeDot={{ r: 6, fill: "#8b5e3c" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
