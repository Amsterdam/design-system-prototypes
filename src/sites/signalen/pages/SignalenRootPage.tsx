import { Screen } from '@amsterdam/design-system-react'
import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import '../components/signalen.css'

export const SignalenRootPage = () => (
  <>
    <Screen maxWidth="wide">
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </Screen>
  </>
)
