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
  VisuallyHidden,
} from '@amsterdam/design-system-react'
import { ChattingIcon, LoginIcon, PhoneIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

const footerLinks = [
  {
    href: '/amsterdam',
    label: 'Home',
  },
  {
    href: '/amsterdam/zoeken',
    label: 'Zoeken',
  },
  {
    href: '/amsterdam/nieuws',
    label: 'Nieuws',
  },
  {
    href: '/amsterdam/burgerzaken',
    label: 'Burgerzaken',
  },
  {
    href: '/amsterdam/kunst-en-cultuur',
    label: 'Kunst en cultuur',
  },
  {
    href: '/amsterdam/projecten',
    label: 'Projecten',
  },
  {
    href: '/amsterdam/projecten/project',
    label: 'Project',
  },
  {
    href: '/amsterdam/parkeervergunning-voor-sportverenigingen',
    label: 'Parkeren',
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

function Amsterdam({ children }) {
  return (
    <div className="ams-theme">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        <Grid>
          <Grid.Cell span="all">
            <Header
              links={
                <PageMenu alignEnd>
                  <PageMenu.Link href="#" lang="en">
                    English
                  </PageMenu.Link>
                  <NextLink legacyBehavior href="/amsterdam/contact" passHref>
                    <PageMenu.Link>Contact</PageMenu.Link>
                  </NextLink>
                  <PageMenu.Link href="https://mijn.amsterdam.nl/" icon={LoginIcon} rel="external">
                    Mijn Amsterdam
                  </PageMenu.Link>
                  <NextLink legacyBehavior href="/" passHref>
                    <PageMenu.Link>Prototypes</PageMenu.Link>
                  </NextLink>
                  <NextLink legacyBehavior href="/amsterdam/zoeken" passHref>
                    <PageMenu.Link icon={SearchIcon}>Zoeken</PageMenu.Link>
                  </NextLink>
                </PageMenu>
              }
              logoLink="amsterdam" // TODO: je kunt hier geen Next Link gebruiken
              logoLinkTitle="Naar de homepage van gemeente Amsterdam"
              menu={
                <button type="button" className="ams-header__menu-button">
                  Menu
                </button>
              }
            />
          </Grid.Cell>
        </Grid>
        <main id="main">{children}</main>
        <Footer>
          <Footer.Top>
            <VisuallyHidden>
              <Heading>Colofon</Heading>
            </VisuallyHidden>
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
                      onBackground="dark"
                      size="small"
                    >
                      Contactformulier
                    </LinkList.Link>
                    <LinkList.Link href="https://www.amsterdam.nl/contact/" onBackground="dark" size="small">
                      Adressen en openingstijden
                    </LinkList.Link>
                    <LinkList.Link href="tel:+3114020" icon={PhoneIcon} onBackground="dark" size="small">
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
                      <LinkList.Link href={href} onBackground="dark" rel="external" size="small" key={label}>
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
                        onBackground="dark"
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
                      <Link href="https://www.iamsterdam.com/" onBackground="dark" variant="inline">
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
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>
              {footerLinks.map(({ href, label }) => (
                <NextLink legacyBehavior href={href} passHref key={label}>
                  <PageMenu.Link>{label}</PageMenu.Link>
                </NextLink>
              ))}
            </PageMenu>
          </Grid.Cell>
        </Grid>
      </Screen>
    </div>
  )
}

export default Amsterdam
