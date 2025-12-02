import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Users, UserCheck, Clock, Award, Plus, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const staffMembers = [
  {
    id: 1,
    name: "Nadia Rahman",
    role: "Head Barista",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia",
    status: "active",
    shift: "Morning",
    hoursWorked: 42,
    performance: 95,
    email: "nadia.rahman@brewmind.com",
    phone: "+880 1712-345678",
  },
  {
    id: 2,
    name: "Rafiq Ahmed",
    role: "Senior Barista",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafiq",
    status: "active",
    shift: "Evening",
    hoursWorked: 38,
    performance: 92,
    email: "rafiq.ahmed@brewmind.com",
    phone: "+880 1723-456789",
  },
  {
    id: 3,
    name: "Tasnim Chowdhury",
    role: "Barista",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tasnim",
    status: "active",
    shift: "Morning",
    hoursWorked: 40,
    performance: 88,
    email: "tasnim.c@brewmind.com",
    phone: "+880 1734-567890",
  },
  {
    id: 4,
    name: "Imran Hossain",
    role: "Barista",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Imran",
    status: "break",
    shift: "Evening",
    hoursWorked: 35,
    performance: 85,
    email: "imran.h@brewmind.com",
    phone: "+880 1745-678901",
  },
  {
    id: 5,
    name: "Ayesha Khan",
    role: "Trainee Barista",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
    status: "active",
    shift: "Morning",
    hoursWorked: 32,
    performance: 78,
    email: "ayesha.khan@brewmind.com",
    phone: "+880 1756-789012",
  },
  {
    id: 6,
    name: "Kamal Uddin",
    role: "Cashier",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kamal",
    status: "offline",
    shift: "Evening",
    hoursWorked: 40,
    performance: 90,
    email: "kamal.u@brewmind.com",
    phone: "+880 1767-890123",
  },
];

const weeklySchedule = [
  { day: "Monday", date: "Nov 4", morning: ["Nadia", "Tasnim", "Ayesha"], evening: ["Rafiq", "Imran", "Kamal"] },
  { day: "Tuesday", date: "Nov 5", morning: ["Nadia", "Tasnim"], evening: ["Rafiq", "Imran", "Kamal", "Ayesha"] },
  { day: "Wednesday", date: "Nov 6", morning: ["Nadia", "Tasnim", "Ayesha"], evening: ["Rafiq", "Imran", "Kamal"] },
  { day: "Thursday", date: "Nov 7", morning: ["Nadia", "Ayesha"], evening: ["Rafiq", "Tasnim", "Imran", "Kamal"] },
  { day: "Friday", date: "Nov 8", morning: ["Nadia", "Tasnim", "Ayesha"], evening: ["Rafiq", "Imran", "Kamal"] },
];

export function StaffManagementPage() {
  const activeStaff = staffMembers.filter(s => s.status === "active").length;
  const totalHours = staffMembers.reduce((acc, curr) => acc + curr.hoursWorked, 0);
  const avgPerformance = Math.round(staffMembers.reduce((acc, curr) => acc + curr.performance, 0) / staffMembers.length);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
              <Users className="w-6 h-6 text-[#8b5e3c]" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Total Staff</p>
              <p className="text-2xl text-[#8b5e3c]">{staffMembers.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-100 rounded-xl">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Active Today</p>
              <p className="text-2xl text-green-600">{activeStaff}</p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
              <Clock className="w-6 h-6 text-[#b08968]" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Total Hours (Week)</p>
              <p className="text-2xl text-[#8b5e3c]">{totalHours}h</p>
            </div>
          </div>
        </Card>

        <Card className="p-5 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl">
              <Award className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <div>
              <p className="text-sm text-[#8b5e3c]/60">Avg Performance</p>
              <p className="text-2xl text-[#8b5e3c]">{avgPerformance}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="team" className="w-full">
        <TabsList className="bg-white/60 border border-[#d8c3a5]/30">
          <TabsTrigger value="team" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Team Members
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Weekly Schedule
          </TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[#8b5e3c]">Staff Directory</h3>
                <p className="text-sm text-[#8b5e3c]/60">Manage your team members</p>
              </div>
              <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Staff
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {staffMembers.map((staff) => (
                <Card key={staff.id} className="p-4 bg-white border-[#d8c3a5]/30 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={staff.avatar} />
                        <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-[#8b5e3c]">{staff.name}</h4>
                        <p className="text-sm text-[#8b5e3c]/60">{staff.role}</p>
                      </div>
                    </div>
                    <Badge
                      className={
                        staff.status === "active"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : staff.status === "break"
                          ? "bg-orange-100 text-orange-700 border-orange-300"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }
                    >
                      {staff.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8b5e3c]/60">Shift:</span>
                      <span className="text-[#8b5e3c]">{staff.shift}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8b5e3c]/60">Hours (Week):</span>
                      <span className="text-[#8b5e3c]">{staff.hoursWorked}h</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8b5e3c]/60">Performance:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[#d8c3a5]/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#8b5e3c] rounded-full"
                            style={{ width: `${staff.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-[#8b5e3c]">{staff.performance}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#d8c3a5]/30">
                    <p className="text-xs text-[#8b5e3c]/60 mb-1">{staff.email}</p>
                    <p className="text-xs text-[#8b5e3c]/60">{staff.phone}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[#8b5e3c]">Weekly Schedule</h3>
                <p className="text-sm text-[#8b5e3c]/60">Staff shifts for this week</p>
              </div>
              <Button variant="outline" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20">
                <Calendar className="w-4 h-4 mr-2" />
                Edit Schedule
              </Button>
            </div>

            <div className="space-y-4">
              {weeklySchedule.map((day, index) => (
                <Card key={index} className="p-4 bg-white border-[#d8c3a5]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-center">
                      <p className="text-[#8b5e3c]">{day.day}</p>
                      <p className="text-xs text-[#8b5e3c]/60">{day.date}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-[#d8c3a5]/10 rounded-lg border border-[#d8c3a5]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-[#8b5e3c]" />
                        <span className="text-sm text-[#8b5e3c]">Morning Shift (8AM - 2PM)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {day.morning.map((name, i) => (
                          <Badge key={i} className="bg-[#8b5e3c]/10 text-[#8b5e3c] border-[#8b5e3c]/20">
                            {name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-[#8b5e3c]/10 rounded-lg border border-[#8b5e3c]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-[#8b5e3c]" />
                        <span className="text-sm text-[#8b5e3c]">Evening Shift (2PM - 10PM)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {day.evening.map((name, i) => (
                          <Badge key={i} className="bg-[#8b5e3c] text-white">
                            {name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
