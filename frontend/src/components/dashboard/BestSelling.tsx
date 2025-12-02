import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function BestSelling() {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-[#8b5e3c]" />
        <h3 className="text-[#8b5e3c]">Best-Selling Coffee of the Day</h3>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#d8c3a5]/20 flex-shrink-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
            alt="Iced Caramel Latte"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-[#8b5e3c] mb-1">Iced Caramel Latte</h4>
          <p className="text-sm text-[#8b5e3c]/60 mb-2">Sweet and smooth with caramel syrup</p>
          
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs text-[#8b5e3c]/60">Units Sold</p>
              <p className="text-[#8b5e3c]">127</p>
            </div>
            <div className="h-8 w-px bg-[#d8c3a5]"></div>
            <div>
              <p className="text-xs text-[#8b5e3c]/60">Revenue</p>
              <p className="text-[#8b5e3c]">৳15,240</p>
            </div>
            <div className="h-8 w-px bg-[#d8c3a5]"></div>
            <Badge className="bg-green-100 text-green-700 border-green-300">
              +18% vs yesterday
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
