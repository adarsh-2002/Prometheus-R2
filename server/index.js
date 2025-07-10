const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || 'https://prometheus-r2-uciq.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

console.log('Environment variables:', {
  MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not set',
  JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
  CLIENT_URL: process.env.CLIENT_URL || 'https://prometheus-r2-uciq.vercel.app',
  NODE_ENV: process.env.NODE_ENV
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/prometheus-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  console.log('Database:', mongoose.connection.db.databaseName);
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  console.error('Please check your MONGODB_URI environment variable');
});

app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Server is running', 
    timestamp: new Date(),
    mongoStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    env: {
      hasMongoUri: !!process.env.MONGODB_URI,
      hasJwtSecret: !!process.env.JWT_SECRET,
      nodeEnv: process.env.NODE_ENV
    }
  });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is accessible',
    timestamp: new Date(),
    headers: req.headers
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Auth test: http://localhost:${PORT}/api/auth/test`);
}); 