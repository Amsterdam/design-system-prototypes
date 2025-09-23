'use client'

import NextLink from 'next/link'
import {
  Grid,
  Heading,
  LinkList,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  SkipLink,
} from '@amsterdam/design-system-react'
import { CheckMarkIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import bigMenuItems from './bigMenuItems'

import './camping-vliegenbos.css'
import formatPath from '../../utils/formatPath'

const menuLinks = [
  {
    href: formatPath('/camping-vliegenbos/reserveren'),
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
                  <LinkList.Link href={formatPath(item.href)} key={`${idx}-big-menu-column-item-${itemIdx}`}>
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
            <Grid.Cell span={4}>
              <Paragraph className="ams-mb-m" color="inverse">
                Camping Vliegenbos <br />
                Meeuwenlaan 138 <br />
                1022 AM Amsterdam
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2}>
                Contact
              </Heading>
              <LinkList>
                <LinkList.Link icon={<PhoneIcon />} color="inverse" href="tel:+31(0)20 251 7800" type="tel">
                  Telefoon: +31(0)20 251 7800
                </LinkList.Link>
                <LinkList.Link
                  icon={<MailIcon />}
                  color="inverse"
                  href="mailto:vliegenbos.sdn@amsterdam.nl"
                  type="email"
                >
                  E-mail: vliegenbos.sdn@amsterdam.nl
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2}>
                Check
              </Heading>
              <LinkList>
                <LinkList.Link
                  icon={<InstagramIcon />}
                  color="inverse"
                  href="https://www.instagram.com/campingvliegenbosamsterdam/"
                >
                  Instagram
                </LinkList.Link>
                <LinkList.Link
                  icon={<FacebookIcon />}
                  color="inverse"
                  href="https://www.facebook.com/CampingVliegenbos/"
                >
                  Facebook
                </LinkList.Link>
                <LinkList.Link
                  icon={<CheckMarkIcon />}
                  color="inverse"
                  href="http://www.tripadvisor.nl/Hotel_Review-g188590-d239468-Reviews-Camping_Vliegenbos-Amsterdam_North_Holland_Province.html"
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
