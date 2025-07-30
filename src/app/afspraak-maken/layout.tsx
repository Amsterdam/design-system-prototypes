'use client'

import { Grid, Heading, LinkList, Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { DocumentIcon, MailIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

export default function AfspraakMaken({ children }) {
  return (
    <Page className="ams-theme">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <PageHeader
        logoLinkComponent={(props) => <NextLink {...props} href="/afspraak-maken" />}
        logoLinkTitle="Naar de homepage van Afspraak maken"
        menuItems={[
          <PageHeader.MenuLink href="#" key={1} lang="en">
            English
          </PageHeader.MenuLink>,
          <PageHeader.MenuLink href="#" key={2}>
            Mijn Amsterdam
          </PageHeader.MenuLink>,
        ]}
        noMenuButtonOnWideWindow
      >
        <Grid paddingBottom="2x-large" paddingTop="large">
          <PageHeader.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="https://mijn.amsterdam.nl/" rel="external">
                Mijn Amsterdam
              </LinkList.Link>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </PageHeader.GridCellNarrowWindowOnly>
        </Grid>
      </PageHeader>
      <main id="main">{children}</main>
      <PageFooter>
        <PageFooter.Spotlight>
          <Grid gapVertical="2x-large" paddingVertical="x-large">
            <Grid.Cell span="all">
              <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">
                Vragen over dit formulier
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#" icon={DocumentIcon}>
                  Lees alle informatie op amsterdam.nl/product
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={PhoneIcon}>
                  Bel 14 020
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#" icon={MailIcon}>
                  Contact
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <NextLink href="/" legacyBehavior passHref>
            <PageFooter.MenuLink>Prototypes</PageFooter.MenuLink>
          </NextLink>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
