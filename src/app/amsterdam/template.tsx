'use client'

import { Grid, LinkList, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { SearchIcon, UserAccountIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

const megaMenuLinks = [
  { href: '#', label: 'Afval' },
  { href: '/amsterdam/bestuur-en-organisatie', label: 'Bestuur en organisatie' },
  { href: '/amsterdam/projecten', label: 'Bouw- en verkeersprojecten' },
  { href: '/amsterdam/burgerzaken', label: 'Burgerzaken' },
  { href: '#', label: 'Gemeentebelastingen' },
  { href: '#', label: 'Gezondheidsdienst (GGD)' },
  { href: '/amsterdam/kunst-en-cultuur', label: 'Kunst, cultuur en vrije tijd' },
  { href: '#', label: 'Ondernemen' },
  { href: '#', label: 'Onderwijs en jeugd' },
  { href: '#', label: 'Parkeren' },
  { href: '#', label: 'Sport' },
  { href: '#', label: 'Stadsdelen' },
  { href: '#', label: 'Subsidies' },
  { href: '#', label: 'Vacatures' },
  { href: '#', label: 'Vergunningen' },
  { href: '#', label: 'Verkeer en vervoer' },
  { href: '#', label: 'Verkiezingen' },
  { href: '#', label: 'Werk aan de weg' },
  { href: '#', label: 'Werk en inkomen' },
  { href: '#', label: 'Wonen en leefomgeving' },
  { href: '#', label: 'Zorg en ondersteuning' },
]

function Template({ children }) {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <PageHeader
        logoLinkComponent={(props) => <NextLink {...props} href="/amsterdam" />}
        logoLinkTitle="Naar de homepage van gemeente Amsterdam"
        menuItems={[
          <PageHeader.MenuLink href="#" key={1} lang="en">
            English
          </PageHeader.MenuLink>,
          <PageHeader.MenuLink fixed href="https://mijn.amsterdam.nl/" icon={UserAccountIcon} key={2} rel="external">
            Mijn Amsterdam
          </PageHeader.MenuLink>,
          <NextLink href="/amsterdam/zoeken" key={3} legacyBehavior passHref>
            <PageHeader.MenuLink fixed icon={SearchIcon}>
              Zoeken
            </PageHeader.MenuLink>
          </NextLink>,
        ]}
      >
        <Grid>
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
          <Grid.Cell span="all">
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
      </PageHeader>
      <main id="inhoud">{children}</main>
    </>
  )
}

export default Template
