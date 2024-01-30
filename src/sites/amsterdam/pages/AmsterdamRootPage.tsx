import { Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import { Outlet } from 'react-router-dom'
import { PageMenuLink } from '../../../shared/components/PageMenuLink'
import { SiteFooter } from '../../../shared/components/SiteFooter.tsx'
import { SiteHeader } from '../components/shared/SiteHeader'
import { siteUrl } from '../constants'

export const AmsterdamRootPage = () => (
  <div className="amsterdam-theme">
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <Grid paddingVertical="small">
        <Grid.Cell span="all">
          <PageMenu>
            <PageMenuLink to={siteUrl}>Home</PageMenuLink>
            <PageMenuLink to={`${siteUrl}zoeken`}>Zoeken</PageMenuLink>
            <PageMenuLink to={`${siteUrl}nieuws`}>Nieuws</PageMenuLink>
            <PageMenuLink to={`${siteUrl}burgerzaken`}>Burgerzaken</PageMenuLink>
            <PageMenuLink to={`${siteUrl}kunst-en-cultuur`}>Kunst en cultuur</PageMenuLink>
            <PageMenuLink to={`${siteUrl}projecten`}>Projecten</PageMenuLink>
            <PageMenuLink to={`${siteUrl}project`}>Project</PageMenuLink>
            <PageMenuLink to={`${siteUrl}parkeervergunning-voor-sportverenigingen`}>Parkeren</PageMenuLink>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  </div>
)
