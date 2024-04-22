import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import { Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import { rootUrl } from '../../../shared/constants'
import { Sidebar } from '../components/shared/Sidebar'
import { SiteHeader } from '../components/shared/SiteHeader'
import { Outlet } from 'react-router-dom'
import { siteUrl } from '../constants'

export const AmopisRootPage = () => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen className="ams-screen--amopis ams-theme ams-theme--compact">
      <div className="amopis-app-grid">
        <Sidebar />
        <div className="amopis-app-content">
          <SiteHeader />
          <div id="main" className="amopis-main-background">
            <Outlet />
          </div>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href={siteUrl}>Kerngegevens</PageMenu.Link>
                <PageMenu.Link href={`${siteUrl}ramingen`}>Ramingen</PageMenu.Link>
                <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                <PageMenu.Link href={rootUrl}>Prototypes</PageMenu.Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </div>
      </div>
    </Screen>
  </>
)
