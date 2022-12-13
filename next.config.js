/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    magicKey: 'pk_live_29889B3F23E6AEDF',
    magicSecretKey: 'sk_live_F7079F3950473655',
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
