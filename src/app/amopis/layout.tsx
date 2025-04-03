'use client'

import { ReactNode } from 'react'
import { Avatar, Column, Footer, Grid, Header, PageMenu, Screen, SkipLink } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { Sidebar } from './_components/SideBar/SideBar'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import './amopis.css'

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
            <Footer>
              <Footer.Menu>
                <NextLink href="/amopis" legacyBehavior passHref>
                  <Footer.MenuLink>Kerngegevens</Footer.MenuLink>
                </NextLink>
                <NextLink href="/amopis/ramingen" legacyBehavior passHref>
                  <Footer.MenuLink>Ramingen</Footer.MenuLink>
                </NextLink>
                <Footer.MenuLink href="#">E-mail je vraag of feedback</Footer.MenuLink>
                <Footer.MenuLink href="#">Bekijk veelgestelde vragen</Footer.MenuLink>
                <Footer.MenuLink href="#">Bekijk releasebeschrijving</Footer.MenuLink>
                <NextLink href="/" legacyBehavior passHref>
                  <Footer.MenuLink>Prototypes</Footer.MenuLink>
                </NextLink>
              </Footer.Menu>
            </Footer>
          </Column>
        </div>
      </Screen>
    </div>
  )
}

export default Amopis
