'use client'

import {
  Grid,
  Breadcrumb,
  Heading,
  Label,
  Paragraph,
  Fieldset,
  Button,
  Alert,
  Column,
  Radio,
  Row,
  Select,
  TextInput,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Question() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/amsterdam/contact/bedankt')
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <NextLink legacyBehavior passHref href="/amsterdam">
            <Breadcrumb.Item href="/amsterdam">Home</Breadcrumb.Item>
          </NextLink>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Contact</Heading>
          <Fieldset legend="Wat zijn uw contactgegevens?">
            <Column gap="small">
              <div>
                <Paragraph>Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.</Paragraph>
              </div>
              <div>
                <Label htmlFor="voorletters">Voorletters</Label>
                <TextInput id="voorletters" name="voorletters" />
              </div>
              <div>
                <Label htmlFor="achternaam">Achternaam</Label>
                <TextInput id="achternaam" name="achternaam" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <TextInput id="email" name="email" />
              </div>
              <Row as="div">
                <div>
                  <Label htmlFor="country">Landnummer</Label>
                  <Select name="country">
                    <option value="+31">Nederland +31</option>
                    <option value="+32">Belgie +32</option>
                    <option value="+33">Frankrijk +33</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <TextInput id="phone" name="phone" />
                </div>
              </Row>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <TextInput id="email" name="email" />
              </div>
              <div>
                <Label htmlFor="woonplaats">Woonplaats</Label>
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
          <div className="ams-form-navigation">
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Question
