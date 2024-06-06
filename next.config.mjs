// import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
