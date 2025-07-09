# Prometheus R2 - MERN Stack Authentication App

A complete web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, profile management, and modern UI design.

## Features

### Frontend (React.js) - 20%
- ✅ Modern, responsive signup/login page
- ✅ Beautiful gradient design with smooth animations
- ✅ Form validation and error handling
- ✅ User profile display with editable fields
- ✅ JWT token-based authentication
- ✅ Persistent login state

### Database Connection (MongoDB) - 20%
- ✅ MongoDB connection with Mongoose ODM
- ✅ User model with password hashing
- ✅ Data validation and sanitization
- ✅ Secure password storage using bcryptjs

### Backend API (Node.js/Express) - 20%
- ✅ RESTful API endpoints for authentication
- ✅ JWT token generation and verification
- ✅ Input validation using express-validator
- ✅ Error handling and response formatting
- ✅ Profile management endpoints

### Complete Integration - 20%
- ✅ Full-stack integration between frontend and backend
- ✅ API calls from React to Express server
- ✅ Real-time form submission and response handling
- ✅ Token-based authentication flow
- ✅ Profile data synchronization

### Live Hosting Ready - 20%
- ✅ Production build configuration
- ✅ Environment variable setup
- ✅ Static file serving for React app
- ✅ Deployment-ready structure

## Tech Stack

- **Frontend**: React.js, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Step 1: Clone and Install Dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
npm run install-client
```

### Step 2: Environment Configuration

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/prometheus-auth
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Step 3: Start MongoDB

Make sure MongoDB is running on your system. If using local MongoDB:

```bash
# Start MongoDB service
mongod
```

### Step 4: Run the Application

#### Development Mode (Both Frontend and Backend)
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

#### Frontend Only
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Health Check
- `GET /api/health` - Server health status

## User Features

### Signup Process
1. User fills out registration form with:
   - Full Name (required)
   - Email (required, unique)
   - Password (required, min 6 characters)
   - Phone Number (optional)
   - Address (optional)

2. Backend validates input and creates user account
3. Password is hashed using bcryptjs
4. JWT token is generated and returned
5. User is automatically redirected to login

### Login Process
1. User enters email and password
2. Backend validates credentials
3. JWT token is generated and returned
4. User is redirected to profile page

### Profile Management
1. User can view their profile information
2. Edit mode allows updating name, phone, and address
3. Changes are saved to database
4. Real-time validation and error handling

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS configuration
- Environment variable protection
- Secure HTTP headers

## Project Structure

```
prometheus-r2/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # React entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── index.js           # Express server
├── package.json           # Root package.json
├── env.example           # Environment variables template
└── README.md             # This file
```

## Deployment

### Local Production Build
```bash
# Build the React app
npm run build

# Start production server
npm start
```

### Cloud Deployment
The application is ready for deployment on platforms like:
- Heroku
- Vercel
- Netlify
- Railway
- DigitalOcean

Update the `MONGODB_URI` in your environment variables to point to your cloud MongoDB instance.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 