import { withContentlayer } from "./next-contentlayer.cjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
};

export default withContentlayer(nextConfig);
