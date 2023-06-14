import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
})

export default nextConfig
