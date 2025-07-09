# Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Quick Start

1. **Install Dependencies** (Already done)
   ```bash
   npm install
   npm run install-client
   ```

2. **Set up Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/prometheus-auth
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

3. **Start MongoDB**
   - If using local MongoDB: Start the MongoDB service
   - If using cloud MongoDB: Update the MONGODB_URI in .env file

4. **Run the Application**
   ```bash
   # Development mode (both frontend and backend)
   npm run dev
   
   # Or run separately:
   # Backend only: npm run server
   # Frontend only: npm run client
   ```

5. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Features Available

### Authentication
- ✅ User registration with validation
- ✅ User login with JWT tokens
- ✅ Password hashing and security
- ✅ Form validation and error handling

### Profile Management
- ✅ View user profile information
- ✅ Edit profile details (name, phone, address)
- ✅ Real-time updates and validation
- ✅ Secure profile data storage

### UI/UX
- ✅ Modern, responsive design
- ✅ Beautiful gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Mobile-friendly interface

## API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

## Testing the Application

1. **Signup**: Create a new account with your details
2. **Login**: Sign in with your credentials
3. **Profile**: View and edit your profile information
4. **Logout**: Sign out and return to login page

## Deployment

The application is ready for deployment on:
- Heroku
- Vercel
- Netlify
- Railway
- DigitalOcean

Update the environment variables for production deployment. 