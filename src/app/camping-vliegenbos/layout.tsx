'use client'

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
import {
  ChevronForwardIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

import formatPath from '../../utils/formatPath'
import { navigationMenuItems } from './navigationMenuItems'

const menuLinks = [
  {
    href: '#',
    label: 'Reserveren',
  },
]

export default function CampingVliegenbos({ children }: { children: React.ReactNode }) {
  return (
    <Page className="ams-theme">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <PageHeader
        brandName="Camping Vliegenbos"
        logoLinkComponent={(props) => <NextLink {...props} href="/camping-vliegenbos" />}
        logoLinkTitle="Naar de homepage van Camping Vliegenbos"
        menuItems={menuLinks.map(({ href, label }) => (
          <PageHeader.MenuLink href={href} key={href}>
            {label}
          </PageHeader.MenuLink>
        ))}
      >
        <Grid paddingVertical="large">
          {navigationMenuItems.map(({ heading, items }) => (
            <Grid.Cell key={`${heading}-column-navigation`} span={3}>
              <Heading className="ams-mb-s" level={2} size="level-3">
                {heading}
              </Heading>
              <LinkList>
                {items.map(({ href, label }) => (
                  <LinkList.Link href={formatPath(href)} key={href}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          ))}
        </Grid>
      </PageHeader>
      <main id="inhoud">{children}</main>
      <PageFooter>
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={4}>
              <Paragraph color="inverse">
                Camping Vliegenbos <br />
                Meeuwenlaan 138 <br />
                1022 AM Amsterdam
              </Paragraph>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Contact
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="tel:31202517800" icon={<PhoneIcon />}>
                  <span className="ams-visually-hidden">Telefoon:</span>020 251 7800
                </LinkList.Link>
                <LinkList.Link color="inverse" href="mailto:vliegenbos.sdn@amsterdam.nl" icon={<MailIcon />}>
                  <span className="ams-visually-hidden">E-mail:</span>vliegenbos.sdn@amsterdam.nl
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                Volg ons
              </Heading>
              <LinkList>
                <LinkList.Link
                  color="inverse"
                  href="https://www.instagram.com/campingvliegenbosamsterdam/"
                  icon={<InstagramIcon />}
                >
                  Instagram
                </LinkList.Link>
                <LinkList.Link
                  color="inverse"
                  href="https://www.facebook.com/CampingVliegenbos/"
                  icon={<FacebookIcon />}
                >
                  Facebook
                </LinkList.Link>
                <LinkList.Link
                  color="inverse"
                  href="http://www.tripadvisor.nl/Hotel_Review-g188590-d239468-Reviews-Camping_Vliegenbos-Amsterdam_North_Holland_Province.html"
                  icon={<ChevronForwardIcon />}
                >
                  Tripadvisor
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Colofon</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Disclaimer</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Algemene voorwaarden</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
