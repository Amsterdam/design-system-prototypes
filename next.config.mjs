/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line import/extensions
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants.js'

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        basePath: '/',
      },
    }
  }

  return {
    basePath: '/design-system-prototypes',
    env: {
      basePath: '/design-system-prototypes/',
    },
    output: 'export',
    images: { unoptimized: true },
  }
}

export default nextConfig
