const { withContentlayer } = require("next-contentlayer")

module.exports = withContentlayer({
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
