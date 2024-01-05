import { FormLabel, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import FormNavigation from '../components/FormNavigation'

export const Describe = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
      <form style={{ display: 'grid' }} className="amsterdam-gap-md">
        <Heading>1. Beschrijf uw melding</Heading>
        <Paragraph>
          Voordat u een melding doet kunt u op de meldingenkaart zien welke meldingen bekend zijn bij de gemeente.
        </Paragraph>

        <div>
          <FormLabel htmlFor="description">Waar gaat het om?</FormLabel>
          <Paragraph size="small">
            Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
          </Paragraph>
          <textarea id="description" />
          <Paragraph size="small">8/1000 tekens</Paragraph>
        </div>

        <fieldset>
          <legend>Foto's toevoegen (niet verplicht)</legend>
          <Paragraph size="small">Voeg een foto toe om de situatie te verduidelijken</Paragraph>
          <input
            type="file"
            id="fileUpload"
            data-testid="file-input-upload"
            accept="image/jpeg,image/jpg,image/png,image/gif"
            name="images"
            multiple
            aria-label="Toevoegen foto"
          />
          <label htmlFor="fileUpload">Toevoegen foto</label>
        </fieldset>
        <FormNavigation firstPage />
      </form>
    </Grid.Cell>
  </Grid>
)
