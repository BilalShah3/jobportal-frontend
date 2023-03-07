/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://127.0.0.1:8000",
    MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiMjQ2MCIsImEiOiJjbGVyNGViZXAwNjAyM3ZwaDR3YjEwbWdnIn0.Xq761acMN_s2mg9ZBJA7PQ",
  },
}

module.exports = nextConfig
