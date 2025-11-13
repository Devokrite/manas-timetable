/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "info.manas.edu.kg",
      },
    ],
  },
};

export default nextConfig;
