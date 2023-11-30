import { Outlet } from 'react-router-dom'
import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { SiteHeader } from '../../components/amsterdam.nl/shared/SiteHeader'
import { SiteFooter } from '../../components/amsterdam.nl/shared/SiteFooter'
import PageMenuLink from '../../components/links/PageMenuLink'

export default function Root() {
  return (
    <Screen maxWidth="wide">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <Grid paddingVertical="small">
        <Grid.Cell fullWidth>
          <PageMenu>
            <PageMenuLink to="/">Home</PageMenuLink>
            <PageMenuLink to="/zoek">Zoeken</PageMenuLink>
            <PageMenuLink to="/nieuws">Nieuws</PageMenuLink>
            <PageMenuLink to="/burgerzaken">Burgerzaken</PageMenuLink>
            <PageMenuLink to="/kunst-en-cultuur">Kunst en cultuur</PageMenuLink>
            <PageMenuLink to="/amopis">Amopis</PageMenuLink>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
