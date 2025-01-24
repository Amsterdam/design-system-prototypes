'use client'

import { Breadcrumb, Column, Grid, Heading, LinkList, PageHeading } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

const linkSections = [
  [
    {
      title: 'Paspoort en identiteitskaart',
      links: [
        'Paspoort of identiteitskaart aanvragen',
        'Zakenpaspoort aanvragen',
        'Tweede paspoort aanvragen',
        'Paspoort kwijt of gestolen',
      ],
    },
    {
      title: 'Trouwen en Partnerschap',
      links: ['Gratis, budget en standaard ceremonie', 'Kosten', 'Meer'],
    },
    {
      title: 'Akten, uittreksels en verklaringen',
      links: ['Uittreksel BRP aanvragen', 'Geboorteakte aanvragen', 'Meer'],
    },
    {
      title: 'Adres en inschrijving',
      links: [
        'Opnieuw inschrijven bij de gemeente',
        'Onjuiste inschrijving melden',
        'Onderzoek naar inschrijving Basisregistratie Personen (BRP)',
        'Briefadres aanvragen en wijzigen',
      ],
    },
    {
      title: 'Immigratie en naturalisatie',
      links: [
        'Verhuizen naar Amsterdam vanuit het buitenland',
        'Naturalisatie – Wat u moet doen om Nederlander te worden',
      ],
    },
  ],
  [
    {
      title: 'Rijbewijs',
      links: [
        'Rijbewijs aanvragen',
        'Rijbewijs verlengen of categorie toevoegen',
        'Rijbewijs kwijt of gestolen',
        'Buitenlands rijbewijs omwisselen',
      ],
    },
    {
      title: 'Verhuizen',
      links: ['Verhuizing doorgeven'],
    },
    {
      title: 'Geboorte en erkenning kinderen',
      links: ['Geboorteaangifte doen', 'Kind erkennen', 'Meer'],
    },
    {
      title: 'Persoonsgegevens',
      links: [
        'Inzien of wijzigen van uw gegevens',
        'Wie mogen mijn persoonlijke gegevens opvragen?',
        'Geheimhouding persoonsgegevens',
        'Voor- of achternaam wijzigen',
        'Wat te doen bij identiteitsfraude',
      ],
    },
    {
      title: 'Overlijden',
      links: [
        'Aangifte van overlijden',
        'Aangifte van overlijden door uitvaartondernemers',
        'Aangifte van overlijden in het buitenland',
        'Begraafplaatsen en crematoria',
        'Uitvaarten door de gemeente',
      ],
    },
  ],
]

function Burgerzaken() {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="medium">
        <Grid.Cell span="all">
          <PageHeading>Burgerzaken</PageHeading>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Column gap="extra-large">
            {linkSections[0].map(({ title, links }) => (
              <Column as="section" gap="extra-small" key={title}>
                <Heading level={2} size="level-3">
                  {title}
                </Heading>
                <LinkList>
                  {links.map((link) => (
                    <LinkList.Link href="#" key={link}>
                      {link}
                    </LinkList.Link>
                  ))}
                </LinkList>
              </Column>
            ))}
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Column gap="extra-large">
            {linkSections[1].map(({ title, links }) => (
              <Column as="section" gap="extra-small" key={title}>
                <Heading level={2} size="level-3">
                  {title}
                </Heading>
                <LinkList>
                  {links.map((link) => (
                    <LinkList.Link href="#" key={link}>
                      {link}
                    </LinkList.Link>
                  ))}
                </LinkList>
              </Column>
            ))}
          </Column>
        </Grid.Cell>
      </Grid>
    </>
  )
}

export default Burgerzaken
