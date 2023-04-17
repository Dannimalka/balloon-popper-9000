/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const babelOptions = {
  presets: ["@babel/preset-react"],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        throwIfNamespace: false,
      },
    ],
  ],
};

module.exports = nextConfig;
