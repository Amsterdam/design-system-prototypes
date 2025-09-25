/**
 * @type {import('next').NextConfig}
 */

import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants.js'

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        basePath: '',
      },
    }
  }

  return {
    basePath: `/design-system-prototypes${process.env.NEXT_PUBLIC_BASE_PATH}`,
    env: {
      basePath: `/design-system-prototypes${process.env.NEXT_PUBLIC_BASE_PATH}`,
    },
    images: { unoptimized: true },
    output: 'export',
  }
}

export default nextConfig
