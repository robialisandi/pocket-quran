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
  publicRuntimeConfig: {
    version: `${gitRev}-${dateRev}`,
  }
}

module.exports = nextConfig
