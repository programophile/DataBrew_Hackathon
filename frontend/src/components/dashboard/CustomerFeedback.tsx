import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Smile, Meh, Frown } from "lucide-react";

const sentimentData = [
  { label: "Positive", count: 248, percentage: 72, color: "#22c55e", icon: Smile },
  { label: "Neutral", count: 68, percentage: 20, color: "#f59e0b", icon: Meh },
  { label: "Negative", count: 28, percentage: 8, color: "#ef4444", icon: Frown },
];

export function CustomerFeedback() {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="mb-5">
        <h3 className="text-[#8b5e3c]">Customer Feedback Summary</h3>
        <p className="text-sm text-[#8b5e3c]/60">Sentiment analysis from this week</p>
      </div>

      <div className="space-y-4">
        {sentimentData.map((sentiment, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <sentiment.icon className="w-5 h-5" style={{ color: sentiment.color }} />
                <span className="text-sm text-[#8b5e3c]">{sentiment.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#8b5e3c]/80">{sentiment.count}</span>
                <Badge
                  variant="outline"
                  style={{
                    borderColor: sentiment.color + "40",
                    color: sentiment.color,
                    backgroundColor: sentiment.color + "10",
                  }}
                >
                  {sentiment.percentage}%
                </Badge>
              </div>
            </div>
            <div className="w-full h-2 bg-[#d8c3a5]/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${sentiment.percentage}%`,
                  backgroundColor: sentiment.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-sm text-green-800">
          ✨ Great job! Customer satisfaction is up by 5% compared to last week.
        </p>
      </div>
    </Card>
  );
}
