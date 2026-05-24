This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Dockerization Guide

This repository has been fully containerized using a production-ready, highly optimized multi-stage Docker setup.

### Prerequisites
- Docker Engine & Docker Compose
- `.env.local` containing your Supabase keys (see `.env.example`)

### Local Development
To run the development container with hot-reloading enabled:
```bash
docker compose up web-dev
```
*This maps your local directory into the container. Any changes you make will instantly reflect on `localhost:3000`.*

### Production Preview & Deployment
To test or run the production build locally:
```bash
docker compose up --build web-prod
```
*This uses the multi-stage `Dockerfile` to build the Next.js app in `standalone` mode, resulting in a minimal footprint (<150MB) and extremely fast startup times. Telemetry is disabled and it runs as a non-root `nextjs` user for security.*

### Environment Variables
For the container to run successfully, ensure you have provided the following in your `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Troubleshooting & Maintenance
- **Missing Images**: Ensure Supabase URLs are correctly configured in `next.config.ts`. The container networking defaults to bridge and will resolve public `supabase.co` domains natively.
- **Port Conflicts**: If port `3000` is taken, modify the ports in `docker-compose.yml` (e.g., `"3001:3000"`).
- **Clearing Cache**: To force a clean install, run `docker compose build --no-cache web-prod`.
