import { Footer, Grid, Heading, Link, LinkList, Paragraph, VisuallyHidden } from '@amsterdam/design-system-react'
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'

export const SiteFooter = () => (
  <Footer>
    <Footer.Top>
      <VisuallyHidden>
        <Heading>Colofon</Heading>
      </VisuallyHidden>
      <Grid gapVertical="large" paddingVertical="medium">
        <Grid.Cell span={3}>
          <div style={{ display: 'grid' }} className="amsterdam-gap-xs">
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
          </div>
        </Grid.Cell>
        <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
          <div style={{ display: 'grid' }} className="amsterdam-gap-xs">
            <Heading level={2} size="level-4" inverseColor>
              Volg de gemeente
            </Heading>
            <LinkList>
              <LinkList.Link
                href="https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/"
                onBackground="dark"
                size="small"
              >
                Nieuwsbrief Amsterdam
              </LinkList.Link>
              <LinkList.Link href="https://twitter.com/AmsterdamNL" onBackground="dark" rel="external" size="small">
                Twitter
              </LinkList.Link>
              <LinkList.Link
                href="https://www.facebook.com/gemeenteamsterdam"
                onBackground="dark"
                rel="external"
                size="small"
              >
                Facebook
              </LinkList.Link>
              <LinkList.Link
                href="https://www.instagram.com/gemeenteamsterdam/"
                onBackground="dark"
                rel="external"
                size="small"
              >
                Instagram
              </LinkList.Link>
              <LinkList.Link
                href="https://www.linkedin.com/company/gemeente-amsterdam"
                onBackground="dark"
                rel="external"
                size="small"
              >
                LinkedIn
              </LinkList.Link>
              <LinkList.Link
                href="https://social.amsterdam.nl/@gemeenteamsterdam"
                onBackground="dark"
                rel="external"
                size="small"
              >
                Mastodon
              </LinkList.Link>
              <LinkList.Link
                href="https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig"
                onBackground="dark"
                rel="external"
                size="small"
              >
                YouTube
              </LinkList.Link>
              <LinkList.Link href="https://werkenbij.amsterdam.nl/" onBackground="dark" size="small">
                Werkenbij
              </LinkList.Link>
            </LinkList>
          </div>
        </Grid.Cell>
        <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
          <div style={{ display: 'grid' }} className="amsterdam-gap-md">
            <section>
              <Heading level={2} size="level-4" inverseColor className="amsterdam-mb-xs">
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
            </section>
            <section>
              <Heading level={3} size="level-4" inverseColor className="amsterdam-mb-xs">
                Uit in Amsterdam
              </Heading>
              <Paragraph size="small" inverseColor>
                Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                <Link href="https://www.iamsterdam.com/" onBackground="dark" variant="inline">
                  Iamsterdam.com
                </Link>{' '}
                vindt u de beste tips op het gebied van cultuur, uitgaan en evenementen.
              </Paragraph>
            </section>
          </div>
        </Grid.Cell>
      </Grid>
    </Footer.Top>
  </Footer>
)
