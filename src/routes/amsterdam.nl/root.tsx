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
            <PageMenuLink to="/design-system-prototypes/">Home</PageMenuLink>
            <PageMenuLink to="/design-system-prototypes/zoek">Zoeken</PageMenuLink>
            <PageMenuLink to="/design-system-prototypes/nieuws">Nieuws</PageMenuLink>
            <PageMenuLink to="/design-system-prototypes/burgerzaken">Burgerzaken</PageMenuLink>
            <PageMenuLink to="/design-system-prototypes/kunst-en-cultuur">Kunst en cultuur</PageMenuLink>
            <PageMenuLink to="/design-system-prototypes/amopis">Amopis</PageMenuLink>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
