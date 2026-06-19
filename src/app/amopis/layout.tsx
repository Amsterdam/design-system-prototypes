'use client'

import { Avatar, Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

import { AmopisMenu } from './_components/AmopisMenu/AmopisMenu'
import '@amsterdam/design-system-tokens/dist/compact.css'

function Amopis({ children }: { children: ReactNode }) {
  return (
    <div className="ams-theme ams-theme--compact ams-site--amopis">
      <Page withMenu>
        <SkipLink className="ams-page__area--skip-link" href="#inhoud">
          Direct naar inhoud
        </SkipLink>
        <PageHeader
          brandName="Amopis"
          className="ams-page__area--header"
          logoLinkComponent={(props) => <NextLink {...props} href="/amopis" />}
          logoLinkTitle="Naar de homepage van Amopis"
          menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
          noMenuButtonOnWideWindow
        >
          <AmopisMenu />
        </PageHeader>
        <AmopisMenu className="ams-page__area--menu" inWideWindow />
        <div className="ams-page__area--body">{children}</div>
        <PageFooter className="ams-page__area--footer">
          <PageFooter.Menu>
            <PageFooter.MenuLink href="/amopis/projecten/projectdetails/kerngegevens" linkComponent={NextLink}>
              Kerngegevens
            </PageFooter.MenuLink>
            <PageFooter.MenuLink href="/amopis/projecten/planning/capaciteitsraming" linkComponent={NextLink}>
              Ramingen
            </PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">E-mail je vraag of feedback</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Bekijk veelgestelde vragen</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Bekijk releasebeschrijving</PageFooter.MenuLink>
            <PageFooter.MenuLink href="/" linkComponent={NextLink}>
              Prototypes
            </PageFooter.MenuLink>
          </PageFooter.Menu>
        </PageFooter>
      </Page>
    </div>
  )
}

export default Amopis
