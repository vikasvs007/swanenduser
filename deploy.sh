#!/bin/bash

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Create a deployment directory if it doesn't exist
mkdir -p deployment

# Copy necessary files for deployment
echo "Copying files for deployment..."
cp -r .next deployment/
cp -r public deployment/
cp package.json deployment/
cp package-lock.json deployment/
cp next.config.mjs deployment/
cp .env.production deployment/

# Create a minimal package.json for production
cat > deployment/package.json << EOL
{
  "name": "swansorter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.3.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
EOL

echo "Deployment package ready. Upload the contents of the 'deployment' directory to Hostinger."
echo "After uploading, run: npm install --production && npm start" 