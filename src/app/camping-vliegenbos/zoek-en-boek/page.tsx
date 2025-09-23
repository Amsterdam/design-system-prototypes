'use client'

import {
  Button,
  Card,
  Column,
  DateInput,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  StandaloneLink,
  Paragraph,
  Radio,
  Select,
  UnorderedList,
  ActionGroup,
  ErrorMessage,
  Alert,
  Row,
} from '@amsterdam/design-system-react'
import { useEffect, useState } from 'react'
import { Accommodation, TommyEndpointResponse } from './types'
import { ITommyAvailabilityResult } from './TypesEndpointAvailability'
import formatPath from '../../../formatPath'

type BookingFormData = {
  amountOfAdults: number
  amountOfYoungAdults: number
  amountOfChildren: number
  amountOfBabys: number
  type: 'Kamperen' | 'Verhuren'
  arrivalDate: string
  leaveDate: string
}

function extractListItems(htmlString: string) {
  return [
    ...document
      .createElement('div')
      .appendChild(Object.assign(document.createElement('div'), { innerHTML: htmlString }))
      .querySelectorAll('li'),
  ].map((li) => li.textContent.trim())
}

function canContinue(formData: BookingFormData, step: number, error: boolean) {
  const today = new Date()

  if (error) return false
  if (step === 0) return true
  if (step === 1) return true
  if (step === 2)
    return formData.arrivalDate < formData.leaveDate && formData.arrivalDate >= today.toISOString().split('T')[0]
}

export default function ZoekEnBoek() {
  const [data, setData] = useState<Accommodation[] | null>(null)
  const [accommodationsData, setAccommodationsData] = useState<Accommodation[] | null>(null)
  const [step, setStep] = useState(0)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    amountOfAdults: 1,
    amountOfYoungAdults: 0,
    amountOfChildren: 0,
    amountOfBabys: 0,
    type: 'Kamperen',
    arrivalDate: '',
    leaveDate: '',
  })

  const steps = ['Met hoeveel personen kom je?', 'Wil je kamperen of huren?', 'Welke periode kom je?']
  // NOTE: process.env can't be used inside an useEffect directly as it wont't load the variable.
  const authKey = process.env.NEXT_PUBLIC_TOMMY_BOOKING_SUPPORT

  useEffect(() => {
    fetch('https://tommybookingsupport.com/api/widget/metadata', {
      headers: {
        authentication: authKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const result = data as TommyEndpointResponse
        const accommodations = result.data.at(0).metadata.accommodations
        setData(accommodations)
      })
  }, [])

  useEffect(() => {
    if (formData.arrivalDate && formData.leaveDate) {
      const arrival = formData.arrivalDate
      const leave = formData.leaveDate

      const personsData = {
        10163: formData.amountOfAdults,
        10166: formData.amountOfYoungAdults,
        10169: formData.amountOfChildren,
        10172: formData.amountOfBabys,
      }

      const encodedPersons = encodeURIComponent(JSON.stringify(personsData))

      fetch(
        `https://tommybookingsupport.com/api/widget/price-and-availability?group=${formData.type === 'Kamperen' ? '6608' : '6605'}&language=nl&period=${arrival}+${leave}&persons=${encodedPersons}`,
        {
          headers: {
            authentication: authKey,
          },
        },
      )
        .then((res) => res.json())
        .then((response) => {
          const result = response as ITommyAvailabilityResult
          const filteredAccomodationsIds = result.data
            .at(0)
            .accommodations.flatMap((accommodation) => accommodation.accommodation)
          const filteredAccomodations = data?.filter(
            (accommodation) => accommodation.id && filteredAccomodationsIds.includes(accommodation.id),
          )
          setAccommodationsData(filteredAccomodations)
        })
    }
  }, [formData])

  useEffect(() => {
    if (
      new Date(formData.arrivalDate) < new Date(new Date().toISOString().split('T')[0]) ||
      new Date(formData.arrivalDate) > new Date(formData.leaveDate) ||
      new Date(formData.leaveDate) < new Date(formData.arrivalDate)
    ) {
      setError(true)
    } else {
      setError(false)
    }
  }, [formData.arrivalDate, formData.leaveDate])

  return (
    <>
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading level={1}>Zoek en boek</Heading>
          <Paragraph>
            Boek eenvoudig jouw verblijf in het groene hart van Amsterdam Noord. Kies je gewenste data en ontdek direct
            de beschikbare kampeerplekken en accommodaties.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          {step === 0 && (
            <>
              <FieldSet legend={steps[step]}>
                <Row>
                  <Column>
                    <Field>
                      <Label htmlFor="amountOfAdults">Volwassenen (16-20)</Label>
                      <Select
                        defaultValue={formData.amountOfAdults.toString()}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amountOfAdults: parseInt(e.target.value, 10),
                          })
                        }
                      >
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                      </Select>
                    </Field>
                    <Field>
                      <Label htmlFor="amountOfYoungAdults">Jong Volwassenen (16-20)</Label>
                      <Select
                        defaultValue={formData.amountOfYoungAdults.toString()}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amountOfYoungAdults: parseInt(e.target.value, 10),
                          })
                        }
                      >
                        <Select.Option value="0">0</Select.Option>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                      </Select>
                    </Field>
                  </Column>
                  <Column>
                    <Field>
                      <Label htmlFor="amountOfChildren">Kinderen (4-5)</Label>
                      <Select
                        defaultValue={formData.amountOfChildren.toString()}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amountOfChildren: parseInt(e.target.value, 10),
                          })
                        }
                      >
                        <Select.Option value="0">0</Select.Option>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                      </Select>
                    </Field>
                    <Field className="ams-mb-l">
                      <Label htmlFor="amountOfBabys">Baby(s) (1-3)</Label>
                      <Select
                        defaultValue={formData.amountOfBabys.toString()}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amountOfBabys: parseInt(e.target.value, 10),
                          })
                        }
                      >
                        <Select.Option value="0">0</Select.Option>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                        <Select.Option value="6">6</Select.Option>
                        <Select.Option value="7">7</Select.Option>
                        <Select.Option value="8">8</Select.Option>
                        <Select.Option value="9">9</Select.Option>
                        <Select.Option value="10">10</Select.Option>
                      </Select>
                    </Field>
                  </Column>
                </Row>
              </FieldSet>
            </>
          )}
          {step === 1 && (
            <>
              <FieldSet aria-describedby={steps[step]} legend={steps[step]} role="radiogroup" className="ams-mb-m">
                <Radio
                  name="type"
                  value="Kamperen"
                  checked={formData.type === 'Kamperen'}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      type: 'Kamperen',
                    })
                  }
                >
                  Kamperen
                </Radio>
                <Radio
                  name="type"
                  value="Huren"
                  checked={formData.type === 'Verhuren'}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      type: 'Verhuren',
                    })
                  }
                >
                  Huren
                </Radio>
              </FieldSet>
            </>
          )}
          {step === 2 && (
            <>
              <FieldSet
                aria-describedby={steps[step]}
                legend={steps[step]}
                role="radiogroup"
                className="ams-mb-m"
                invalid={error}
              >
                <Field className="ams-mb-s">
                  <Label htmlFor="arrivalDate">Aankomstdatum</Label>
                  {error && (
                    <ErrorMessage id="Aankomstdatum">
                      Je aankomstdatum moet vóór je vertrekdatum zijn en mag niet in het verleden liggen.
                    </ErrorMessage>
                  )}
                  <DateInput
                    invalid={error}
                    aria-describedby="Aankomstdatum"
                    onChange={(data) => {
                      setFormData({
                        ...formData,
                        arrivalDate: data.target.value,
                      })
                    }}
                  />
                </Field>
                <Field>
                  <Label htmlFor="leaveData">Vertrekdatum</Label>
                  <DateInput
                    invalid={error}
                    aria-describedby="Vertrekdatum"
                    onChange={(data) => {
                      setFormData({
                        ...formData,
                        leaveDate: data.target.value,
                      })
                    }}
                  />
                </Field>
              </FieldSet>
            </>
          )}
        </Grid.Cell>
      </Grid>
      {step === 3 && (
        <Grid>
          {accommodationsData.map((accommodation) => (
            <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} key={accommodation.id} className="ams-mb-m">
              <Card>
                <Card.Image alt="" src={accommodation.images.at(0).original} />
                <Card.Heading level={3} size="level-4">
                  <Card.Link href={formatPath(`/huren-kamperen?id=${accommodation.id}`)}>
                    {' '}
                    {accommodation.name.nl}
                  </Card.Link>
                </Card.Heading>
                <UnorderedList size="small">
                  {extractListItems(accommodation.description.nl)
                    .slice(0, 3)
                    .map((item, idx) => (
                      <UnorderedList.Item key={`${item}-${idx.toString()}`}>{item}</UnorderedList.Item>
                    ))}
                </UnorderedList>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      )}
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          {accommodationsData?.length === 0 && step === 3 && (
            <Alert headingLevel={2} heading="Er zijn geen resultaten gevonden" className="ams-mb-s">
              <Paragraph>
                Helaas zijn er geen beschikbare opties voor de door jou gekozen criteria. Probeer het opnieuw met andere
                gegevens.
              </Paragraph>
            </Alert>
          )}
          <ActionGroup>
            {step > 0 && (
              <Button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  setStep(step - 1)
                }}
                variant="secondary"
                className="ams-mb-m"
              >
                Vorige
              </Button>
            )}
            {step !== 3 && (
              <Button
                disabled={error}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  setStep(step < 3 ? step + 1 : step - 1)
                }}
                variant="primary"
                className="ams-mb-m"
              >
                {step === 2 ? 'Zoeken' : 'Volgende'}
              </Button>
            )}
          </ActionGroup>
        </Grid.Cell>
      </Grid>
    </>
  )
}
