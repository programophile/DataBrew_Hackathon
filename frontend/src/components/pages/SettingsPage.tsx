import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bell, Lock, Store, CreditCard, Users as UsersIcon, Smartphone, Mail, Globe, Save } from "lucide-react";
import { useState } from "react";

export function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    lowStock: true,
    salesReports: true,
    staffAlerts: true,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-[#8b5e3c]">Settings</h2>
        <p className="text-[#8b5e3c]/60">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-white/60 border border-[#d8c3a5]/30">
          <TabsTrigger value="profile" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="shop" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Shop Details
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white">
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <h3 className="text-[#8b5e3c] mb-6">Profile Information</h3>

            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20 mb-2">
                  Change Photo
                </Button>
                <p className="text-sm text-[#8b5e3c]/60">JPG, PNG or GIF. Max size 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName" className="text-[#8b5e3c] mb-2 block">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" className="border-[#d8c3a5]/40" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-[#8b5e3c] mb-2 block">Last Name</Label>
                <Input id="lastName" defaultValue="Ahmed" className="border-[#d8c3a5]/40" />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#8b5e3c] mb-2 block">Email Address</Label>
                <Input id="email" type="email" defaultValue="sarah.ahmed@brewmind.com" className="border-[#d8c3a5]/40" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#8b5e3c] mb-2 block">Phone Number</Label>
                <Input id="phone" defaultValue="+880 1712-345678" className="border-[#d8c3a5]/40" />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="role" className="text-[#8b5e3c] mb-2 block">Role</Label>
              <Input id="role" defaultValue="Owner & Manager" className="border-[#d8c3a5]/40" />
            </div>

            <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </Card>
        </TabsContent>

        {/* Shop Details */}
        <TabsContent value="shop" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <h3 className="text-[#8b5e3c] mb-6">Coffee Shop Information</h3>

            <div className="space-y-6 mb-6">
              <div>
                <Label htmlFor="shopName" className="text-[#8b5e3c] mb-2 block">Shop Name</Label>
                <Input id="shopName" defaultValue="BrewMind Coffee House" className="border-[#d8c3a5]/40" />
              </div>

              <div>
                <Label htmlFor="address" className="text-[#8b5e3c] mb-2 block">Address</Label>
                <Input id="address" defaultValue="123 Gulshan Avenue, Dhaka 1212" className="border-[#d8c3a5]/40" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city" className="text-[#8b5e3c] mb-2 block">City</Label>
                  <Input id="city" defaultValue="Dhaka" className="border-[#d8c3a5]/40" />
                </div>
                <div>
                  <Label htmlFor="postal" className="text-[#8b5e3c] mb-2 block">Postal Code</Label>
                  <Input id="postal" defaultValue="1212" className="border-[#d8c3a5]/40" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="shopPhone" className="text-[#8b5e3c] mb-2 block">Shop Phone</Label>
                  <Input id="shopPhone" defaultValue="+880 2-9876543" className="border-[#d8c3a5]/40" />
                </div>
                <div>
                  <Label htmlFor="shopEmail" className="text-[#8b5e3c] mb-2 block">Shop Email</Label>
                  <Input id="shopEmail" type="email" defaultValue="contact@brewmind.com" className="border-[#d8c3a5]/40" />
                </div>
              </div>

              <div>
                <Label htmlFor="hours" className="text-[#8b5e3c] mb-2 block">Business Hours</Label>
                <Input id="hours" defaultValue="8:00 AM - 11:00 PM (Daily)" className="border-[#d8c3a5]/40" />
              </div>
            </div>

            <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <h3 className="text-[#8b5e3c] mb-6">Notification Preferences</h3>

            <div className="space-y-6">
              {/* Notification Channels */}
              <div>
                <h4 className="text-[#8b5e3c] mb-4">Notification Channels</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#8b5e3c]" />
                      <div>
                        <p className="text-[#8b5e3c]">Email Notifications</p>
                        <p className="text-sm text-[#8b5e3c]/60">Receive notifications via email</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[#8b5e3c]" />
                      <div>
                        <p className="text-[#8b5e3c]">SMS Notifications</p>
                        <p className="text-sm text-[#8b5e3c]/60">Receive notifications via SMS</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-[#8b5e3c]" />
                      <div>
                        <p className="text-[#8b5e3c]">Push Notifications</p>
                        <p className="text-sm text-[#8b5e3c]/60">Receive push notifications in browser</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-[#d8c3a5]/30" />

              {/* Notification Types */}
              <div>
                <h4 className="text-[#8b5e3c] mb-4">Notification Types</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div>
                      <p className="text-[#8b5e3c]">Low Stock Alerts</p>
                      <p className="text-sm text-[#8b5e3c]/60">Get notified when inventory is low</p>
                    </div>
                    <Switch
                      checked={notifications.lowStock}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, lowStock: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div>
                      <p className="text-[#8b5e3c]">Daily Sales Reports</p>
                      <p className="text-sm text-[#8b5e3c]/60">Daily summary of sales performance</p>
                    </div>
                    <Switch
                      checked={notifications.salesReports}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, salesReports: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div>
                      <p className="text-[#8b5e3c]">Staff Alerts</p>
                      <p className="text-sm text-[#8b5e3c]/60">Updates about staff schedule and attendance</p>
                    </div>
                    <Switch
                      checked={notifications.staffAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, staffAlerts: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="mt-6">
          <div className="space-y-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
              <h3 className="text-[#8b5e3c] mb-6">Change Password</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="currentPassword" className="text-[#8b5e3c] mb-2 block">Current Password</Label>
                  <Input id="currentPassword" type="password" className="border-[#d8c3a5]/40" />
                </div>
                <div>
                  <Label htmlFor="newPassword" className="text-[#8b5e3c] mb-2 block">New Password</Label>
                  <Input id="newPassword" type="password" className="border-[#d8c3a5]/40" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-[#8b5e3c] mb-2 block">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" className="border-[#d8c3a5]/40" />
                </div>
              </div>

              <Button className="bg-[#8b5e3c] hover:bg-[#b08968] text-white">
                Update Password
              </Button>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
              <h3 className="text-[#8b5e3c] mb-6">Two-Factor Authentication</h3>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[#8b5e3c]">Enable Two-Factor Authentication</p>
                  <p className="text-sm text-[#8b5e3c]/60">Add an extra layer of security to your account</p>
                </div>
                <Switch />
              </div>

              <p className="text-sm text-[#8b5e3c]/60 mb-4">
                Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.
              </p>

              <Button variant="outline" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20">
                Setup 2FA
              </Button>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
              <h3 className="text-[#8b5e3c] mb-4">Active Sessions</h3>
              <p className="text-sm text-[#8b5e3c]/60 mb-4">
                Manage and logout your active sessions on other browsers and devices.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#8b5e3c]" />
                    <div>
                      <p className="text-[#8b5e3c]">Chrome on Windows</p>
                      <p className="text-sm text-[#8b5e3c]/60">Dhaka, Bangladesh • Active now</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300">Current</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#8b5e3c]" />
                    <div>
                      <p className="text-[#8b5e3c]">Mobile App</p>
                      <p className="text-sm text-[#8b5e3c]/60">Dhaka, Bangladesh • 2 hours ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-red-50 hover:border-red-300 hover:text-red-600">
                    Logout
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 w-full">
                Logout All Other Sessions
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
