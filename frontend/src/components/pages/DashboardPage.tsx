import { MetricCard } from "../dashboard/MetricCard";
import { SalesChart } from "../dashboard/SalesChart";
import { CashFlowChart } from "../dashboard/CashFlowChart";
import { InventoryTable } from "../dashboard/InventoryTable";
import { AIInsightsPanel } from "../dashboard/AIInsightsPanel";
import { BaristaSchedule } from "../dashboard/BaristaSchedule";
import { BestSelling } from "../dashboard/BestSelling";
import { CustomerFeedback } from "../dashboard/CustomerFeedback";
import { Coffee, Users, DollarSign, UserCheck } from "lucide-react";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Section A - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={Coffee}
          title="Total Sales (Today)"
          value="৳12,540"
          trend="up"
          trendValue="+8.2%"
          sparkData={[8200, 8500, 9100, 8800, 9300, 10200, 12540]}
          iconColor="#8b5e3c"
        />
        <MetricCard
          icon={Users}
          title="Total Customers"
          value="320"
          trend="up"
          trendValue="+12%"
          sparkData={[180, 220, 250, 280, 290, 310, 320]}
          iconColor="#b08968"
        />
        <MetricCard
          icon={DollarSign}
          title="Net Profit Margin"
          value="22%"
          trend="up"
          trendValue="+3.5%"
          sparkData={[18, 18.5, 19, 20, 21, 21.5, 22]}
          iconColor="#22c55e"
        />
        <MetricCard
          icon={UserCheck}
          title="Active Baristas Needed"
          value="3"
          trend="down"
          trendValue="6 PM – 10 PM"
          sparkData={[2, 2, 3, 4, 3, 3, 3]}
          iconColor="#f59e0b"
        />
      </div>

      {/* Section B - Sales & Cash Flow Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <CashFlowChart />
      </div>

      {/* Section C - Inventory Table */}
      <InventoryTable />

      {/* Section D & E - AI Insights and Barista Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsightsPanel />
        <BaristaSchedule />
      </div>

      {/* Optional Widgets - Best Selling & Customer Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BestSelling />
        <CustomerFeedback />
      </div>
    </div>
  );
}
