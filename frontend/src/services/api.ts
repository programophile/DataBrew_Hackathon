// API Configuration and Service
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Generic API fetch function with error handling
async function apiRequest<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

// API Service functions
export const apiService = {
  // Get forecast data
  getForecast: (days: number = 7) =>
    apiRequest<{
      forecast_next_days: number[];
      last_date_in_data: string;
      days_forecasted: number;
    }>(`/forecast?days=${days}`),

  // Get AI insights
  getAIInsights: () =>
    apiRequest<{
      insights: Array<{
        type: string;
        text: string;
        color: string;
      }>;
    }>("/ai-insights"),

  // Get sales data
  getSalesData: (period: string = "month") =>
    apiRequest<{
      sales_data: Array<{
        date: string;
        sales: number;
      }>;
      period: string;
    }>(`/sales-data?period=${period}`),

  // Get dashboard metrics
  getDashboardMetrics: () =>
    apiRequest<{
      total_sales: number;
      sales_trend: number;
      total_customers: number;
      profit_margin: number;
      active_baristas: number;
      sales_sparkline: number[];
    }>("/dashboard-metrics"),

  // Get best selling product
  getBestSelling: () =>
    apiRequest<{
      product_name: string;
      product_type: string;
      units_sold: number;
      revenue: number;
      change_percent: number;
    }>("/best-selling"),

  // Get inventory predictions
  getInventoryPredictions: () =>
    apiRequest<{
      inventory: Array<{
        product: string;
        current_stock: string;
        predicted_demand: string;
        demand_level: string;
        alert_level: string;
      }>;
    }>("/inventory-predictions"),

  // Get barista schedule
  getBaristaSchedule: () =>
    apiRequest<{
      schedule: Array<{
        name: string;
        role: string;
        shift: string;
        performance: number;
      }>;
    }>("/barista-schedule"),

  // Get customer feedback
  getCustomerFeedback: () =>
    apiRequest<{
      feedback: Array<{
        customer: string;
        rating: number;
        comment: string;
        date: string;
      }>;
    }>("/customer-feedback"),

  // Get sales analytics
  getSalesAnalytics: (period: string = "today") =>
    apiRequest<{
      period: string;
      total_revenue: number;
      total_orders: number;
      avg_order_value: number;
      profit_margin: number;
      product_sales: Array<{
        name: string;
        sales: number;
        percentage: number;
      }>;
      hourly_sales: Array<{
        time: string;
        sales: number;
      }>;
      monthly_sales: Array<{
        date: string;
        sales: number;
        target: number;
      }>;
    }>(`/sales-analytics?period=${period}`),

  // Get cash flow data
  getCashFlow: (period: string = "month") =>
    apiRequest<{
      cash_flow: Array<{
        month: string;
        income: number;
        expenses: number;
      }>;
      period: string;
    }>(`/cash-flow?period=${period}`),

  // Generate new AI insights
  generateInsights: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/generate-insights`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error generating insights:`, error);
      throw error;
    }
  },

  // Create ingredient
  addIngredient: async (payload: {
    name: string;
    unit: string;
    stock_quantity: number;
    reorder_level: number;
    unit_cost?: number;
    supplier?: string;
    notes?: string;
  }) => {
    console.log("[API] addIngredient called");
    console.log("[API] URL:", `${API_BASE_URL}/ingredients`);
    console.log("[API] Payload:", payload);

    try {
      const response = await fetch(`${API_BASE_URL}/ingredients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[API] Response status:", response.status);
      console.log("[API] Response ok:", response.ok);

      if (!response.ok) {
        const text = await response.text();
        console.error("[API] Error response:", text);
        throw new Error(`Add ingredient failed: ${response.status} ${text}`);
      }

      const result = await response.json();
      console.log("[API] Success result:", result);
      return result;
    } catch (error) {
      console.error("[API] Fetch error:", error);
      throw error;
    }
  },

  // Update ingredient
  updateIngredient: async (
    id: number,
    payload: {
      name: string;
      unit: string;
      stock_quantity: number;
      reorder_level: number;
      unit_cost?: number;
      supplier?: string;
      notes?: string;
    }
  ) => {
    const response = await fetch(`${API_BASE_URL}/ingredients/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Update ingredient failed: ${response.status} ${text}`);
    }
    return response.json();
  },

  // Delete ingredient
  deleteIngredient: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/ingredients/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Delete ingredient failed: ${response.status} ${text}`);
    }
    return response.json();
  },

  // Create product
  addProduct: async (payload: {
    product_name: string;
    product_type: string;
    selling_price: number;
    description?: string;
  }) => {
    console.log("[API] addProduct called");
    console.log("[API] URL:", `${API_BASE_URL}/products`);
    console.log("[API] Payload:", payload);

    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("[API] Response status:", response.status);

      if (!response.ok) {
        const text = await response.text();
        console.error("[API] Error response:", text);
        throw new Error(`Add product failed: ${response.status} ${text}`);
      }

      const result = await response.json();
      console.log("[API] Success result:", result);
      return result;
    } catch (error) {
      console.error("[API] Fetch error:", error);
      throw error;
    }
  },

  // Add ingredient to product recipe
  addProductIngredient: async (
    productId: number,
    payload: { ingredient_id: number; quantity_needed: number; notes?: string }
  ) => {
    console.log("[API] addProductIngredient called");
    console.log(
      "[API] URL:",
      `${API_BASE_URL}/products/${productId}/ingredients`
    );
    console.log("[API] Payload:", payload);

    try {
      const response = await fetch(
        `${API_BASE_URL}/products/${productId}/ingredients`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      console.log("[API] Response status:", response.status);

      if (!response.ok) {
        const text = await response.text();
        console.error("[API] Error response:", text);
        throw new Error(
          `Add recipe ingredient failed: ${response.status} ${text}`
        );
      }

      const result = await response.json();
      console.log("[API] Success result:", result);
      return result;
    } catch (error) {
      console.error("[API] Fetch error:", error);
      throw error;
    }
  },

  // Remove ingredient from product recipe
  removeProductIngredient: async (productId: number, ingredientId: number) => {
    const response = await fetch(
      `${API_BASE_URL}/products/${productId}/ingredients/${ingredientId}`,
      { method: "DELETE" }
    );
    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Remove recipe ingredient failed: ${response.status} ${text}`
      );
    }
    return response.json();
  },

  // Get all ingredients
  getIngredients: async () => {
    const response = await fetch(`${API_BASE_URL}/ingredients`);
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Get ingredients failed: ${response.status} ${text}`);
    }
    return response.json();
  },

  // Get all products
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Get products failed: ${response.status} ${text}`);
    }
    return response.json();
  },

  // Get product ingredients
  getProductIngredients: async (productId: number) => {
    const response = await fetch(
      `${API_BASE_URL}/products/${productId}/ingredients`
    );
    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Get product ingredients failed: ${response.status} ${text}`
      );
    }
    return response.json();
  },

  // Settings API methods
  getProfileSettings: async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Get profile failed: ${response.status}`);
    }
    return response.json();
  },

  updateProfileSettings: async (profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
  }) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    });
    if (!response.ok) {
      throw new Error(`Update profile failed: ${response.status}`);
    }
    return response.json();
  },

  getShopSettings: async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/shop`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Get shop settings failed: ${response.status}`);
    }
    return response.json();
  },

  updateShopSettings: async (shop: {
    shopName: string;
    address: string;
    city: string;
    postal: string;
    shopPhone: string;
    shopEmail: string;
    hours: string;
  }) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/shop`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(shop),
    });
    if (!response.ok) {
      throw new Error(`Update shop settings failed: ${response.status}`);
    }
    return response.json();
  },

  getNotificationPreferences: async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Get notifications failed: ${response.status}`);
    }
    return response.json();
  },

  updateNotificationPreferences: async (preferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
    lowStock: boolean;
    salesReports: boolean;
    staffAlerts: boolean;
  }) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/notifications`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(preferences),
    });
    if (!response.ok) {
      throw new Error(`Update notifications failed: ${response.status}`);
    }
    return response.json();
  },

  changePassword: async (passwordData: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passwordData),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(
        data.detail || `Change password failed: ${response.status}`
      );
    }
    return response.json();
  },

  getActiveSessions: async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error(`Get sessions failed: ${response.status}`);
    }
    return response.json();
  },

  logoutSession: async (sessionId: number) => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/settings/logout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ session_id: sessionId }),
    });
    if (!response.ok) {
      throw new Error(`Logout session failed: ${response.status}`);
    }
    return response.json();
  },

  logoutAllSessions: async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(
      `${API_BASE_URL}/settings/logout-all-sessions`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!response.ok) {
      throw new Error(`Logout all sessions failed: ${response.status}`);
    }
    return response.json();
  },
};
