import '@amsterdam/design-system-tokens/dist/index.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'

import './index.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="https://amsterdam.nl/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prototypes Amsterdam Design System</title>
      </head>
      <body className="ams-body">{children}</body>
    </html>
  )
}
