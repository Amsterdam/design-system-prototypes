'use client'

import { Column, Grid, Heading, Link, LinkList, Page, PageFooter, Paragraph } from '@amsterdam/design-system-react'
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MastodonIcon,
  PhoneIcon,
  XIcon,
} from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import './amsterdam.css'

const footerLinks = [
  { href: '#', label: 'Over deze site' },
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Cookies op deze site' },
]

const socials = [
  { href: 'https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/', label: 'Nieuwsbrief Amsterdam' },
  { href: 'https://x.com/AmsterdamNL', icon: XIcon, label: 'X' },
  { href: 'https://www.facebook.com/gemeenteamsterdam', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://www.instagram.com/gemeenteamsterdam/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/gemeente-amsterdam', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'https://social.amsterdam.nl/@gemeenteamsterdam', icon: MastodonIcon, label: 'Mastodon' },
  { href: 'https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig', label: 'YouTube' },
  { href: 'https://werkenbij.amsterdam.nl/', label: 'Werkenbij' },
]

export default function Amsterdam({ children }) {
  return (
    <div className="ams-theme">
      <Page>
        {children}
        <PageFooter>
          <PageFooter.Spotlight>
            <Grid gapVertical="2x-large" paddingVertical="x-large">
              <Grid.Cell span={3}>
                <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                  Contact
                </Heading>
                <Paragraph className="ams-mb-m" color="inverse" size="small">
                  Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
                </Paragraph>
                <LinkList>
                  <LinkList.Link
                    color="inverse"
                    href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                    icon={MailIcon}
                    size="small"
                  >
                    Contactformulier
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="tel:+3114020" icon={PhoneIcon} size="small">
                    Bel 14 020
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="https://www.amsterdam.nl/contact/" icon={ClockIcon} size="small">
                    Adressen en openingstijden
                  </LinkList.Link>
                </LinkList>
              </Grid.Cell>
              <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
                <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                  Volg de gemeente
                </Heading>
                <LinkList>
                  {socials.map(({ href, icon, label }) => (
                    <LinkList.Link color="inverse" href={href} icon={icon} key={label} rel="external" size="small">
                      {label}
                    </LinkList.Link>
                  ))}
                </LinkList>
              </Grid.Cell>
              <Grid.Cell className="ams-gap-xl" span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
                <div>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                    Kalender
                  </Heading>
                  <Paragraph color="inverse" size="small">
                    Van buurtactiviteiten tot inspraakavonden. Wat organiseert de gemeente voor u? Kijk op{' '}
                    <Link
                      color="inverse"
                      href="https://activiteiten.amsterdam.nl/?pk_vid=9f948f5fae0c5e90169952714540adc6"
                    >
                      Kalender Amsterdam
                    </Link>
                    .
                  </Paragraph>
                </div>
                <div>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                    Uit in Amsterdam
                  </Heading>
                  <Paragraph color="inverse" size="small">
                    Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                    <Link color="inverse" href="https://www.iamsterdam.com/">
                      Iamsterdam.com
                    </Link>{' '}
                    vindt u de beste tips op het gebied van cultuur, uitgaan en evenementen.
                  </Paragraph>
                </div>
              </Grid.Cell>
            </Grid>
          </PageFooter.Spotlight>
          <Heading className="ams-visually-hidden" level={2}>
            Over deze website
          </Heading>
          <PageFooter.Menu>
            {footerLinks.map(({ href, label }) => (
              <NextLink href={href} key={label} legacyBehavior passHref>
                <PageFooter.MenuLink>{label}</PageFooter.MenuLink>
              </NextLink>
            ))}
            <NextLink href="/" legacyBehavior passHref>
              <PageFooter.MenuLink>Prototypes</PageFooter.MenuLink>
            </NextLink>
          </PageFooter.Menu>
        </PageFooter>
      </Page>
    </div>
  )
}
