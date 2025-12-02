import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const cashFlowData = [
  { month: "Jun", income: 125000, expenses: 95000 },
  { month: "Jul", income: 138000, expenses: 102000 },
  { month: "Aug", income: 145000, expenses: 108000 },
  { month: "Sep", income: 152000, expenses: 112000 },
  { month: "Oct", income: 168000, expenses: 118000 },
];

export function CashFlowChart() {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[#8b5e3c]">Cash Flow Breakdown</h3>
          <p className="text-sm text-[#8b5e3c]/60">Income vs Expenses</p>
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
        <BarChart data={cashFlowData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d8c3a5" opacity={0.3} />
          <XAxis dataKey="month" stroke="#8b5e3c" opacity={0.6} fontSize={12} />
          <YAxis stroke="#8b5e3c" opacity={0.6} fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fffaf3",
              border: "1px solid #d8c3a5",
              borderRadius: "12px",
              color: "#8b5e3c",
            }}
          />
          <Legend />
          <Bar dataKey="income" fill="#8b5e3c" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expenses" fill="#d8c3a5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
