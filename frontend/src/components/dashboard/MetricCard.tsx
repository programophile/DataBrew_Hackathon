import { Card } from "../ui/card";
import { LucideIcon } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  sparkData: number[];
  iconColor?: string;
}

export function MetricCard({ icon: Icon, title, value, trend, trendValue, sparkData, iconColor = "#8b5e3c" }: MetricCardProps) {
  const chartData = sparkData.map((value, index) => ({ value, index }));

  return (
    <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg hover:shadow-[#8b5e3c]/10 transition-all rounded-2xl">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
          <Icon className="w-5 h-5" style={{ color: iconColor }} />
        </div>
        <div className="text-right">
          <span className={`text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </span>
        </div>
      </div>

      <h3 className="text-xs text-[#8b5e3c]/60 mb-1">{title}</h3>
      <p className="text-2xl text-[#8b5e3c] mb-3">{value}</p>

      {/* Sparkline */}
      <div className="h-10 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={iconColor}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
