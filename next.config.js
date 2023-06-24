// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/commerce",
  },
}

module.exports = nextConfig
