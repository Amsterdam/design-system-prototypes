'use client'

import { ReactNode } from 'react'
import { Avatar, Column, Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { Sidebar } from './_components/SideBar/SideBar'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import './amopis.css'

function Amopis({ children }: { children: ReactNode }) {
  return (
    <div className="ams-theme ams-theme--compact">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Page className="ams-page--amopis">
        <div className="amopis-app-grid">
          <Sidebar />
          <Column gap="none">
            <PageHeader
              brandName="Amopis"
              logoLinkComponent={(props) => <NextLink {...props} href="/amopis" />}
              logoLinkTitle="Naar de homepage van Amopis"
              menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
            />
            <div id="main" className="amopis-main-background">
              {children}
            </div>
            <PageFooter>
              <PageFooter.Menu>
                <NextLink href="/amopis" legacyBehavior passHref>
                  <PageFooter.MenuLink>Kerngegevens</PageFooter.MenuLink>
                </NextLink>
                <NextLink href="/amopis/ramingen" legacyBehavior passHref>
                  <PageFooter.MenuLink>Ramingen</PageFooter.MenuLink>
                </NextLink>
                <PageFooter.MenuLink href="#">E-mail je vraag of feedback</PageFooter.MenuLink>
                <PageFooter.MenuLink href="#">Bekijk veelgestelde vragen</PageFooter.MenuLink>
                <PageFooter.MenuLink href="#">Bekijk releasebeschrijving</PageFooter.MenuLink>
                <NextLink href="/" legacyBehavior passHref>
                  <PageFooter.MenuLink>Prototypes</PageFooter.MenuLink>
                </NextLink>
              </PageFooter.Menu>
            </PageFooter>
          </Column>
        </div>
      </Page>
    </div>
  )
}

export default Amopis
