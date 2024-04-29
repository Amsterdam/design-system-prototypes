'use client'

import { Screen, Grid, PageMenu, SkipLink } from '@amsterdam/design-system-react'
import { Sidebar } from '../../sites/amopis/components/shared/Sidebar'
import { SiteHeader } from './_components/SiteHeader/SiteHeader'

import './amopis.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import Link from 'next/link'

const Amopis = ({ children }: { children: React.ReactNode }) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen className="ams-screen--amopis ams-theme ams-theme--compact" fullHeight>
      <div className="amopis-app-grid">
        <Sidebar />
        <div className="amopis-app-content">
          <SiteHeader />
          <div id="main" className="amopis-main-background">
            {children}
          </div>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <Link legacyBehavior href="/amopis" passHref>
                  <PageMenu.Link href="/amopis">Kerngegevens</PageMenu.Link>
                </Link>
                <Link legacyBehavior href="/amopis/ramingen" passHref>
                  <PageMenu.Link href="/amopis/ramingen">Ramingen</PageMenu.Link>
                </Link>
                <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                <Link legacyBehavior href="/" passHref>
                  <PageMenu.Link href="/">Prototypes</PageMenu.Link>
                </Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </div>
      </div>
    </Screen>
  </>
)

export default Amopis
