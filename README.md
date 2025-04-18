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

## Deploy on Hostinger

To deploy this Next.js application on Hostinger:

1. Build your application:
   ```bash
   npm run build
   ```

2. Upload the following files and folders to your Hostinger hosting via FTP:
   - `.next/` directory
   - `public/` directory
   - `node_modules/` directory
   - `.htaccess` file
   - `package.json` and `package-lock.json` files
   - `.env.production` file

3. If you're using Hostinger's Node.js hosting:
   - Set the Node.js version to the version used in your project
   - Set the startup file to `server.js`
   - Set the Application URL to your domain

4. If you're using shared hosting without Node.js support:
   - Export your app as a static website:
     ```bash
     next build && next export
     ```
   - Upload the `out/` directory to your hosting

5. Configure your domain in the Hostinger control panel.

6. Make sure your `.env.production` file has the correct domain set in `NEXT_PUBLIC_SITE_URL`.

For more information, check out the [Hostinger Knowledge Base](https://www.hostinger.com/tutorials).
