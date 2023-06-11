/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mxezfxyslmpivqujgcxn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

module.exports = nextConfig;
