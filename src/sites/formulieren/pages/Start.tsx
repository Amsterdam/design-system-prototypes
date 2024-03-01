import { FormEvent } from 'react'
import {
  Button,
  Checkbox,
  Dialog,
  // Fieldset,
  FormLabel,
  Grid,
  Heading,
  LinkList,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import { siteUrl } from '../constants'

export const Start = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)
    const output = document.getElementById('output')

    for (const [key, value] of data) {
      output?.append(`${key}: ${value}\n`)
    }

    const testmodal = (document.querySelector('#openDialog') as HTMLDialogElement)?.showModal()
    console.log(testmodal)

    return false
  }

  return (
    <form className="amsterdam-gap-md" onSubmit={handleSubmit} id="testform">
      <Grid paddingBottom="medium" gapVertical="small" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 2, wide: 3 }} role="aside">
          <LinkList>
            <LinkList.Link href={`${siteUrl}`}>Link 1</LinkList.Link>
            <LinkList.Link href={`${siteUrl}`}>Link 2</LinkList.Link>
            <LinkList.Link href={`${siteUrl}`}>Link 3</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 3, wide: 4 }}>
          <Heading>Test een Formulier</Heading>
          <Paragraph>Hier worden verschillende formulier elementen gebruikt.</Paragraph>
          <FormLabel htmlFor="name">Naam</FormLabel>
          <TextInput id="name" />
          <FormLabel htmlFor="adress">Adres</FormLabel>
          <TextInput id="adress" />
          <FormLabel htmlFor="zipcode">Postcode</FormLabel>
          <TextInput id="zipcode" />
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 3, wide: 4 }}>
          <FormLabel htmlFor="conact">Contactpersoon</FormLabel>
          <TextInput id="conact" />
          <Checkbox id="guardian">Wettelijk voogd</Checkbox>
          <Checkbox id="kennis">Kennis</Checkbox>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 3, wide: 4 }}>
          <Button type="submit">Versturen</Button>
        </Grid.Cell>
      </Grid>
      <Dialog title="Formulier gegevens" id="openDialog">
        <pre id="output"></pre>
      </Dialog>
    </form>
  )
}
