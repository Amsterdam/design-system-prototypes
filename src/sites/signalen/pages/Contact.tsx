import { Checkbox, FormLabel, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import FormNavigation from '../components/FormNavigation'

export const Contact = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <form style={{ display: 'grid' }} className="amsterdam-gap-md">
        <Heading>3. Contactgegevens</Heading>

        <Paragraph size="large">Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?</Paragraph>

        <Paragraph>
          Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
          uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer en
          e-mailadres alléén voor deze melding.
        </Paragraph>

        <div>
          <FormLabel htmlFor="phone">Wat is uw telefoonnummer?(niet verplicht)</FormLabel>
          <input type="tel" id="phone" />
        </div>

        <div>
          <FormLabel htmlFor="mail">Wat is uw e-mailadres?(niet verplicht)</FormLabel>
          <input type="email" id="mail" />
        </div>

        <fieldset>
          <legend>Mogen we uw melding doorsturen?</legend>
          <Paragraph className="amsterdam-mb-md">
            Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
            melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u dat
            goed vindt.
          </Paragraph>
          <Checkbox>
            Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als de
            melding niet voor de gemeente is bestemd.
          </Checkbox>
        </fieldset>

        <FormNavigation />
      </form>
    </Grid.Cell>
  </Grid>
)
