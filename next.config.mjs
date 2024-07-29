/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.hubspot.com",
      "media.licdn.com",
      "dcdh7ea8gkhvt.cloudfront.net",
    ],
  },
};

export default nextConfig;
