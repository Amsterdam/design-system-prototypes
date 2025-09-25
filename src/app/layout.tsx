import { ReactNode } from 'react'
import '@amsterdam/design-system-tokens/dist/index.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'

import './index.css'
import { docTitle } from '../constants'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link href={`${process.env.basePath}/favicon/favicon.ico`} rel="icon" sizes="16x16 32x32 48x48 64x64" />
        <link href={`${process.env.basePath}/favicon/icon.svg`} rel="icon" type="image/svg+xml" />
        <link href={`${process.env.basePath}/favicon/apple-touch-icon.png`} rel="apple-touch-icon" />
        <link href={`${process.env.basePath}/app.webmanifest`} rel="manifest" />
        <title>{docTitle}</title>
      </head>
      <body className="ams-body">{children}</body>
    </html>
  )
}
