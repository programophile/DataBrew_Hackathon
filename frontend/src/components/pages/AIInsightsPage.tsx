import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkles, TrendingUp, TrendingDown, Users, Package, DollarSign, Clock, Lightbulb, Download } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const aiInsights = [
  {
    id: 1,
    type: "sales",
    icon: TrendingUp,
    title: "Sales Pattern Detected",
    description: "Iced Latte sales increased by 12% this week, primarily during afternoon hours (2PM-5PM).",
    impact: "high",
    recommendation: "Stock up on ice and milk for peak hours. Consider promoting iced beverages.",
    confidence: 94,
  },
  {
    id: 2,
    type: "staffing",
    icon: Users,
    title: "Staffing Optimization",
    description: "You may need 2 extra baristas between 5–8 PM tomorrow based on predicted customer surge.",
    impact: "medium",
    recommendation: "Schedule additional staff or offer overtime to current team members.",
    confidence: 87,
  },
  {
    id: 3,
    type: "inventory",
    icon: Package,
    title: "Inventory Alert",
    description: "Cappuccino beans running low. Current stock will last only 3 days at current consumption rate.",
    impact: "high",
    recommendation: "Place order with Bengal Coffee Co. immediately to avoid stockout.",
    confidence: 96,
  },
  {
    id: 4,
    type: "customer",
    icon: Clock,
    title: "Peak Hour Prediction",
    description: "Expected customer peak at 6:00 PM today. 25% higher traffic than usual Friday evenings.",
    impact: "medium",
    recommendation: "Prepare popular items in advance. Ensure all stations are fully stocked.",
    confidence: 89,
  },
  {
    id: 5,
    type: "revenue",
    icon: DollarSign,
    title: "Revenue Opportunity",
    description: "Customers ordering cappuccino often add a pastry. Cross-selling could increase revenue by ৳2,400/day.",
    impact: "high",
    recommendation: "Train staff to suggest pastries with coffee orders. Create combo deals.",
    confidence: 91,
  },
  {
    id: 6,
    type: "trend",
    icon: TrendingDown,
    title: "Declining Product",
    description: "Hot chocolate sales dropped 18% this month. May be due to warmer weather.",
    impact: "low",
    recommendation: "Consider seasonal menu adjustments. Introduce cold chocolate drinks.",
    confidence: 82,
  },
];

const predictionData = [
  { day: "Mon", predicted: 12500, actual: 12200 },
  { day: "Tue", predicted: 13200, actual: 13400 },
  { day: "Wed", predicted: 11800, actual: 11600 },
  { day: "Thu", predicted: 14500, actual: 14800 },
  { day: "Fri", predicted: 16200, actual: null },
  { day: "Sat", predicted: 17800, actual: null },
  { day: "Sun", predicted: 15400, actual: null },
];

const customerBehavior = [
  { hour: "8AM", visits: 45 },
  { hour: "9AM", visits: 78 },
  { hour: "10AM", visits: 92 },
  { hour: "11AM", visits: 105 },
  { hour: "12PM", visits: 125 },
  { hour: "1PM", visits: 115 },
  { hour: "2PM", visits: 98 },
  { hour: "3PM", visits: 135 },
  { hour: "4PM", visits: 142 },
  { hour: "5PM", visits: 168 },
  { hour: "6PM", visits: 195 },
  { hour: "7PM", visits: 158 },
];

export function AIInsightsPage() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-700 border-red-300";
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "low":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <Card className="p-6 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 backdrop-blur-sm border-[#8b5e3c]/20 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#8b5e3c]/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c] to-[#b08968] rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-[#8b5e3c]">AI-Powered Business Intelligence</h2>
              <p className="text-sm text-[#8b5e3c]/60">Real-time insights and predictions for your coffee shop</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-gradient-to-r from-[#8b5e3c] to-[#b08968] hover:from-[#b08968] hover:to-[#8b5e3c] text-white shadow-lg shadow-[#8b5e3c]/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate New Insights
            </Button>
          </div>
        </div>
      </Card>

      {/* AI Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiInsights.map((insight) => (
          <Card key={insight.id} className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl hover:shadow-lg transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2.5 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
                <insight.icon className="w-5 h-5 text-[#8b5e3c]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-[#8b5e3c]">{insight.title}</h4>
                  <Badge variant="outline" className={getImpactColor(insight.impact)}>
                    {insight.impact}
                  </Badge>
                </div>
                <p className="text-sm text-[#8b5e3c]/80 mb-3">{insight.description}</p>
              </div>
            </div>

            <div className="p-3 bg-[#d8c3a5]/10 rounded-lg border border-[#d8c3a5]/30 mb-3">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#8b5e3c]/60 mb-1">Recommendation</p>
                  <p className="text-sm text-[#8b5e3c]">{insight.recommendation}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-[#d8c3a5]/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8b5e3c] rounded-full"
                    style={{ width: `${insight.confidence}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#8b5e3c]/60">Confidence: {insight.confidence}%</span>
              </div>
              <Button size="sm" variant="ghost" className="text-[#8b5e3c] hover:bg-[#d8c3a5]/20">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-[#8b5e3c]">Sales Prediction Accuracy</h3>
            <p className="text-sm text-[#8b5e3c]/60">AI-predicted vs actual daily sales</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d8c3a5" opacity={0.3} />
              <XAxis dataKey="day" stroke="#8b5e3c" opacity={0.6} fontSize={12} />
              <YAxis stroke="#8b5e3c" opacity={0.6} fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fffaf3",
                  border: "1px solid #d8c3a5",
                  borderRadius: "12px",
                  color: "#8b5e3c",
                }}
              />
              <Line type="monotone" dataKey="predicted" stroke="#8b5e3c" strokeWidth={2} name="Predicted" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="actual" stroke="#22c55e" strokeWidth={3} name="Actual" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              ✨ AI Prediction Accuracy: 96.4% - Your sales forecasts are highly reliable!
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-[#8b5e3c]">Customer Visit Patterns</h3>
            <p className="text-sm text-[#8b5e3c]/60">Peak hours identification</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={customerBehavior}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d8c3a5" opacity={0.3} />
              <XAxis dataKey="hour" stroke="#8b5e3c" opacity={0.6} fontSize={12} />
              <YAxis stroke="#8b5e3c" opacity={0.6} fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fffaf3",
                  border: "1px solid #d8c3a5",
                  borderRadius: "12px",
                  color: "#8b5e3c",
                }}
              />
              <Bar dataKey="visits" fill="#8b5e3c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              🔔 Peak hours: 5PM-7PM. Consider adding 2-3 staff members during this time.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
