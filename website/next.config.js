var withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/intro/overview',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(config)
