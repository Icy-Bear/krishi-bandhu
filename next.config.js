/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000
  },
  typescript: {
    ignoreBuildErrors: false
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  }
};

module.exports = nextConfig;
