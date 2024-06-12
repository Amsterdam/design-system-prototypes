import '@amsterdam/design-system-tokens/dist/index.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './index.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon/favicon.ico" sizes="16x16 32x32 48x48 64x64" />
        <link rel="icon" href="favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
        <link rel="manifest" href="app.webmanifest" />
        <title>Prototypes Amsterdam Design System</title>
      </head>
      <body className="ams-body">{children}</body>
    </html>
  )
}
