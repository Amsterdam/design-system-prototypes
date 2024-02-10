import '@amsterdam/design-system-tokens/dist/compact.css'
import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { rootUrl } from '../../../shared/constants'
import { Project } from '../components/project/Project'
import { Sidebar } from '../components/shared/Sidebar'
import { SiteHeader } from '../components/shared/SiteHeader'

export const AmopisRootPage = () => (
  <Screen className="amsterdam-screen--amopis">
    <div className="amopis-app-grid">
      <Sidebar />
      <div>
        <SiteHeader />
        <div className="amopis-main-background">
          <Project />
        </div>
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              <PageMenu.Link href={rootUrl}>Prototypes</PageMenu.Link>
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
