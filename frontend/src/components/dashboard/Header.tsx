import { Search, Bell, MessageSquare, ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { useState } from "react";

export function Header({ onLogout }: { onLogout?: () => void }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="h-16 bg-white/60 backdrop-blur-md border-b border-[#d8c3a5]/30 px-6 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="text-[#8b5e3c]">AI Overview</h2>
        <p className="text-xs text-[#8b5e3c]/60">☕ BrewMind Analytics — Turning Every Cup Into Data-Driven Growth</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b5e3c]/40" />
          <Input
            placeholder="Search reports, staff, or items…"
            className="w-64 pl-10 border-[#d8c3a5]/40 bg-white focus:border-[#8b5e3c]"
          />
        </div>

        {/* Notification Icons */}
        <button className="relative p-2 hover:bg-[#d8c3a5]/20 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-[#8b5e3c]" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#8b5e3c] text-xs">
            3
          </Badge>
        </button>

        <button className="relative p-2 hover:bg-[#d8c3a5]/20 rounded-lg transition-colors">
          <MessageSquare className="w-5 h-5 text-[#8b5e3c]" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#8b5e3c] text-xs">
            2
          </Badge>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 hover:bg-[#d8c3a5]/20 p-2 rounded-lg transition-colors"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <ChevronDown className="w-4 h-4 text-[#8b5e3c]" />
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && onLogout && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#d8c3a5]/30 overflow-hidden z-20">
              <div className="p-3 border-b border-[#d8c3a5]/30">
                <p className="text-[#8b5e3c]">Sarah Ahmed</p>
                <p className="text-[#8b5e3c]/60">Owner</p>
              </div>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  onLogout();
                }}
                className="w-full px-4 py-2 text-left text-[#8b5e3c] hover:bg-[#d8c3a5]/20 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}