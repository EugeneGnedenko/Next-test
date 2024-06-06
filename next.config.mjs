// import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://reqres.in/img/faces",
        port: "",
        pathname: "/assets",
      },
    ],
  },
};

export default nextConfig;
