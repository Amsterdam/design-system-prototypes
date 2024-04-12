import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Fieldset, FormLabel, Grid, Heading, Paragraph, Radio, TextArea } from '@amsterdam/design-system-react'
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

          <Fieldset legend="Waar is het?">
            <Paragraph>KAART SELECTOR</Paragraph>
          </Fieldset>

          <Fieldset legend="Wanneer was het?">
            <Radio id="nu">Nu</Radio>
            <Radio id="eerder">Eerder</Radio>
          </Fieldset>

          <div>
            <FormLabel htmlFor="where">Waar komt het afval vandaan, denkt u? (niet verplicht)</FormLabel>
            <TextArea id="where" />
          </div>

          <FormNavigation backlinkUrl={`${siteUrl}beschrijf`} />
        </form>
      </Grid.Cell>
    </Grid>
  )
}
