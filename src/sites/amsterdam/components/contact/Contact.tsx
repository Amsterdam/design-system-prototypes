import { Breadcrumb, Fieldset, Grid, Heading, Link, Paragraph, Radio } from '@amsterdam/design-system-react'
import { siteUrl } from '../../constants'
import FormNavigation from '../../../../shared/components/FormNavigation'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const soort = formData.get('soort')

    if (typeof soort === 'string') {
      navigate(`${siteUrl}contact/${soort}`)
    }
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Contact</Heading>
          <Fieldset legend="Waar gaat uw melding over?">
            <Radio name="soort" value="vraag" checked>
              Vraag
            </Radio>
            <Radio name="soort" value="klacht" disabled>
              Klacht
            </Radio>
            <Radio name="soort" value="meldingen" disabled>
              Meldingen openbare ruimte en overlast
            </Radio>
            <Radio name="soort" value="idee" disabled>
              Idee of suggestie
            </Radio>
          </Fieldset>
          <Paragraph size="small">
            U dient een klacht in als u vindt dat de gemeente Amsterdam u niet netjes heeft behandeld. Lees meer over de
            klachtenprocedure op{' '}
            <Link variant="inline" href="https://amsterdam.nl/klachten">
              amsterdam.nl/klachten
            </Link>
            .
          </Paragraph>
          <Paragraph size="small">
            Een melding openbare ruimte en overlast gaat bijvoorbeeld over afval dat niet is opgehaald, volle
            prullenbakken of containers, een losliggende stoeptegel of een kapotte lantaarnpaal. Ook overlast van horeca
            of personen kunt u melden via een melding openbare ruimte en overlast.
          </Paragraph>
          <FormNavigation />
        </form>
      </Grid.Cell>
    </Grid>
  )
}
