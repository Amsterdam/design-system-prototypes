import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import { Screen } from '@amsterdam/design-system-react'
import { SiteHeader } from './components/shared/SiteHeader'
import { SiteFooter } from './components/shared/SiteFooter'
import { Home } from './components/home/Home'

export const App = () => (
  <Screen>
    <SiteHeader />
    <Home />
    <SiteFooter />
  </Screen>
)
