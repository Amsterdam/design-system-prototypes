import {
  Button,
  Column,
  Fieldset,
  FormLabel,
  Grid,
  Heading,
  Paragraph,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'

export const Start = () => {
  return (
    <form>
      <Grid paddingBottom="large" gapVertical="large" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading>Melding doen</Heading>
          <Paragraph className="ams-mb--md">Hier worden verschillende formulier elementen gebruikt.</Paragraph>
          <Fieldset legend="Welke gegevens heeft u over deze persoon?">
            <Column gap="medium">
              <div>
                <FormLabel htmlFor="firstname">Voornamen</FormLabel>
                <TextInput id="firstname" required />
              </div>
              <div style={{ maxWidth: '250px' }}>
                <FormLabel htmlFor="tussenvoegsel">Tussenvoegsel</FormLabel>
                <TextInput id="tussenvoegsel" />
              </div>
              <div>
                <FormLabel htmlFor="lastname">Achternaam</FormLabel>
                <TextInput id="lastname" required />
              </div>
              <div className="address-row">
                <div>
                  <FormLabel htmlFor="street">Straat</FormLabel>
                  <TextInput id="street" />
                </div>
                <div>
                  <FormLabel htmlFor="number">Huisnummer</FormLabel>
                  <TextInput id="number" inputMode="numeric" />
                </div>
                <div>
                  <FormLabel htmlFor="addative">Toevoeging</FormLabel>
                  <TextInput id="addative" />
                </div>
              </div>
              <div className="zipcode-row">
                <div>
                  <FormLabel htmlFor="zipcode">Postcode</FormLabel>
                  <TextInput id="zipcode" />
                </div>
                <div>
                  <FormLabel htmlFor="city">Plaats</FormLabel>
                  <TextInput id="city" placeholder="Amsterdam" />
                </div>
              </div>
              <div>
                <FormLabel htmlFor="explanation">Toelichting</FormLabel>
                <TextArea id="explanation" rows={8} resize="vertical" />
              </div>
            </Column>
          </Fieldset>
        </Grid.Cell>
        <Grid.Cell
          span={{ narrow: 4, medium: 6, wide: 8 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
          style={{ textAlign: 'right' }}
        >
          <Button type="submit">Volgende</Button>
        </Grid.Cell>
      </Grid>
    </form>
  )
}
