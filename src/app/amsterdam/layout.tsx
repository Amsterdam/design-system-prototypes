'use client'

import { Column, Footer, Grid, Heading, Link, LinkList, Paragraph, Screen } from '@amsterdam/design-system-react'
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import './amsterdam.css'

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
      <Screen maxWidth="wide">
        {children}
        <Footer>
          <Footer.Spotlight>
            <Grid gapVertical="large" paddingVertical="medium">
              <Grid.Cell span={3}>
                <Column>
                  <Heading color="inverse" level={2} size="level-4">
                    Contact
                  </Heading>
                  <Paragraph color="inverse" size="small">
                    Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
                  </Paragraph>
                  <LinkList>
                    <LinkList.Link
                      color="inverse"
                      href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                      icon={ChattingIcon}
                      size="small"
                    >
                      Contactformulier
                    </LinkList.Link>
                    <LinkList.Link color="inverse" href="https://www.amsterdam.nl/contact/" size="small">
                      Adressen en openingstijden
                    </LinkList.Link>
                    <LinkList.Link color="inverse" href="tel:+3114020" icon={PhoneIcon} size="small">
                      Bel 14 020
                    </LinkList.Link>
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
                <Column>
                  <Heading color="inverse" level={2} size="level-4">
                    Volg de gemeente
                  </Heading>
                  <LinkList>
                    {socials.map(({ href, label }) => (
                      <LinkList.Link color="inverse" href={href} key={label} rel="external" size="small">
                        {label}
                      </LinkList.Link>
                    ))}
                  </LinkList>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
                <Column>
                  <Column>
                    <Heading color="inverse" level={2} size="level-4">
                      Kalender
                    </Heading>
                    <Paragraph color="inverse" size="small">
                      Van buurtactiviteiten tot inspraakavonden. Wat organiseert de gemeente voor u? Kijk op{' '}
                      <Link
                        color="inverse"
                        href="https://activiteiten.amsterdam.nl/?pk_vid=9f948f5fae0c5e90169952714540adc6"
                        variant="inline"
                      >
                        Kalender Amsterdam
                      </Link>
                      .
                    </Paragraph>
                  </Column>
                  <Column>
                    <Heading color="inverse" level={2} size="level-4">
                      Uit in Amsterdam
                    </Heading>
                    <Paragraph color="inverse" size="small">
                      Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                      <Link color="inverse" href="https://www.iamsterdam.com/" variant="inline">
                        Iamsterdam.com
                      </Link>{' '}
                      vindt u de beste tips op het gebied van cultuur, uitgaan en evenementen.
                    </Paragraph>
                  </Column>
                </Column>
              </Grid.Cell>
            </Grid>
          </Footer.Spotlight>
          <Footer.Menu>
            {footerLinks.map(({ href, label }) => (
              <NextLink href={href} key={label} legacyBehavior passHref>
                <Footer.MenuLink>{label}</Footer.MenuLink>
              </NextLink>
            ))}
            <NextLink href="/" legacyBehavior passHref>
              <Footer.MenuLink>Prototypes</Footer.MenuLink>
            </NextLink>
          </Footer.Menu>
        </Footer>
      </Screen>
    </div>
  )
}
