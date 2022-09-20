/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "rb.gy"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rb.gy",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
