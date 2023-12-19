import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { Project } from '../../components/amopis/project/Project'
import { Sidebar } from '../../components/amopis/shared/Sidebar'
import { SiteHeader as AmopisSiteHeader } from '../../components/amopis/shared/SiteHeader'

export default function Amopis() {
  return (
    <Screen className="amsterdam-screen--amopis amsterdam-theme--compact">
      <div className="amopis-app-grid">
        <Sidebar />
        <div>
          <AmopisSiteHeader />
          <div className="amopis-main-background">
            <Project />
          </div>
          <Grid compact paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href="#">Home</PageMenu.Link>
                <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </div>
      </div>
    </Screen>
  )
}
