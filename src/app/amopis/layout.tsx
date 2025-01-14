'use client'

import { ReactNode } from 'react'
import { Column, Grid, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import Link from 'next/link'

import { Sidebar } from './_components/SideBar/SideBar'
import { SiteHeader } from './_components/SiteHeader/SiteHeader'

import './amopis.css'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'

function Amopis({ children }: { children: ReactNode }) {
  return (
    <div className="ams-theme ams-theme--compact">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen className="ams-screen--amopis" fullHeight>
        <div className="amopis-app-grid">
          <Sidebar />
          <Column gap="none">
            <Header
              brandName="Amopis"
              logoLink={`${process.env.basePath}amopis`}
              logoLinkTitle="Naar de homepage van Amopis"
              menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
            />
            <div id="main" className="amopis-main-background">
              {children}
            </div>
            <Grid paddingVertical="small">
              <Grid.Cell span="all">
                <PageMenu>
                  <Link legacyBehavior href="/amopis" passHref>
                    <PageMenu.Link>Kerngegevens</PageMenu.Link>
                  </Link>
                  <Link legacyBehavior href="/amopis/ramingen" passHref>
                    <PageMenu.Link>Ramingen</PageMenu.Link>
                  </Link>
                  <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                  <Link legacyBehavior href="/" passHref>
                    <PageMenu.Link>Prototypes</PageMenu.Link>
                  </Link>
                </PageMenu>
              </Grid.Cell>
            </Grid>
          </Column>
        </div>
      </Screen>
    </div>
  )
}

export default Amopis
