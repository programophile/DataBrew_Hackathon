import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Sparkles,
  TrendingUp,
  Brain,
  BarChart3,
  Zap,
  Shield,
  Users,
  Coffee,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Clock,
  Target,
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f5f2] via-[#fef8f4] to-[#f5ebe0]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5e3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d8c3a5]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-[#8b5e3c] to-[#b08968] rounded-2xl">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#8b5e3c]">DataBrew</h1>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#8b5e3c] mb-6 leading-tight">
              Making Business Analytics{" "}
              <span className="bg-gradient-to-r from-[#8b5e3c] to-[#b08968] bg-clip-text text-transparent">
                Affordable
              </span>{" "}
              for Food & Beverage Industry 
            </h2>
            <p className="text-xl md:text-2xl text-[#8b5e3c]/80 mb-8 leading-relaxed">
              AI-powered insights that transform your business data into a
              data-driven business analytics in seconds. No enterprise budget required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-[#8b5e3c] to-[#b08968] hover:from-[#6d4a2e] hover:to-[#8b5e3c] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white px-8 py-6 text-lg rounded-xl transition-all"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8b5e3c]/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Free Forever Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Setup in 5 Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#8b5e3c] mb-4">
              Everything You Need to Grow
            </h3>
            <p className="text-lg text-[#8b5e3c]/70 max-w-2xl mx-auto">
              Enterprise-grade analytics designed for small to medium food &
              beverage businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <Brain className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                AI-Powered Insights
              </h4>
              <p className="text-[#8b5e3c]/70">
                Get intelligent recommendations powered by Google Gemini AI.
                Predict trends, optimize inventory, and boost profits.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                Sales Forecasting
              </h4>
              <p className="text-[#8b5e3c]/70">
                Advanced SARIMA models predict your sales with 90%+ accuracy.
                Plan inventory and staffing with confidence.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                Real-Time Analytics
              </h4>
              <p className="text-[#8b5e3c]/70">
                Track sales, customer trends, and product performance in
                real-time. Make decisions based on data, not guesswork.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <Target className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                Inventory Management
              </h4>
              <p className="text-[#8b5e3c]/70">
                Never run out of stock again. Smart predictions tell you exactly
                what to order and when.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <Users className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                Staff Optimization
              </h4>
              <p className="text-[#8b5e3c]/70">
                AI suggests optimal staffing levels based on predicted customer
                flow. Reduce labor costs while improving service.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/20 rounded-xl w-fit mb-4">
                <Zap className="w-6 h-6 text-[#8b5e3c]" />
              </div>
              <h4 className="text-xl font-semibold text-[#8b5e3c] mb-2">
                Instant Setup
              </h4>
              <p className="text-[#8b5e3c]/70">
                No complex integrations. Connect your data and start getting
                insights in minutes, not months.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#8b5e3c] mb-6">
                Built for Food & Beverage Businesses
              </h3>
              <p className="text-lg text-[#8b5e3c]/80 mb-8">
                We understand the unique challenges of running a coffee shop,
                restaurant, or café. DataBrew is purpose-built for your
                industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8b5e3c] mb-1">
                      Affordable Pricing
                    </h4>
                    <p className="text-[#8b5e3c]/70">
                      Start free, scale as you grow. No hidden fees or
                      enterprise minimums.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8b5e3c] mb-1">
                      Industry-Specific
                    </h4>
                    <p className="text-[#8b5e3c]/70">
                      Pre-configured for coffee shops, cafés, and restaurants.
                      No complex setup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8b5e3c] mb-1">
                      Easy to Use
                    </h4>
                    <p className="text-[#8b5e3c]/70">
                      Beautiful interface designed for busy owners. No data
                      science degree needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8b5e3c] mb-1">
                      Mobile Ready
                    </h4>
                    <p className="text-[#8b5e3c]/70">
                      Check your dashboard from anywhere. Make decisions on the
                      go.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5e3c]/20 to-[#d8c3a5]/20 rounded-3xl blur-3xl"></div>
              <Card className="relative p-8 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8b5e3c]/10 to-[#d8c3a5]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Average Revenue Increase
                        </p>
                        <p className="text-2xl font-bold text-[#8b5e3c]">23%</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8b5e3c]/10 to-[#d8c3a5]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Clock className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Time Saved Per Week
                        </p>
                        <p className="text-2xl font-bold text-[#8b5e3c]">
                          12 Hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8b5e3c]/10 to-[#d8c3a5]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Profit Margin Improvement
                        </p>
                        <p className="text-2xl font-bold text-[#8b5e3c]">18%</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8b5e3c]/10 to-[#d8c3a5]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-orange-600" />
                      <div>
                        <p className="text-sm text-[#8b5e3c]/60">
                          Waste Reduction
                        </p>
                        <p className="text-2xl font-bold text-[#8b5e3c]">31%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#8b5e3c] mb-4">
              Simple, Affordable Pricing
            </h3>
            <p className="text-lg text-[#8b5e3c]/70">
              No hidden fees. No enterprise minimums. Just great analytics at a
              fair price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#8b5e3c] mb-2">
                Starter
              </h4>
              <p className="text-[#8b5e3c]/60 mb-4">
                Perfect for getting started
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#8b5e3c]">Free</span>
                <span className="text-[#8b5e3c]/60"> forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Basic analytics dashboard
                </li>
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Up to 1,000 transactions/month
                </li>
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Email support
                </li>
              </ul>
              <Button
                onClick={onGetStarted}
                variant="outline"
                className="w-full border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white"
              >
                Start Free
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 bg-gradient-to-br from-[#8b5e3c] to-[#b08968] text-white relative overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 right-0 bg-white text-[#8b5e3c] px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Popular
              </div>
              <h4 className="text-2xl font-bold mb-2">Professional</h4>
              <p className="text-white/80 mb-4">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-white/80"> /month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Everything in Starter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  AI-powered insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Sales forecasting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Unlimited transactions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Priority support
                </li>
              </ul>
              <Button
                onClick={onGetStarted}
                className="w-full bg-white text-[#8b5e3c] hover:bg-white/90"
              >
                Start Free Trial
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-[#d8c3a5]/30 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#8b5e3c] mb-2">
                Enterprise
              </h4>
              <p className="text-[#8b5e3c]/60 mb-4">
                For multi-location chains
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#8b5e3c]">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Everything in Professional
                </li>
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Multi-location support
                </li>
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Advanced integrations
                </li>
                <li className="flex items-center gap-2 text-[#8b5e3c]/80">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Dedicated account manager
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-white"
              >
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5e3c]/10 to-[#d8c3a5]/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-[#8b5e3c] mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-[#8b5e3c] mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-[#8b5e3c]/80 mb-8">
            Join hundreds of coffee shops and cafés already using DataBrew to
            make smarter decisions.
          </p>
          <Button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-[#8b5e3c] to-[#b08968] hover:from-[#6d4a2e] hover:to-[#8b5e3c] text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-[#8b5e3c]/60 mt-4">
            No credit card required • Free forever plan available • Setup in 5
            minutes
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#8b5e3c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6" />
                <span className="text-xl font-bold">DataBrew</span>
              </div>
              <p className="text-white/80 text-sm">
                Making business analytics affordable for food & beverage
                businesses.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>© 2025 DataBrew. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
