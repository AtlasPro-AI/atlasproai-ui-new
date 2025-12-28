/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Bundle analysis
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './analyze.html',
            openAnalyzer: false,
          })
        )
      }
      return config
    },
  }),

  // Production optimizations
  swcMinify: true,
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'leaflet', 'react-leaflet'],
  },
}

module.exports = nextConfig
