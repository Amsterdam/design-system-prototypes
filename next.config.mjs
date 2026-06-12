/**
 * @type {import('next').NextConfig}
 */

import { readFileSync } from 'fs'
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants.js'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// Start of AI assisted solution to get linked ADS packages working during development with `pnpm run link` and pnpm on v11.
const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

// Detect ADS packages linked locally via `pnpm run link` (link: protocol).
// When active, we widen the module-resolution root so the linked packages,
// which live outside this project, resolve correctly.
const hasLinkedAdsPackages = Object.entries(pkg.dependencies ?? {}).some(
  ([name, version]) => name.startsWith('@amsterdam/') && version.startsWith('link:'),
)

// The linked packages live in the sibling `design-system` workspace, outside this
// project's root. Point the module-resolution root at the shared parent directory so
// Turbopack (dev) and file tracing (build) follow the symlinks and resolve each
// package's own `workspace:*` dependencies from the design-system workspace.
const monorepoRoot = resolve(__dirname, '..')

// Dev only: widen Turbopack's root when linked packages live outside this project.
// Packages are always unlinked before `pnpm run build`, so no build equivalent needed.
const devLinkConfig = hasLinkedAdsPackages ? { turbopack: { root: monorepoRoot } } : {}
// End of AI assisted solution.

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...devLinkConfig,
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
