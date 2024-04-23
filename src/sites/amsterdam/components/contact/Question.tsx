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
import FormNavigation from '../../../../shared/components/FormNavigation'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const Question = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    navigate(`${siteUrl}contact/contactdetails`)
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Column className="ams-mb--md" gap="small">
          <form className="ams-gap--md" onSubmit={handleSubmit}>
            <Heading>Contact</Heading>
            <div>
              <FormLabel htmlFor="description">Wat wilt u aan de gemeente vragen?</FormLabel>
              <Paragraph size="small">
                Een duidelijke beschrijving van uw Question helpt ons bij het behandelen. U kunt eventueel nog een
                bijlage toevoegen.
              </Paragraph>
              <TextArea id="description" rows={8} />
              <Paragraph size="small">0/1000 tekens</Paragraph>
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
              <label htmlFor="fileUpload">Selecteer bestand</label>
            </Fieldset>
            <FormNavigation backlinkUrl={`${siteUrl}contact`} />
          </form>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
