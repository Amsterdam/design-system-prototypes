import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fieldset, Grid, Heading, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import FormNavigation from '../../../shared/components/FormNavigation'
import { siteUrl } from '../constants'

export const Describe = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`${siteUrl}vul-aan`)
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Doe een melding</Heading>

          <Heading level={2}>Beschrijf uw melding</Heading>

          <div>
            <Label htmlFor="description">Waar gaat het om?</Label>
            <Paragraph size="small">Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd</Paragraph>
            <TextArea id="description" />
            <Paragraph size="small">8/1000 tekens</Paragraph>
          </div>

          <Fieldset legend="Foto's toevoegen (niet verplicht)">
            <Paragraph size="small">Voeg een foto toe om de situatie te verduidelijken</Paragraph>
            <input
              type="file"
              id="fileUpload"
              data-testid="file-input-upload"
              accept="image/jpeg,image/jpg,image/png,image/gif"
              name="images"
              multiple
              aria-label="Selecteer een bestand"
            />
            <label htmlFor="fileUpload">Selecteer een bestand</label>
          </Fieldset>
          <FormNavigation firstPage />
        </form>
      </Grid.Cell>
    </Grid>
  )
}
