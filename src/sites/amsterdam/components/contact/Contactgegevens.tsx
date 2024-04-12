import {
  Alert,
  Breadcrumb,
  Column,
  Fieldset,
  FormLabel,
  Grid,
  Heading,
  Paragraph,
  Radio,
  TextInput,
} from '@amsterdam/design-system-react'
import { siteUrl } from '../../constants'
import FormNavigation from '../shared/FormNavigation'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const Contactgegevens = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`${siteUrl}contact`)
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Column className="ams-mb--md" gap="small">
          <form className="ams-gap--md" onSubmit={handleSubmit}>
            <Heading>Contact</Heading>
            <Fieldset legend="Wat zijn uw contactgegevens?">
              <Column gap="medium">
                <div>
                  <Paragraph>Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.</Paragraph>
                </div>
                <div>
                  <FormLabel htmlFor="voorletters">Voorletters</FormLabel>
                  <TextInput id="voorletters" name="voorletters" />
                </div>
                <div>
                  <FormLabel htmlFor="achternaam">Achternaam</FormLabel>
                  <TextInput id="achternaam" name="achternaam" />
                </div>
                <div>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <TextInput id="email" name="email" />
                </div>
                <div className="tel-row">
                  <div>
                    <FormLabel htmlFor="country">Landnummer</FormLabel>
                    <select name="country">
                      <option value="+31">Nederland +31</option>
                      <option value="+32">Belgie +32</option>
                      <option value="+33">Frankrijk +33</option>
                    </select>
                  </div>
                  <div>
                    <FormLabel htmlFor="phone">Telefoonnummer</FormLabel>
                    <TextInput id="phone" name="phone" />
                  </div>
                </div>
                <div>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <TextInput id="email" name="email" />
                </div>
                <div>
                  <FormLabel htmlFor="woonplaats">Woonplaats</FormLabel>
                  <Radio name="woonplaats" value="amsterdam">
                    Amsterdam
                  </Radio>
                  <Radio name="woonplaats" value="weesp">
                    Weesp
                  </Radio>
                  <Radio name="woonplaats" value="anders">
                    Anders
                  </Radio>
                </div>
              </Column>
            </Fieldset>
            <Alert severity="info">
              <Paragraph>
                We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze
                dienstverlening.
              </Paragraph>
            </Alert>

            <FormNavigation backlinkUrl={`${siteUrl}contact/vraag`} lastPage />
          </form>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
