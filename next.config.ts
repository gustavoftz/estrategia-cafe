import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Static HTML export — compatible with shared hosting (Hostinger)
  output: 'export',

  // Trailing slash so /sobre/ → sobre/index.html, compatible with Apache on Hostinger
  trailingSlash: true,

  // Suppress lockfile warning when multiple package.json exist upstream
  outputFileTracingRoot: path.join(__dirname),
}

export default nextConfig
