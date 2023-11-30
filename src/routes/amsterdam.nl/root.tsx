import { Outlet } from 'react-router-dom'
import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { SiteHeader } from '../../components/amsterdam.nl/shared/SiteHeader'
import { SiteFooter } from '../../components/amsterdam.nl/shared/SiteFooter'
import PageMenuLink from '../../components/links/PageMenuLink'

export default function Root() {
  const baseUrl = import.meta.env.BASE_URL
  return (
    <Screen maxWidth="wide">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <Grid paddingVertical="small">
        <Grid.Cell fullWidth>
          <PageMenu>
            <PageMenuLink to={baseUrl}>Home</PageMenuLink>
            <PageMenuLink to={`${baseUrl}zoeken`}>Zoeken</PageMenuLink>
            <PageMenuLink to={`${baseUrl}nieuws`}>Nieuws</PageMenuLink>
            <PageMenuLink to={`${baseUrl}burgerzaken`}>Burgerzaken</PageMenuLink>
            <PageMenuLink to={`${baseUrl}kunst-en-cultuur`}>Kunst en cultuur</PageMenuLink>
            <PageMenuLink to={`${baseUrl}amopis`}>Amopis</PageMenuLink>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
