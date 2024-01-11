import { Grid, Heading, Link, Paragraph } from '@amsterdam/design-system-react'
import FormNavigation from '../components/FormNavigation'

export const Summary = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <form style={{ display: 'grid' }} className="amsterdam-gap-md">
        <Heading>4. Versturen</Heading>

        <Paragraph>Controleer uw gegevens en verstuur uw melding.</Paragraph>

        <section>
          <header className="signalen-summary-heading">
            <Heading level={2} size="level-4">
              1. Beschrijf uw melding
            </Heading>
            <Link variant="standalone">Wijzig uw melding</Link>
          </header>
          <dl>
            <dt>Waar gaat het over?</dt>
            <dd>afval</dd>
          </dl>
        </section>

        <section>
          <header className="signalen-summary-heading">
            <Heading level={2} size="level-4">
              2. Locatie en vragen
            </Heading>
            <Link variant="standalone">Wijzig locatie en vragen</Link>
          </header>
          <dl>
            <dt>Waar is het?</dt>
            <dd>Sumatrakade 17, 1019BJ Amsterdam</dd>
            <dt>Wanneer was het?</dt>
            <dd>Nu</dd>
          </dl>
        </section>

        <section>
          <header className="signalen-summary-heading">
            <Heading level={2} size="level-4">
              3. Contactgegevens
            </Heading>
            <Link variant="standalone">Wijzig contactgegevens</Link>
          </header>
          <dl>
            <dt>Melding delen</dt>
            <dd>
              Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als
              de melding niet voor de gemeente is bestemd.
            </dd>
          </dl>
        </section>

        <FormNavigation lastPage />
      </form>
    </Grid.Cell>
  </Grid>
)