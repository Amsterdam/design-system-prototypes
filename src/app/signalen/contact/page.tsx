'use client'

import { FormEvent } from 'react'
import { Button, Checkbox, Fieldset, Grid, Heading, Label, Paragraph } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'

const Contact = () => {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/signalen/versturen')
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Doe een melding</Heading>

          <Heading level={2}>Contactgegevens</Heading>

          <Paragraph size="large">Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?</Paragraph>

          <Paragraph>
            Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
            uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer en
            e-mailadres alléén voor deze melding.
          </Paragraph>

          <div>
            <Label htmlFor="phone">Wat is uw telefoonnummer?(niet verplicht)</Label>
            <input type="tel" id="phone" />
          </div>

          <div>
            <Label htmlFor="mail">Wat is uw e-mailadres?(niet verplicht)</Label>
            <input type="email" id="mail" />
          </div>

          <Fieldset legend="Mogen we uw melding doorsturen?">
            <Paragraph className="ams-mb--md">
              Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
              melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u
              dat goed vindt.
            </Paragraph>
            <Checkbox>
              Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als
              de melding niet voor de gemeente is bestemd.
            </Checkbox>
          </Fieldset>

          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact
