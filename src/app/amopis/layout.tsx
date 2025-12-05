'use client'

import { Avatar, Heading, Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

import { AmopisMenu } from './_components/AmopisMenu/AmopisMenu'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'

import './amopis.css'

function Amopis({ children }: { children: ReactNode }) {
  return (
    <div className="ams-theme ams-theme--compact ams-site--amopis">
      <Page withMenu>
        <SkipLink className="ams-page__area--skip-link" href="#inhoud">
          Direct naar inhoud
        </SkipLink>
        <PageHeader
          className="ams-page__area--header"
          brandName="Amopis"
          logoLinkComponent={(props) => <NextLink {...props} href="/amopis" />}
          logoLinkTitle="Naar de homepage van Amopis"
          menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
          noMenuButtonOnWideWindow
        >
          <AmopisMenu />
        </PageHeader>
        <AmopisMenu className="ams-page__area--menu" inWideWindow />
        <div className="ams-page__area--body amopis-main-background" id="inhoud">
          {children}
        </div>
        <PageFooter className="ams-page__area--footer">
          <Heading className="ams-visually-hidden" level={2}>
            Over deze website
          </Heading>
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
      </Page>
    </div>
  )
}

export default Amopis
