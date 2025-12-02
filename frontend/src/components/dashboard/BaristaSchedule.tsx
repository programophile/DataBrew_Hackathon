import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, Users } from "lucide-react";

const scheduleData = [
  { day: "Mon", date: "Nov 4", shifts: [
    { time: "8AM-2PM", baristas: 2, status: "scheduled" },
    { time: "2PM-8PM", baristas: 3, status: "peak" },
    { time: "8PM-11PM", baristas: 1, status: "scheduled" },
  ]},
  { day: "Tue", date: "Nov 5", shifts: [
    { time: "8AM-2PM", baristas: 2, status: "scheduled" },
    { time: "2PM-8PM", baristas: 4, status: "peak" },
    { time: "8PM-11PM", baristas: 2, status: "scheduled" },
  ]},
  { day: "Wed", date: "Nov 6", shifts: [
    { time: "8AM-2PM", baristas: 2, status: "scheduled" },
    { time: "2PM-8PM", baristas: 3, status: "peak" },
    { time: "8PM-11PM", baristas: 1, status: "scheduled" },
  ]},
];

export function BaristaSchedule() {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-[#8b5e3c]">Barista Scheduling</h3>
          <p className="text-sm text-[#8b5e3c]/60">AI-optimized staff allocation</p>
        </div>
        <Badge className="bg-[#8b5e3c]/10 text-[#8b5e3c] border-[#8b5e3c]/20">
          <Clock className="w-3 h-3 mr-1" />
          This Week
        </Badge>
      </div>

      <div className="space-y-4">
        {scheduleData.map((daySchedule, index) => (
          <div key={index} className="border-l-4 border-[#8b5e3c]/30 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#8b5e3c]">{daySchedule.day}</span>
              <span className="text-xs text-[#8b5e3c]/60">{daySchedule.date}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {daySchedule.shifts.map((shift, shiftIndex) => (
                <div
                  key={shiftIndex}
                  className={`p-3 rounded-lg border ${
                    shift.status === "peak"
                      ? "bg-[#8b5e3c]/10 border-[#8b5e3c]/30"
                      : "bg-[#d8c3a5]/10 border-[#d8c3a5]/30"
                  }`}
                >
                  <p className="text-xs text-[#8b5e3c]/60 mb-1">{shift.time}</p>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#8b5e3c]" />
                    <span className="text-sm text-[#8b5e3c]">{shift.baristas}</span>
                  </div>
                  {shift.status === "peak" && (
                    <Badge className="mt-1 text-xs bg-[#8b5e3c] text-white">Peak</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
        <p className="text-xs text-orange-800">
          ⚠️ AI Suggestion: Add 2 baristas on Tuesday 2PM-8PM (High demand predicted)
        </p>
      </div>
    </Card>
  );
}
