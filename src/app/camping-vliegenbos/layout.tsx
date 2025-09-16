'use client'

import {
  Grid,
  Heading,
  Link,
  LinkList,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  SkipLink,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import bigMenuItems from './bigMenuItems'

import './camping-vliegenbos.css'

const menuLinks = [
  {
    href: '/camping-vliegenbos/reserveren',
    label: 'Reserveren / Reservation',
  },
]

export default function CampingVliegenbos({ children }) {
  return (
    <Page className="ams-theme">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <PageHeader
        brandName="Camping Vliegenbos"
        logoLinkComponent={(props) => <NextLink {...props} href="/camping-vliegenbos" />}
        logoLinkTitle="Naar de homepage van Camping Vliegenbos"
        menuItems={menuLinks.map((item, idx) => (
          <PageHeader.MenuLink href={item.href} key={`${idx}-nav-item`}>
            {item.label}
          </PageHeader.MenuLink>
        ))}
      >
        <Grid paddingBottom="large" paddingTop="large">
          {bigMenuItems.map((column, idx) => (
            <Grid.Cell span={3} key={`${idx}-big-menu-column`}>
              <Heading level={3} className="ams-mb-s">
                {column.heading}
              </Heading>

              <LinkList>
                {column.items.map((item, itemIdx) => (
                  <LinkList.Link href={item.href} key={`${idx}-big-menu-column-item-${itemIdx}`}>
                    {item.label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          ))}
        </Grid>
      </PageHeader>
      <main id="main">{children}</main>
      <PageFooter>
        <PageFooter.Spotlight>
          <Grid gapVertical="2x-large" paddingVertical="x-large">
            <Grid.Cell span={6}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                Contact
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse" size="small">
                Camping Vliegenbos <br />
                Meeuwenlaan 138 <br />
                1022 AM Amsterdam
              </Paragraph>
              <LinkList>
                <LinkList.Link color="inverse" href="tel:+31(0)20 251 7800" type="tel" size="small">
                  Telefoon: +31(0)20 251 7800
                </LinkList.Link>
                <LinkList.Link color="inverse" href="mailto:vliegenbos.sdn@amsterdam.nl" type="email" size="small">
                  E-mail: vliegenbos.sdn@amsterdam.nl
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={6}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                Check
              </Heading>

              <LinkList>
                <LinkList.Link
                  color="inverse"
                  href="https://www.instagram.com/campingvliegenbosamsterdam/"
                  size="small"
                >
                  Instagram
                </LinkList.Link>
                <LinkList.Link color="inverse" href="https://www.facebook.com/CampingVliegenbos/" size="small">
                  Facebook
                </LinkList.Link>
                <LinkList.Link
                  color="inverse"
                  href="http://www.tripadvisor.nl/Hotel_Review-g188590-d239468-Reviews-Camping_Vliegenbos-Amsterdam_North_Holland_Province.html"
                  size="small"
                >
                  Tripadvisor
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Colofon</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Disclaimer</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Algemene Voorwaarden</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
