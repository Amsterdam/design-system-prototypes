import '@amsterdam/design-system-tokens/dist/index.theme.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './index.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/design-system-prototypes/favicon/favicon.ico" sizes="16x16 32x32 48x48 64x64" />
        <link rel="icon" href="/design-system-prototypes/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/design-system-prototypes/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/design-system-prototypes/app.webmanifest" />
        <title>Prototypes Amsterdam Design System</title>
      </head>
      <body className="ams-body">{children}</body>
    </html>
  )
}
