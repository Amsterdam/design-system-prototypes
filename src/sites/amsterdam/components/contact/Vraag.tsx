import {
  Breadcrumb,
  Column,
  Fieldset,
  FormLabel,
  Grid,
  Heading,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import { siteUrl } from '../../constants'
import FormNavigation from '../shared/FormNavigation'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const Vraag = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`${siteUrl}contact/contactgegevens`)
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Column className="ams-mb--md" gap="small">
          <form className="ams-gap--md" onSubmit={handleSubmit}>
            <Heading>Contact</Heading>
            <div>
              <FormLabel htmlFor="description">Wat wilt u aan de gemeente vragen?</FormLabel>
              <TextArea id="description" />
              <Paragraph size="small">0/1000 tekens</Paragraph>
              <Paragraph size="small">
                Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen. U kunt eventueel nog een bijlage
                toevoegen.
              </Paragraph>
            </div>

            <Fieldset legend="U kunt hier een bijlage toevoegen">
              <input
                type="file"
                id="fileUpload"
                data-testid="file-input-upload"
                accept="image/jpeg,image/jpg,image/png,image/gif"
                name="bijlage"
                multiple
                aria-label="Toevoegen bijlage"
              />
              <label htmlFor="fileUpload">Toevoegen bijlage</label>
            </Fieldset>
            <FormNavigation backlinkUrl={`${siteUrl}contact`} />
          </form>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
