import { Breadcrumb, Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { siteUrl } from '../../constants'
import { Link } from '../../../../shared/components/Link'

export const Bedankt = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <Breadcrumb>
        <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Column className="ams-mb--md" gap="small">
        <Heading>Bedankt!</Heading>
        <Paragraph>
          Uw melding is bij ons bekend onder nummer: AMS-14022. Hebt u een e-mailadres ingevuld? Dan ontvangt u een
          e-mail met alle gegevens van uw melding.
        </Paragraph>

        <Heading level={2}>Wat doen we met uw melding?</Heading>
        <Paragraph>
          U hoort binnen 3 werkdagen wat we met uw melding hebben gedaan. Dringende meldingen pakken wij zo snel
          mogelijk op.
        </Paragraph>
        <Link to={siteUrl}>Ga terug naar de homepage.</Link>
      </Column>
    </Grid.Cell>
  </Grid>
)
