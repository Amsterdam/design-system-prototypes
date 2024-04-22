import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Heading, Label, Paragraph } from '@amsterdam/design-system-react'
import FormNavigation from '../components/FormNavigation'
import { siteUrl } from '../constants'

export const Add = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`${siteUrl}contact`)
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Doe een melding</Heading>

          <Heading level={2}>Locatie en vragen</Heading>

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
            <Label htmlFor="where">Waar komt het afval vandaan, denkt u? (niet verplicht)</Label>
            <textarea id="where" />
          </div>

          <FormNavigation backlinkUrl={`${siteUrl}beschrijf`} />
        </form>
      </Grid.Cell>
    </Grid>
  )
}
