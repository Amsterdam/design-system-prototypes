import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { baseUrl } from '../../../shared/constants'
import { Project } from '../components/project/Project'
import { Sidebar } from '../components/shared/Sidebar'
import { SiteHeader } from '../components/shared/SiteHeader'

export const AmopisRootPage = () => (
  <Screen className="amsterdam-screen--amopis amsterdam-theme--compact">
    <div className="amopis-app-grid">
      <Sidebar />
      <div>
        <SiteHeader />
        <div className="amopis-main-background">
          <Project />
        </div>
        <Grid compact paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              <PageMenu.Link href={`${baseUrl}amopis`}>Home</PageMenu.Link>
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
