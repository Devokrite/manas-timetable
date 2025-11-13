import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "info.manas.edu.kg",
      },
    ],
  /* config options here */
  reactCompiler: true,
};
}

export default nextConfig;
