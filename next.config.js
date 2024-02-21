/** @type {import('next').NextConfig} */
const { execSync } = require('child_process')

const gitRev = execSync('git rev-parse --short HEAD')
  .toString()
  .trim()
const dateRev = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).replace(/\//g, '')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    version: `${gitRev}-${dateRev}`,
  }
}
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA(nextConfig)
