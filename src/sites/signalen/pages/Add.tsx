import { FormLabel, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import FormNavigation from '../components/FormNavigation'

export const Add = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <form style={{ display: 'grid' }} className="amsterdam-gap-md">
        <Heading>2. Locatie en vragen</Heading>

        <fieldset>
          <legend>Waar is het?</legend>
          <Paragraph>KAART SELECTOR</Paragraph>
        </fieldset>

        <fieldset>
          <legend>Wanneer was het?</legend>
          <div>
            <input type="radio" id="nu" name="when" value="nu" />
            <label htmlFor="nu">Nu</label>
          </div>
          <div>
            <input type="radio" id="eerder" name="when" value="eerder" />
            <label htmlFor="eerder">Eerder</label>
          </div>
        </fieldset>

        <div>
          <FormLabel htmlFor="where">Waar komt het afval vandaan, denkt u? (niet verplicht)</FormLabel>
          <textarea id="where" />
        </div>

        <FormNavigation />
      </form>
    </Grid.Cell>
  </Grid>
)
