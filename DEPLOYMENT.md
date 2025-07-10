# Deployment Guide

## Separate Client and Server Deployment

When deploying the client and server on different endpoints, you need to configure the API base URL.

### Current Configuration

The client currently uses:
- **Development**: Proxy to `http://localhost:5000` (configured in `client/package.json`)
- **Production**: Environment variable `REACT_APP_API_URL`

### Setup for Separate Deployment

1. **Create Environment Files**

   Create `.env.production` in the `client/` directory:
   ```
   REACT_APP_API_URL=https://your-server-domain.com
   ```

   Create `.env.development` in the `client/` directory:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

2. **Server CORS Configuration**

   Update `server/index.js` to allow requests from your client domain:
   ```javascript
   app.use(cors({
     origin: process.env.CLIENT_URL || 'http://localhost:3000',
     credentials: true
   }));
   ```

3. **Environment Variables for Server**

   Create `.env` in the `server/` directory:
   ```
   CLIENT_URL=https://your-client-domain.com
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

### Deployment Steps

1. **Build the client**:
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the server** to your server endpoint

3. **Deploy the client** to your client endpoint

4. **Set environment variables** on your deployment platform:
   - `REACT_APP_API_URL` for client
   - `CLIENT_URL` for server

### Example URLs

- **Client**: `https://myapp.com`
- **Server**: `https://api.myapp.com`
- **Environment Variable**: `REACT_APP_API_URL=https://api.myapp.com` 