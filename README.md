This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Hostinger using Git

To deploy this Next.js application on Hostinger using Git:

1. Log in to your Hostinger control panel.

2. Navigate to "Websites" > select your domain > "Hosting" tab.

3. Set up Git deployment:
   - Look for "Git" or "Advanced" section in the control panel
   - Enable Git version control
   - Create a new repository or connect to an existing one

4. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

5. Push your code to the repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

6. On the Hostinger server (via SSH or Terminal in cPanel):
   ```bash
   cd /path/to/repository
   npm install
   ```

7. Update your `.env.production` file with your actual domain:
   ```
   NEXT_PUBLIC_SITE_URL=https://swansorter.com
   NODE_ENV=production
   ```

8. Build your application:
   ```bash
   npm run build
   ```

9. For Hostinger's Node.js hosting:
   - Set Node.js version in control panel (use the same as your local version)
   - Configure application start command: `node server.js`
   - Set Application URL to your domain

10. Set up PM2 (if available) to keep your app running:
    ```bash
    npm install pm2 -g
    pm2 start server.js --name your-app-name
    pm2 startup
    pm2 save
    ```

11. Configure your domain in the Hostinger control panel.

For more information, check out the [Hostinger Knowledge Base](https://www.hostinger.com/tutorials).
