import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Bell,
  Lock,
  Store,
  CreditCard,
  Users as UsersIcon,
  Smartphone,
  Mail,
  Globe,
  Save,
} from "lucide-react";
import { useState, useEffect } from "react";
import { apiService } from "../../services/api";

export function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    lowStock: true,
    salesReports: true,
    staffAlerts: true,
  });

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    avatar: "",
  });

  const [shop, setShop] = useState({
    shopName: "",
    address: "",
    city: "",
    postal: "",
    shopPhone: "",
    shopEmail: "",
    hours: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const [profileData, shopData, notificationData, sessionData] =
        await Promise.all([
          apiService.getProfileSettings(),
          apiService.getShopSettings(),
          apiService.getNotificationPreferences(),
          apiService.getActiveSessions(),
        ]);

      setProfile(profileData);
      setShop(shopData);
      setNotifications(notificationData);
      setSessions(sessionData.sessions || []);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      await apiService.updateProfileSettings(profile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveShop = async () => {
    setLoading(true);
    try {
      await apiService.updateShopSettings(shop);
      alert("Shop details updated successfully!");
    } catch (error) {
      console.error("Error updating shop:", error);
      alert("Failed to update shop details");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNotifications = async () => {
    setLoading(true);
    try {
      await apiService.updateNotificationPreferences(notifications);
      alert("Notification preferences updated successfully!");
    } catch (error) {
      console.error("Error updating notifications:", error);
      alert("Failed to update notification preferences");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      await apiService.changePassword(passwords);
      alert("Password changed successfully!");
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.error("Error changing password:", error);
      alert(error.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutSession = async (sessionId: number) => {
    try {
      await apiService.logoutSession(sessionId);
      setSessions(sessions.filter((s) => s.id !== sessionId));
      alert("Session logged out successfully!");
    } catch (error) {
      console.error("Error logging out session:", error);
      alert("Failed to logout session");
    }
  };

  const handleLogoutAllSessions = async () => {
    try {
      await apiService.logoutAllSessions();
      setSessions(sessions.filter((s) => s.isCurrent));
      alert("All other sessions logged out successfully!");
    } catch (error) {
      console.error("Error logging out sessions:", error);
      alert("Failed to logout sessions");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-[#8b5e3c]">Settings</h2>
        <p className="text-[#8b5e3c]/60">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-white/60 border border-[#d8c3a5]/30">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="shop"
            className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white"
          >
            Shop Details
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-[#8b5e3c] data-[state=active]:text-white"
          >
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <h3 className="text-[#8b5e3c] mb-6">Profile Information</h3>

            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback>
                  {profile.firstName?.[0]}
                  {profile.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <Button
                  variant="outline"
                  className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20 mb-2"
                >
                  Change Photo
                </Button>
                <p className="text-sm text-[#8b5e3c]/60">
                  JPG, PNG or GIF. Max size 2MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label
                  htmlFor="firstName"
                  className="text-[#8b5e3c] mb-2 block"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-[#8b5e3c] mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#8b5e3c] mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#8b5e3c] mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="role" className="text-[#8b5e3c] mb-2 block">
                Role
              </Label>
              <Input
                id="role"
                value={profile.role}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
                className="border-[#d8c3a5]/40"
              />
            </div>

            <Button
              className="bg-[#8b5e3c] hover:bg-[#b08968] text-white"
              onClick={handleSaveProfile}
              disabled={loading}
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </Card>
        </TabsContent>

        {/* Shop Details */}
        <TabsContent value="shop" className="mt-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
            <h3 className="text-[#8b5e3c] mb-6">Coffee Shop Information</h3>

            <div className="space-y-6 mb-6">
              <div>
                <Label htmlFor="shopName" className="text-[#8b5e3c] mb-2 block">
                  Shop Name
                </Label>
                <Input
                  id="shopName"
                  value={shop.shopName}
                  onChange={(e) =>
                    setShop({ ...shop, shopName: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-[#8b5e3c] mb-2 block">
                  Address
                </Label>
                <Input
                  id="address"
                  value={shop.address}
                  onChange={(e) =>
                    setShop({ ...shop, address: e.target.value })
                  }
                  className="border-[#d8c3a5]/40"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city" className="text-[#8b5e3c] mb-2 block">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={shop.city}
                    onChange={(e) => setShop({ ...shop, city: e.target.value })}
                    className="border-[#d8c3a5]/40"
                  />
                </div>
                <div>
                  <Label htmlFor="postal" className="text-[#8b5e3c] mb-2 block">
                    Postal Code
                  </Label>
                  <Input
                    id="postal"
                    value={shop.postal}
                    onChange={(e) =>
                      setShop({ ...shop, postal: e.target.value })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="shopPhone"
                    className="text-[#8b5e3c] mb-2 block"
                  >
                    Shop Phone
                  </Label>
                  <Input
                    id="shopPhone"
                    value={shop.shopPhone}
                    onChange={(e) =>
                      setShop({ ...shop, shopPhone: e.target.value })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="shopEmail"
                    className="text-[#8b5e3c] mb-2 block"
                  >
                    Shop Email
                  </Label>
                  <Input
                    id="shopEmail"
                    type="email"
                    value={shop.shopEmail}
                    onChange={(e) =>
                      setShop({ ...shop, shopEmail: e.target.value })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="hours" className="text-[#8b5e3c] mb-2 block">
                  Business Hours
                </Label>
                <Input
                  id="hours"
                  value={shop.hours}
                  onChange={(e) => setShop({ ...shop, hours: e.target.value })}
                  className="border-[#d8c3a5]/40"
                />
              </div>
            </div>

            <Button
              className="bg-[#8b5e3c] hover:bg-[#b08968] text-white"
              onClick={handleSaveShop}
              disabled={loading}
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Changes"}
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
                        <p className="text-sm text-[#8b5e3c]/60">
                          Receive notifications via email
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[#8b5e3c]" />
                      <div>
                        <p className="text-[#8b5e3c]">SMS Notifications</p>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Receive notifications via SMS
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, sms: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-[#8b5e3c]" />
                      <div>
                        <p className="text-[#8b5e3c]">Push Notifications</p>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Receive push notifications in browser
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, push: checked })
                      }
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
                      <p className="text-sm text-[#8b5e3c]/60">
                        Get notified when inventory is low
                      </p>
                    </div>
                    <Switch
                      checked={notifications.lowStock}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          lowStock: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div>
                      <p className="text-[#8b5e3c]">Daily Sales Reports</p>
                      <p className="text-sm text-[#8b5e3c]/60">
                        Daily summary of sales performance
                      </p>
                    </div>
                    <Switch
                      checked={notifications.salesReports}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          salesReports: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30">
                    <div>
                      <p className="text-[#8b5e3c]">Staff Alerts</p>
                      <p className="text-sm text-[#8b5e3c]/60">
                        Updates about staff schedule and attendance
                      </p>
                    </div>
                    <Switch
                      checked={notifications.staffAlerts}
                      onCheckedChange={(checked) =>
                        setNotifications({
                          ...notifications,
                          staffAlerts: checked,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                className="bg-[#8b5e3c] hover:bg-[#b08968] text-white"
                onClick={handleSaveNotifications}
                disabled={loading}
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Save Preferences"}
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
                  <Label
                    htmlFor="currentPassword"
                    className="text-[#8b5e3c] mb-2 block"
                  >
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwords.currentPassword}
                    onChange={(e) =>
                      setPasswords({
                        ...passwords,
                        currentPassword: e.target.value,
                      })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="newPassword"
                    className="text-[#8b5e3c] mb-2 block"
                  >
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwords.newPassword}
                    onChange={(e) =>
                      setPasswords({
                        ...passwords,
                        newPassword: e.target.value,
                      })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-[#8b5e3c] mb-2 block"
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwords.confirmPassword}
                    onChange={(e) =>
                      setPasswords({
                        ...passwords,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="border-[#d8c3a5]/40"
                  />
                </div>
              </div>

              <Button
                className="bg-[#8b5e3c] hover:bg-[#b08968] text-white"
                onClick={handleChangePassword}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Password"}
              </Button>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
              <h3 className="text-[#8b5e3c] mb-6">Two-Factor Authentication</h3>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[#8b5e3c]">
                    Enable Two-Factor Authentication
                  </p>
                  <p className="text-sm text-[#8b5e3c]/60">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch />
              </div>

              <p className="text-sm text-[#8b5e3c]/60 mb-4">
                Two-factor authentication adds an additional layer of security
                to your account by requiring more than just a password to sign
                in.
              </p>

              <Button
                variant="outline"
                className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-[#d8c3a5]/20"
              >
                Setup 2FA
              </Button>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-[#d8c3a5]/30 rounded-2xl">
              <h3 className="text-[#8b5e3c] mb-4">Active Sessions</h3>
              <p className="text-sm text-[#8b5e3c]/60 mb-4">
                Manage and logout your active sessions on other browsers and
                devices.
              </p>

              <div className="space-y-3 mb-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#d8c3a5]/30"
                  >
                    <div className="flex items-center gap-3">
                      {session.device.includes("Mobile") ? (
                        <Smartphone className="w-5 h-5 text-[#8b5e3c]" />
                      ) : (
                        <Globe className="w-5 h-5 text-[#8b5e3c]" />
                      )}
                      <div>
                        <p className="text-[#8b5e3c]">{session.device}</p>
                        <p className="text-sm text-[#8b5e3c]/60">
                          {session.location} • {session.lastActive}
                        </p>
                      </div>
                    </div>
                    {session.isCurrent ? (
                      <Badge className="bg-green-100 text-green-700 border-green-300">
                        Current
                      </Badge>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#d8c3a5] text-[#8b5e3c] hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                        onClick={() => handleLogoutSession(session.id)}
                      >
                        Logout
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50 w-full"
                onClick={handleLogoutAllSessions}
              >
                Logout All Other Sessions
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
