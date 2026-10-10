/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  async redirects() {
    return [
      // Vocabularia was removed from the portfolio. The site has no /projects index yet, so point to the section.
      { source: "/projects/vocabularia", destination: "/#projects", statusCode: 301 },
    ];
  },
};

module.exports = nextConfig;
