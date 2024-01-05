import { Grid, Heading, Link, Paragraph } from '@amsterdam/design-system-react'

export const Thanks = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <div style={{ display: 'grid' }} className="amsterdam-gap-md">
        <Heading>Bedankt!</Heading>
        <Paragraph>
          Uw melding is bij ons bekend onder nummer: SIG-14022. Hebt u een e-mailadres ingevuld? Dan ontvangt u een
          e-mail met alle gegevens van uw melding.
        </Paragraph>

        <Heading level={2}>Wat doen we met uw melding?</Heading>
        <Paragraph>
          We laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen
          oppakken. We houden u op de hoogte via e-mail.
        </Paragraph>

        <Link>Doe een melding</Link>
      </div>
    </Grid.Cell>
  </Grid>
)
