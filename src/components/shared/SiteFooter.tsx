import { Footer, Grid, Heading, Link, Paragraph, UnorderedList, VisuallyHidden } from '@amsterdam/design-system-react'
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'

export const SiteFooter = () => (
  <Footer>
    <Footer.Top>
      <VisuallyHidden>
        <Heading>Colofon</Heading>
      </VisuallyHidden>
      <Grid>
        <Grid.Cell span={3}>
          <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 2)' }}>
            <Heading level={2} size="level-4" inverseColor>
              Contact
            </Heading>
            <Paragraph size="small" inverseColor>
              Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
            </Paragraph>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link
                  icon={ChattingIcon}
                  href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                  onBackground="dark"
                  variant="inList"
                >
                  Contactformulier
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="https://www.amsterdam.nl/contact/" onBackground="dark" variant="inList">
                  Adressen en openingstijden
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link icon={PhoneIcon} href="tel:+3114020" onBackground="dark" variant="inList">
                  Bel 14 020
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </div>
        </Grid.Cell>
        <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
          <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 2)' }}>
            <Heading level={2} size="level-4" inverseColor>
              Volg de gemeente
            </Heading>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link
                  href="https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/"
                  variant="inList"
                  onBackground="dark"
                >
                  Nieuwsbrief Amsterdam
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="https://twitter.com/AmsterdamNL" variant="inList" onBackground="dark" rel="external">
                  Twitter
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link
                  href="https://www.facebook.com/gemeenteamsterdam"
                  variant="inList"
                  onBackground="dark"
                  rel="external"
                >
                  Facebook
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link
                  href="https://www.instagram.com/gemeenteamsterdam/"
                  variant="inList"
                  onBackground="dark"
                  rel="external"
                >
                  Instagram
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link
                  href="https://www.linkedin.com/company/gemeente-amsterdam"
                  variant="inList"
                  onBackground="dark"
                  rel="external"
                >
                  LinkedIn
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link
                  href="https://social.amsterdam.nl/@gemeenteamsterdam"
                  variant="inList"
                  onBackground="dark"
                  rel="external"
                >
                  Mastodon
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link
                  href="https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig"
                  variant="inList"
                  onBackground="dark"
                  rel="external"
                >
                  YouTube
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="https://werkenbij.amsterdam.nl/" variant="inList" onBackground="dark">
                  Werkenbij
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </div>
        </Grid.Cell>
        <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
          <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 2)' }}>
            <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 4)' }}>
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
            </div>
            <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 4)' }}>
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
            </div>
          </div>
        </Grid.Cell>
      </Grid>
    </Footer.Top>
  </Footer>
)
