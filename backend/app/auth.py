"""
Simple authentication module with hardcoded admin user
Email: admin@gmail.com
Password: admin123
"""
from fastapi import HTTPException, status
from pydantic import BaseModel
import secrets
from datetime import datetime, timedelta
from typing import Optional

# Hardcoded admin credentials
ADMIN_EMAIL = "admin@gmail.com"
ADMIN_PASSWORD = "admin123"
ADMIN_USER = {
    "id": 1,
    "email": ADMIN_EMAIL,
    "full_name": "Admin User",
    "role": "admin"
}

# In-memory session storage (simple token store)
active_sessions = {}


# Pydantic models
class LoginRequest(BaseModel):
    email: str
    password: str


class SignupRequest(BaseModel):
    email: str
    password: str
    full_name: str


class AuthResponse(BaseModel):
    success: bool
    message: str
    token: Optional[str] = None
    user: Optional[dict] = None


class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    role: str


def generate_token() -> str:
    """Generate a secure random token"""
    return secrets.token_urlsafe(32)


async def login_user(login_data: LoginRequest) -> AuthResponse:
    """
    Authenticate user with hardcoded credentials
    """
    # Debug logging
    print(f"Login attempt - Email: {login_data.email}, Password: {login_data.password}")
    print(f"Expected - Email: {ADMIN_EMAIL}, Password: {ADMIN_PASSWORD}")
    
    # Check credentials - strict comparison
    if login_data.email.strip().lower() != ADMIN_EMAIL.lower() or login_data.password != ADMIN_PASSWORD:
        print("Authentication FAILED - Invalid credentials")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    print("Authentication SUCCESSFUL")
    
    # Generate token
    token = generate_token()
    expires_at = datetime.now() + timedelta(days=7)
    
    # Store session
    active_sessions[token] = {
        "user": ADMIN_USER,
        "expires_at": expires_at
    }
    
    return AuthResponse(
        success=True,
        message="Login successful",
        token=token,
        user=ADMIN_USER
    )


async def signup_user(signup_data: SignupRequest) -> AuthResponse:
    """
    Signup not allowed - only admin user exists
    """
    raise HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail="Registration is not allowed. Please use admin credentials."
    )


async def verify_token(token: str) -> dict:
    """
    Verify token and return user info
    """
    if token not in active_sessions:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token"
        )
    
    session = active_sessions[token]
    
    # Check if token expired
    if datetime.now() > session["expires_at"]:
        del active_sessions[token]
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired"
        )
    
    return session["user"]


async def logout_user(token: str) -> dict:
    """
    Logout user by removing token
    """
    if token in active_sessions:
        del active_sessions[token]
    
    return {"success": True, "message": "Logged out successfully"}


async def get_user_profile(token: str) -> UserResponse:
    """
    Get current user profile
    """
    user = await verify_token(token)
    
    return UserResponse(
        id=user["id"],
        email=user["email"],
        full_name=user["full_name"],
        role=user["role"]
    )
