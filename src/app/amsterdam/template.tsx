'use client'

import { Header, Grid, LinkList, Heading, SkipLink } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

const megaMenuLinks = [
  {
    href: '#',
    label: 'Afval',
  },
  {
    href: '/amsterdam/bestuur-en-organisatie',
    label: 'Bestuur en organisatie',
  },
  {
    href: '/amsterdam/projecten',
    label: 'Bouw- en verkeersprojecten',
  },
  {
    href: '/amsterdam/burgerzaken',
    label: 'Burgerzaken',
  },
  {
    href: '#',
    label: 'Gemeentebelastingen',
  },
  {
    href: '#',
    label: 'Gezondheidsdienst (GGD)',
  },
  {
    href: '/amsterdam/kunst-en-cultuur',
    label: 'Kunst, cultuur en vrije tijd',
  },
  {
    href: '#',
    label: 'Ondernemen',
  },
  {
    href: '#',
    label: 'Onderwijs en jeugd',
  },
  {
    href: '#',
    label: 'Parkeren',
  },
  {
    href: '#',
    label: 'Sport',
  },
  {
    href: '#',
    label: 'Stadsdelen',
  },
  {
    href: '#',
    label: 'Subsidies',
  },
  {
    href: '#',
    label: 'Vacatures',
  },
  {
    href: '#',
    label: 'Vergunningen',
  },
  {
    href: '#',
    label: 'Verkeer en vervoer',
  },
  {
    href: '#',
    label: 'Verkiezingen',
  },
  {
    href: '#',
    label: 'Werk aan de weg',
  },
  {
    href: '#',
    label: 'Werk en inkomen',
  },
  {
    href: '#',
    label: 'Wonen en leefomgeving',
  },
  {
    href: '#',
    label: 'Zorg en ondersteuning',
  },
]

function Template({ children }) {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <Header
        menuItems={[
          <Header.MenuLink href="https://mijn.amsterdam.nl/" key={1} rel="external">
            Mijn Amsterdam
          </Header.MenuLink>,
          <Header.MenuLink href="#" key={2} lang="en">
            English
          </Header.MenuLink>,
          <NextLink href="/amsterdam/zoeken" key={3} legacyBehavior passHref>
            <Header.MenuLink fixed>Zoeken</Header.MenuLink>
          </NextLink>,
        ]}
        logoLink={`${process.env.basePath}amsterdam`} // TODO: je kunt hier geen NextLink gebruiken
        logoLinkTitle="Naar de homepage van gemeente Amsterdam"
      >
        <Grid paddingBottom="large" paddingTop="small">
          <Header.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="https://mijn.amsterdam.nl/" rel="external">
                Mijn Amsterdam
              </LinkList.Link>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </Header.GridCellNarrowWindowOnly>
          <Grid.Cell span="all">
            <Heading className="ams-mb--sm" level={2} size="level-3">
              Alle onderwerpen
            </Heading>
            <div className="ams-mega-menu__columns">
              <LinkList>
                {megaMenuLinks.map(({ href, label }) => (
                  <NextLink href={href} key={label} legacyBehavior passHref>
                    <LinkList.Link>{label}</LinkList.Link>
                  </NextLink>
                ))}
              </LinkList>
            </div>
          </Grid.Cell>
        </Grid>
      </Header>
      <main id="main">{children}</main>
    </>
  )
}

export default Template
