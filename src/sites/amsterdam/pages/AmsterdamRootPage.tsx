import { Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import { Outlet } from 'react-router-dom'
import { PageMenuLink } from '../../../shared/components/PageMenuLink'
import { baseUrl } from '../../../shared/constants'
import { SiteFooter } from '../components/shared/SiteFooter'
import { SiteHeader } from '../components/shared/SiteHeader'

export const AmsterdamRootPage = () => (
  <>
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
            <PageMenuLink to={baseUrl}>Home</PageMenuLink>
            <PageMenuLink to={`${baseUrl}zoeken`}>Zoeken</PageMenuLink>
            <PageMenuLink to={`${baseUrl}nieuws`}>Nieuws</PageMenuLink>
            <PageMenuLink to={`${baseUrl}burgerzaken`}>Burgerzaken</PageMenuLink>
            <PageMenuLink to={`${baseUrl}kunst-en-cultuur`}>Kunst en cultuur</PageMenuLink>
            <PageMenuLink to={`${baseUrl}projecten`}>Projecten</PageMenuLink>
            <PageMenuLink to={`${baseUrl}project`}>Project</PageMenuLink>
            <PageMenuLink to={`${baseUrl}amopis`}>Amopis</PageMenuLink>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  </>
)
