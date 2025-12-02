import { useState } from "react";
import { Coffee, Eye, EyeOff, Sparkles } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export function LoginPage({ onLogin, onSwitchToSignup }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#f9f5f2] flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d8c3a5] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b08968] rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 relative overflow-hidden">
          {/* AI Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8b5e3c] opacity-10 rounded-full blur-3xl"></div>
          
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8b5e3c] to-[#b08968] rounded-2xl mb-4 shadow-lg">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-[#8b5e3c] mb-2">Welcome Back</h1>
            <p className="text-[#8b5e3c]/70">Sign in to BrewMind Analytics</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-[#8b5e3c] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#fffaf3] border border-[#d8c3a5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent transition-all text-[#8b5e3c] placeholder:text-[#8b5e3c]/40"
                placeholder="you@coffeeshop.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-[#8b5e3c] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#fffaf3] border border-[#d8c3a5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent transition-all text-[#8b5e3c] placeholder:text-[#8b5e3c]/40 pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b5e3c]/50 hover:text-[#8b5e3c] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#d8c3a5] text-[#8b5e3c] focus:ring-[#8b5e3c] focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-[#8b5e3c]/70 group-hover:text-[#8b5e3c] transition-colors">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-[#8b5e3c] hover:text-[#b08968] transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8b5e3c] to-[#b08968] text-white py-3 rounded-xl hover:shadow-lg hover:shadow-[#8b5e3c]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              <span>Sign In</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d8c3a5]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white/80 text-[#8b5e3c]/60">or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#d8c3a5] rounded-xl hover:bg-[#fffaf3] hover:border-[#8b5e3c] transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-[#8b5e3c]">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#d8c3a5] rounded-xl hover:bg-[#fffaf3] hover:border-[#8b5e3c] transition-all"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-[#8b5e3c]">Facebook</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-[#8b5e3c]/70">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToSignup}
                className="text-[#8b5e3c] hover:text-[#b08968] transition-colors"
              >
                Sign up for free
              </button>
            </p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-6 text-center">
          <p className="text-[#8b5e3c]/60">
            AI Intelligence meets Café Comfort ☕
          </p>
        </div>
      </div>
    </div>
  );
}
