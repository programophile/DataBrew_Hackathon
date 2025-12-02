import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Sparkles, TrendingUp, Users, Clock } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    text: "Sales for Iced Latte increased by 12% this week.",
    color: "#22c55e",
  },
  {
    icon: Users,
    text: "You may need 2 extra baristas between 5–8 PM tomorrow.",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    text: "Predicted customer peak: 6:00 PM.",
    color: "#8b5e3c",
  },
];

export function AIInsightsPanel() {
  return (
    <Card className="p-6 bg-gradient-to-br from-[#8b5e3c]/5 to-[#d8c3a5]/10 backdrop-blur-sm border-[#8b5e3c]/20 rounded-2xl relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5e3c]/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-gradient-to-br from-[#8b5e3c] to-[#b08968] rounded-xl">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-[#8b5e3c]">AI Insights</h3>
        </div>

        <div className="space-y-3 mb-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#d8c3a5]/30 hover:shadow-md transition-all"
            >
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${insight.color}15` }}>
                <insight.icon className="w-4 h-4" style={{ color: insight.color }} />
              </div>
              <p className="text-sm text-[#8b5e3c]/90 flex-1">{insight.text}</p>
            </div>
          ))}
        </div>

        <Button className="w-full bg-gradient-to-r from-[#8b5e3c] to-[#b08968] hover:from-[#b08968] hover:to-[#8b5e3c] text-white shadow-lg shadow-[#8b5e3c]/30">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate AI Report
        </Button>
      </div>
    </Card>
  );
}
