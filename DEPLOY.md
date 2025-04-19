# Deploying to Hostinger

Follow these steps to deploy your Next.js application to Hostinger:

## 1. Prepare the application

```bash
# Install dependencies
npm install

# Build the application
npm run build
```

## 2. Use the deployment script

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

This will create a `deployment` directory with all the necessary files.

## 3. Upload to Hostinger

1. Log in to your Hostinger control panel
2. Go to File Manager or use FTP to upload files
3. Upload all contents from the `deployment` directory to your public_html directory or a subdirectory
4. Upload the `.htaccess` file to the same directory

## 4. Set up Node.js on Hostinger

1. Make sure you have Node.js hosting plan on Hostinger
2. In Hostinger control panel, navigate to "Website" > "Node.js"
3. Set up the application with:
   - Entry point: `node_modules/.bin/next start`
   - Node.js version: 18.x or higher

## 5. Environment Variables

1. Set up environment variables in Hostinger control panel:
   - NEXT_PUBLIC_API_URL=https://api.swansorter.com/api/products
   - NEXT_PUBLIC_BASE_URL=https://swansorter.com

## 6. SSL and Domain Setup

1. Make sure to enable SSL for your domain
2. Configure your domain to point to your Hostinger hosting

## Troubleshooting

- If you encounter 404 errors for assets, check your next.config.mjs settings
- If API calls fail, verify your API endpoint is correct and accessible
- For other issues, check Hostinger's Node.js application logs

## Alternative Deployment Method

If Hostinger doesn't support Node.js applications, you can use static export:

1. Change your next.config.mjs:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Upload the `out` directory contents to your Hostinger hosting 