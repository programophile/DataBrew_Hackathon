import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";

const inventoryData = [
  {
    product: "Cappuccino Beans",
    currentStock: "24 kg",
    predictedDemand: "35 kg",
    demandLevel: "High Demand",
    alertLevel: "critical",
  },
  {
    product: "Syrup Bottles",
    currentStock: "8",
    predictedDemand: "12",
    demandLevel: "Medium",
    alertLevel: "warning",
  },
  {
    product: "Milk (Liters)",
    currentStock: "45 L",
    predictedDemand: "52 L",
    demandLevel: "High Demand",
    alertLevel: "warning",
  },
  {
    product: "Paper Cups",
    currentStock: "280",
    predictedDemand: "150",
    demandLevel: "Low",
    alertLevel: "safe",
  },
  {
    product: "Chocolate Powder",
    currentStock: "12 kg",
    predictedDemand: "18 kg",
    demandLevel: "Medium",
    alertLevel: "warning",
  },
];

export function InventoryTable() {
  const getAlertIcon = (level: string) => {
    switch (level) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case "safe":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="mb-4">
        <h3 className="text-[#8b5e3c]">AI Predicted Product Demand</h3>
        <p className="text-sm text-[#8b5e3c]/60">Smart inventory forecasting for the next 7 days</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-[#d8c3a5]/30">
            <TableHead className="text-[#8b5e3c]">Product</TableHead>
            <TableHead className="text-[#8b5e3c]">Current Stock</TableHead>
            <TableHead className="text-[#8b5e3c]">AI Predicted Demand</TableHead>
            <TableHead className="text-[#8b5e3c]">Reorder Alert</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryData.map((item, index) => (
            <TableRow key={index} className="border-[#d8c3a5]/30 hover:bg-[#d8c3a5]/10">
              <TableCell className="text-[#8b5e3c]">{item.product}</TableCell>
              <TableCell className="text-[#8b5e3c]/80">{item.currentStock}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-[#8b5e3c]/80">{item.predictedDemand}</span>
                  <Badge
                    variant="outline"
                    className={`${
                      item.demandLevel.includes("High")
                        ? "border-red-300 text-red-700 bg-red-50"
                        : item.demandLevel.includes("Medium")
                        ? "border-orange-300 text-orange-700 bg-orange-50"
                        : "border-green-300 text-green-700 bg-green-50"
                    }`}
                  >
                    {item.demandLevel}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>{getAlertIcon(item.alertLevel)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
