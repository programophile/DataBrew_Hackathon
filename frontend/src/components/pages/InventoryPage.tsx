import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { AlertCircle, AlertTriangle, CheckCircle, Search, Plus, Download, Package } from "lucide-react";
import { useState } from "react";

const inventoryItems = [
  {
    id: 1,
    name: "Cappuccino Beans",
    category: "Coffee Beans",
    currentStock: 24,
    unit: "kg",
    minStock: 30,
    maxStock: 100,
    reorderPoint: 35,
    supplier: "Bengal Coffee Co.",
    lastRestocked: "Oct 28, 2024",
    status: "critical",
  },
  {
    id: 2,
    name: "Espresso Beans",
    category: "Coffee Beans",
    currentStock: 42,
    unit: "kg",
    minStock: 25,
    maxStock: 80,
    reorderPoint: 30,
    supplier: "Bengal Coffee Co.",
    lastRestocked: "Oct 30, 2024",
    status: "safe",
  },
  {
    id: 3,
    name: "Vanilla Syrup",
    category: "Syrups",
    currentStock: 8,
    unit: "bottles",
    minStock: 10,
    maxStock: 30,
    reorderPoint: 12,
    supplier: "Flavor House BD",
    lastRestocked: "Oct 25, 2024",
    status: "warning",
  },
  {
    id: 4,
    name: "Caramel Syrup",
    category: "Syrups",
    currentStock: 15,
    unit: "bottles",
    minStock: 10,
    maxStock: 30,
    reorderPoint: 12,
    supplier: "Flavor House BD",
    lastRestocked: "Oct 29, 2024",
    status: "safe",
  },
  {
    id: 5,
    name: "Whole Milk",
    category: "Dairy",
    currentStock: 45,
    unit: "liters",
    minStock: 40,
    maxStock: 100,
    reorderPoint: 50,
    supplier: "Aarong Dairy",
    lastRestocked: "Nov 1, 2024",
    status: "warning",
  },
  {
    id: 6,
    name: "Paper Cups (Medium)",
    category: "Packaging",
    currentStock: 280,
    unit: "units",
    minStock: 150,
    maxStock: 500,
    reorderPoint: 200,
    supplier: "PackPro BD",
    lastRestocked: "Oct 27, 2024",
    status: "safe",
  },
  {
    id: 7,
    name: "Paper Cups (Large)",
    category: "Packaging",
    currentStock: 195,
    unit: "units",
    minStock: 150,
    maxStock: 500,
    reorderPoint: 200,
    supplier: "PackPro BD",
    lastRestocked: "Oct 27, 2024",
    status: "warning",
  },
  {
    id: 8,
    name: "Chocolate Powder",
    category: "Ingredients",
    currentStock: 12,
    unit: "kg",
    minStock: 15,
    maxStock: 40,
    reorderPoint: 18,
    supplier: "Sweet Supplies Ltd.",
    lastRestocked: "Oct 26, 2024",
    status: "warning",
  },
];

export function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const getStatusIcon = (status: string) => {
    switch (status) {
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

  const getStatusBadge = (status: string) => {
    const styles = {
      critical: "bg-red-100 text-red-700 border-red-300",
      warning: "bg-orange-100 text-orange-700 border-orange-300",
      safe: "bg-green-100 text-green-700 border-green-300",
    };
    return styles[status as keyof typeof styles] || "";
  };

  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const criticalCount = inventoryItems.filter(i => i.status === "critical").length;
  const warningCount = inventoryItems.filter(i => i.status === "warning").length;
  const safeCount = inventoryItems.filter(i => i.status === "safe").length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
              <Package className="w-6 h-6 text-[#8b5e3c]" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Total Items</p>
              <p className="text-2xl text-[#8b5e3c]">{inventoryItems.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilterStatus("critical")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-red-100 rounded-xl">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Critical Stock</p>
              <p className="text-2xl text-red-600">{criticalCount}</p>
            </div>
          </div>
          <p className="text-xs text-red-600">Reorder immediately</p>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilterStatus("warning")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-orange-100 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Low Stock</p>
              <p className="text-2xl text-orange-600">{warningCount}</p>
            </div>
          </div>
          <p className="text-xs text-orange-600">Monitor closely</p>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setFilterStatus("safe")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Healthy Stock</p>
              <p className="text-2xl text-green-600">{safeCount}</p>
            </div>
          </div>
          <p className="text-xs text-green-600">Stock levels optimal</p>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-[#8b5e3c]">Inventory Management</h3>
            <p className="text-sm text-[#8b5e3c]/60">Track and manage your stock levels</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b5e3c]/40" />
              <Input
                placeholder="Search items..."
                className="pl-10 w-64 border-[#d8c3a5]/40 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex gap-2 mb-4">
          <Badge
            className={`cursor-pointer ${filterStatus === "all" ? "bg-[#8b5e3c] text-white" : "bg-[#d8c3a5]/20 text-[#8b5e3c] hover:bg-[#d8c3a5]/40"}`}
            onClick={() => setFilterStatus("all")}
          >
            All Items
          </Badge>
          <Badge
            className={`cursor-pointer ${filterStatus === "critical" ? "bg-red-600 text-white" : "bg-red-100 text-red-700 hover:bg-red-200"}`}
            onClick={() => setFilterStatus("critical")}
          >
            Critical
          </Badge>
          <Badge
            className={`cursor-pointer ${filterStatus === "warning" ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
            onClick={() => setFilterStatus("warning")}
          >
            Low Stock
          </Badge>
          <Badge
            className={`cursor-pointer ${filterStatus === "safe" ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
            onClick={() => setFilterStatus("safe")}
          >
            Healthy
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-[#d8c3a5]/30">
                <TableHead className="text-[#8b5e3c]">Item Name</TableHead>
                <TableHead className="text-[#8b5e3c]">Category</TableHead>
                <TableHead className="text-[#8b5e3c]">Current Stock</TableHead>
                <TableHead className="text-[#8b5e3c]">Reorder Point</TableHead>
                <TableHead className="text-[#8b5e3c]">Supplier</TableHead>
                <TableHead className="text-[#8b5e3c]">Last Restocked</TableHead>
                <TableHead className="text-[#8b5e3c]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.id} className="border-[#d8c3a5]/30 hover:bg-[#d8c3a5]/10">
                  <TableCell className="text-[#8b5e3c]">{item.name}</TableCell>
                  <TableCell className="text-[#8b5e3c]/80">{item.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8b5e3c]">{item.currentStock} {item.unit}</span>
                      {item.currentStock < item.minStock && (
                        <span className="text-xs text-red-600">(Below min)</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-[#8b5e3c]/80">{item.reorderPoint} {item.unit}</TableCell>
                  <TableCell className="text-[#8b5e3c]/80">{item.supplier}</TableCell>
                  <TableCell className="text-[#8b5e3c]/80">{item.lastRestocked}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <Badge variant="outline" className={getStatusBadge(item.status)}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
