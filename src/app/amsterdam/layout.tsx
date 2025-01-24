'use client'

import {
  Column,
  Footer,
  Grid,
  Header,
  Heading,
  Link,
  LinkList,
  PageMenu,
  Paragraph,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react'
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import './amsterdam.css'

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

const footerLinks = [
  {
    href: '#',
    label: 'Over deze site',
  },
  {
    href: '#',
    label: 'Privacy',
  },
  {
    href: '#',
    label: 'Cookies op deze site',
  },
]

const socials = [
  {
    href: 'https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/',
    label: 'Nieuwsbrief Amsterdam',
  },
  {
    href: 'https://twitter.com/AmsterdamNL',
    label: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/gemeenteamsterdam',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/gemeenteamsterdam/',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/gemeente-amsterdam',
    label: 'LinkedIn',
  },
  {
    href: 'https://social.amsterdam.nl/@gemeenteamsterdam',
    label: 'Mastodon',
  },
  {
    href: 'https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig',
    label: 'YouTube',
  },
  {
    href: 'https://werkenbij.amsterdam.nl/',
    label: 'Werkenbij',
  },
]

export default function Amsterdam({ children }) {
  return (
    <div className="ams-theme">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
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
          logoLink={`${process.env.basePath}amsterdam`} // TODO: je kunt hier geen Next Link gebruiken
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
                    <LinkList.Link href={href} key={label}>
                      {label}
                    </LinkList.Link>
                  ))}
                </LinkList>
              </div>
            </Grid.Cell>
          </Grid>
        </Header>
        <main id="main">{children}</main>
        <Footer>
          <Footer.Top>
            <Heading inverseColor className="ams-visually-hidden">
              Colofon
            </Heading>
            <Grid gapVertical="large" paddingVertical="medium">
              <Grid.Cell span={3}>
                <Column gap="extra-small">
                  <Heading level={2} size="level-4" inverseColor>
                    Contact
                  </Heading>
                  <Paragraph size="small" inverseColor>
                    Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
                  </Paragraph>
                  <LinkList>
                    <LinkList.Link
                      href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                      icon={ChattingIcon}
                      inverseColor
                      size="small"
                    >
                      Contactformulier
                    </LinkList.Link>
                    <LinkList.Link href="https://www.amsterdam.nl/contact/" inverseColor size="small">
                      Adressen en openingstijden
                    </LinkList.Link>
                    <LinkList.Link href="tel:+3114020" icon={PhoneIcon} inverseColor size="small">
                      Bel 14 020
                    </LinkList.Link>
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
                <Column gap="extra-small">
                  <Heading level={2} size="level-4" inverseColor>
                    Volg de gemeente
                  </Heading>
                  <LinkList>
                    {socials.map(({ href, label }) => (
                      <LinkList.Link href={href} inverseColor key={label} rel="external" size="small">
                        {label}
                      </LinkList.Link>
                    ))}
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
                <Column gap="small">
                  <Column as="section" gap="extra-small">
                    <Heading level={2} size="level-4" inverseColor>
                      Kalender
                    </Heading>
                    <Paragraph size="small" inverseColor>
                      Van buurtactiviteiten tot inspraakavonden. Wat organiseert de gemeente voor u? Kijk op{' '}
                      <Link
                        href="https://activiteiten.amsterdam.nl/?pk_vid=9f948f5fae0c5e90169952714540adc6"
                        inverseColor
                        variant="inline"
                      >
                        Kalender Amsterdam
                      </Link>
                      .
                    </Paragraph>
                  </Column>
                  <Column as="section" gap="extra-small">
                    <Heading level={3} size="level-4" inverseColor>
                      Uit in Amsterdam
                    </Heading>
                    <Paragraph size="small" inverseColor>
                      Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                      <Link href="https://www.iamsterdam.com/" inverseColor variant="inline">
                        Iamsterdam.com
                      </Link>{' '}
                      vindt u de beste tips op het gebied van cultuur, uitgaan en evenementen.
                    </Paragraph>
                  </Column>
                </Column>
              </Grid.Cell>
            </Grid>
          </Footer.Top>
        </Footer>
        <Heading level={2} className="ams-visually-hidden">
          Sitemap
        </Heading>
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              {footerLinks.map(({ href, label }) => (
                <NextLink href={href} key={label} legacyBehavior passHref>
                  <PageMenu.Link>{label}</PageMenu.Link>
                </NextLink>
              ))}
              <NextLink href="/" legacyBehavior passHref>
                <PageMenu.Link>Prototypes</PageMenu.Link>
              </NextLink>
            </PageMenu>
          </Grid.Cell>
        </Grid>
      </Screen>
    </div>
  )
}
