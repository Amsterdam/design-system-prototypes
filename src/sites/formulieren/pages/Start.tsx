import {
  Button,
  Column,
  Fieldset,
  FormLabel,
  Grid,
  Heading,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'

export const Start = () => {
  return (
    <form className="amsterdam-gap-md" id="testform">
      <Grid paddingBottom="medium" gapVertical="small" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading>Melding doen</Heading>
          <Paragraph>Hier worden verschillende formulier elementen gebruikt.</Paragraph>
          <Fieldset legend="Welke gegevens heeft u over deze persoon?">
            <FormLabel htmlFor="firstname">Voornamen (niet verplicht)</FormLabel>
            <TextInput id="firstname" />
            <FormLabel htmlFor="tussenvoegsel">Tussenvoegsel</FormLabel>
            <TextInput id="tussenvoegsel" />
            <FormLabel htmlFor="lastname">Achternaam (niet verplicht)</FormLabel>
            <TextInput id="lastname" />
            <Column gap="medium">
              <div>
                <FormLabel htmlFor="street">Straat</FormLabel>
                <TextInput id="street" />
              </div>
              <div>
                <FormLabel htmlFor="number">Huisnummer</FormLabel>
                <TextInput id="number" />
              </div>
              <div>
                <FormLabel htmlFor="addative">Toevoeging</FormLabel>
                <TextInput id="addative" />
              </div>
            </Column>
            <Column gap="medium">
              <div>
                <FormLabel htmlFor="zipcode">Postcode</FormLabel>
                <TextInput id="zipcode" />
              </div>
              <div>
                <FormLabel htmlFor="city">Plaats</FormLabel>
                <TextInput id="city" />
              </div>
            </Column>
            <FormLabel htmlFor="explanation">Toelichting (niet verplicht)</FormLabel>
            <TextInput id="explanation" />
          </Fieldset>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Button type="submit">Volgende</Button>
        </Grid.Cell>
      </Grid>
    </form>
  )
}
