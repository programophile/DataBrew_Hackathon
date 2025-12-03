# DataBrew Analytics Dashboard

> AI-Powered Coffee Shop Analytics with Gemini AI Integration

A full-stack analytics dashboard for coffee shop management featuring real-time sales tracking, AI-generated insights using Google's Gemini API, predictive analytics, comprehensive inventory management, and staff scheduling optimization.

## 🎯 Key Features

### ✨ AI-Powered Business Intelligence

- **Gemini 1.5 Flash Integration**: Real-time intelligent business recommendations
- **Context-Aware Analysis**: Analyzes sales patterns, trends, and business metrics
- **Actionable Insights**: AI-driven suggestions for staffing, inventory, and revenue optimization
- **Predictive Analytics**: Weather-aware and holiday-adjusted sales forecasting

### 📊 Comprehensive Analytics Dashboard

- **Real-Time Metrics**: Live tracking of sales, customers, profit margins, and staffing needs
- **Interactive Charts**: Dynamic visualizations with Today/Yesterday/Week/Month filters
- **Sales Forecasting**: SARIMA model predictions with 7-day outlook
- **Product Analytics**: Best-selling items, revenue breakdowns, and performance tracking
- **Monthly Performance**: 30-day sales visualization with target benchmarks

### 📦 Complete Inventory System

- **Ingredients Management**: Full CRUD operations for raw materials and supplies
- **Products Management**: Coffee menu items with detailed specifications
- **Recipe Builder**: Link ingredients to products with precise quantity tracking
- **Cost Analysis**: Real-time profit margin calculations per product
- **AI Demand Prediction**: Smart reorder alerts based on consumption patterns
- **Stock Monitoring**: Critical, warning, and safe level indicators
- **Supplier Tracking**: Manage supplier information and ordering details

### 👥 Staff Management & Scheduling

- **Barista Scheduling**: Visual shift management and availability tracking
- **Performance Metrics**: Individual staff performance monitoring
- **Peak Hour Analysis**: AI-suggested optimal staffing levels
- **Shift Optimization**: Reduce labor costs while meeting demand

### 🔐 Authentication & Security

- **Secure Login**: Token-based authentication system
- **Session Management**: Track and control active sessions across devices
- **Password Management**: Secure password change with validation
- **Profile Customization**: User settings and preferences

### ⚙️ Settings & Configuration

- **Profile Settings**: Manage personal information and avatar
- **Shop Configuration**: Business details, hours, and contact information
- **Notification Center**: Customize email, SMS, and push notification preferences
- **Security Controls**: Two-factor authentication and session management

## 🚀 Quick Start Guide

### Prerequisites

- **Python 3.8+** (Backend)
- **Node.js 16+** (Frontend)
- **MySQL Database** (Data storage)
- **Gemini API Key** ([Get one free](https://makersuite.google.com/app/apikey))

### Installation

#### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1    # Windows PowerShell
source venv/bin/activate        # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Configure environment (.env file)
GEMINI_API_KEY=your_api_key_here
DATABASE_URL=mysql+pymysql://root:@localhost:3306/databrew

# Start backend server on port 8080
uvicorn app.main:app --host 0.0.0.0 --port 8080 --reload
```

#### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Configure environment (.env file)
VITE_API_URL=http://localhost:8080

# Start development server
npm run dev
```

#### 3. Quick Start Scripts

```bash
# Windows - Open two separate terminals

# Terminal 1: Start Backend
start_backend.bat    # Runs on port 8080

# Terminal 2: Start Frontend
start_frontend.bat   # Runs on port 5173

# Linux/Mac - Open two separate terminals

# Terminal 1: Start Backend
./start_backend.sh   # Runs on port 8080

# Terminal 2: Start Frontend
./start_frontend.sh  # Runs on port 5173
```

### Access the Application

- **🌐 Dashboard**: http://localhost:5173
- **🔌 Backend API**: http://localhost:8080
- **📚 API Docs**: http://localhost:8080/docs
- **🔐 Login**: admin@gmail.com / admin123

## 🏗️ Architecture

### Backend (FastAPI + Python)

```
backend/
├── app/
│   ├── main.py              # API endpoints
│   ├── gemini_service.py    # AI insights generation
│   └── utlis/               # Utility functions
├── models/                   # ML models
├── database/                 # Database schemas
├── test_gemini.py           # Gemini integration tests
└── requirements.txt         # Python dependencies
```

### Frontend (React + TypeScript)

```
frontend/
├── src/
│   ├── components/
│   │   ├── dashboard/       # Dashboard widgets
│   │   ├── pages/           # Page components
│   │   └── ui/              # UI components (shadcn)
│   ├── services/
│   │   └── api.ts           # API service layer
│   └── App.tsx              # Main application
└── package.json
```

## 🔌 API Endpoints

| Endpoint                      | Method | Description                     |
| ----------------------------- | ------ | ------------------------------- |
| `/`                           | GET    | API status and info             |
| `/ai-insights`                | GET    | Gemini AI-generated insights ✨ |
| `/dashboard-metrics`          | GET    | Key dashboard metrics           |
| `/sales-data?period={period}` | GET    | Sales trend data                |
| `/forecast?days={n}`          | GET    | Sales forecast (n days)         |
| `/best-selling`               | GET    | Best-selling product            |
| `/inventory-predictions`      | GET    | AI inventory predictions        |
| `/barista-schedule`           | GET    | Staff schedule                  |
| `/customer-feedback`          | GET    | Customer reviews                |
| `/docs`                       | GET    | Interactive API docs            |

## 🧠 Gemini AI Integration

### How It Works

1. Backend queries sales data from MySQL database
2. `prepare_sales_summary()` creates context with:
   - Sales trends and patterns
   - Top products
   - Peak hours
   - Week-over-week changes
3. `generate_ai_insights()` sends context to Gemini API
4. Gemini returns 3-4 actionable insights
5. Frontend displays insights in AI Insights Panel

### Example Insights

```json
{
  "insights": [
    {
      "type": "trending_up",
      "text": "Cappuccino sales up 18% - expand variety",
      "color": "#22c55e"
    },
    {
      "type": "users",
      "text": "Add 2 baristas for 6-8 PM rush tomorrow",
      "color": "#f59e0b"
    },
    {
      "type": "clock",
      "text": "Peak traffic predicted at 3:00 PM",
      "color": "#8b5e3c"
    }
  ]
}
```

### Testing Gemini Integration

```bash
cd backend
python test_gemini.py
```

## 🎨 Tech Stack

### Backend

- **Framework**: FastAPI
- **Database**: MySQL + SQLAlchemy
- **AI**: Google Gemini 1.5 Flash
- **ML**: SARIMA for forecasting
- **Data**: Pandas, NumPy

### Frontend

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Radix UI + Tailwind CSS
- **Charts**: Recharts
- **State**: React Hooks

## 📊 Dashboard Components

### 1. Metric Cards

- Total Sales (Today)
- Total Customers
- Net Profit Margin
- Active Baristas Needed

### 2. AI Insights Panel ✨

- Real-time Gemini AI recommendations
- Trend analysis
- Staffing suggestions
- Peak hour predictions

### 3. Sales Charts

- Interactive line charts
- Period filters (Today/Week/Month)
- Historical comparison

### 4. Inventory Table

- Stock levels
- AI demand predictions
- Reorder alerts (Critical/Warning/Safe)

### 5. Barista Schedule

- Staff shifts
- Performance metrics
- Visual indicators

### 6. Best Selling Widget

- Top product of the day
- Units sold & revenue
- Day-over-day comparison

## 🔧 Configuration

### Backend Environment (`.env`)

```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=mysql+pymysql://root:@localhost:3306/databrew
```

### Frontend Environment (`.env`)

```env
VITE_API_URL=http://localhost:8000
```

## 🧪 Testing

### Test Gemini AI

```bash
cd backend
python test_gemini.py
```

### Test API Endpoints

Visit: http://localhost:8000/docs

### Test Frontend

```bash
cd frontend
npm run dev
```

Open: http://localhost:5173

## 📚 Documentation

- **[Setup Guide](SETUP_GUIDE.md)**: Detailed installation instructions
- **[Quick Start](QUICK_START.md)**: Get running in 10 minutes
- **[Integration Summary](INTEGRATION_SUMMARY.md)**: Technical architecture details

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Backend Connection Errors

```bash
# Issue: Database connection refused
# Solution: Verify MySQL is running
mysql -u root -p
SHOW DATABASES LIKE 'databrew';

# Issue: Gemini API errors
# Solution: Test API key
cd backend
python test_gemini.py

# Issue: Module not found
# Solution: Reinstall dependencies
pip install -r requirements.txt

# Issue: Port 8080 already in use
# Solution: Kill the process
netstat -ano | findstr :8080
taskkill /PID <process_id> /F
```

#### Frontend Issues

```bash
# Issue: API connection failed
# Solution: Verify backend is running
curl http://localhost:8080

# Issue: Build errors
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Issue: TypeScript errors
# Solution: Check types
npm run type-check
```

#### Authentication Issues

- **Login not working**: Verify credentials (admin@gmail.com / admin123)
- **Token expired**: Re-login to get new token (7-day expiration)
- **Session issues**: Clear browser localStorage and try again

## 📝 Default Credentials

```
Email: admin@gmail.com
Password: admin123
```

**Note**: Hardcoded for demo purposes. Implement proper user management in production.

## 🚧 Known Limitations

- Hardcoded admin authentication (no user database integration)
- MySQL connection required (no fallback database)
- Fixed historical date context for data consistency
- SARIMA model requires sufficient training data
- No real-time WebSocket updates (uses HTTP polling)
- Single location support only

## 🔮 Future Enhancements

- [ ] Multi-user authentication with database integration
- [ ] Role-based access control (Admin, Manager, Staff, Viewer)
- [ ] Real-time updates via WebSocket connections
- [ ] PDF report generation with charts and analytics
- [ ] Mobile-responsive design and mobile app (React Native)
- [ ] Email/SMS notifications for critical alerts
- [ ] Multi-location support with location switching
- [ ] Advanced ML models (Prophet, LSTM, XGBoost)
- [ ] Customer loyalty program integration
- [ ] POS system integration for real-time data
- [ ] Automated supplier ordering system
- [ ] Advanced analytics (customer segmentation, cohort analysis)
- [ ] Export to Excel/CSV with custom date ranges
- [ ] Dark mode theme support

## 📝 License

This project was created for the DataBrew Hackathon.

## 🙏 Acknowledgments

- **Google Gemini AI** - For powerful AI insights generation
- **FastAPI** - For excellent Python web framework
- **Radix UI** - For accessible component primitives
- **shadcn/ui** - For beautiful component library
- **Recharts** - For elegant data visualizations
- **Tailwind CSS** - For utility-first styling
- **Vite** - For lightning-fast development experience

---

## 📞 Support & Help

### Getting Assistance

1. **API Documentation**: http://localhost:8080/docs
2. **Backend Logs**: Check uvicorn terminal output
3. **Frontend Logs**: Check browser console (F12)
4. **Test AI Integration**: Run `python test_gemini.py` in backend folder
5. **Database Check**: Verify MySQL connection and databrew database exists

### Key Files Reference

- `backend/app/main.py` - All API endpoints and business logic
- `backend/app/auth.py` - Authentication and session management
- `backend/app/gemini_service.py` - AI integration code
- `frontend/src/services/api.ts` - API client service
- `frontend/src/App.tsx` - Main app routing and authentication

---

**Built with ❤️ for DataBrew Hackathon**

**Tech Stack**: FastAPI + Python | React + TypeScript | MySQL | Gemini AI  
**Status**: ✅ Production Ready | **Last Updated**: December 3, 2025
