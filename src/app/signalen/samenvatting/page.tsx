/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Fragment } from 'react'
import { Heading, Paragraph, Column, Button, Link as ADSLink, Grid } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

import '../_components/SummaryDescriptionList/summary-description-list.css'

const questions = [
  {
    id: 'body',
    questionText: 'Waar gaat het om?',
    href: '/signalen',
    hrefLabel: 'Wijzig uw melding',
  },
  {
    id: 'when',
    questionText: 'Wanneer heeft u de overlast?',
    href: '/signalen/vul-aan-1',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'type',
    questionText: 'Welk afval is verkeerd neergezet?',
    href: '/signalen/vul-aan-2',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'who',
    questionText: 'Weet u wie de eigenaar is van het verkeerd geplaatste afval?',
    href: '/signalen/vul-aan-3',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'phone',
    questionText: 'Wat is uw telefoonnummer?',
    href: '/signalen/contact-1',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'mail',
    questionText: 'Wat is uw e-mailadres?',
    href: '/signalen/contact-1',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'permission',
    questionText: 'Mogen we uw melding doorsturen?',
    href: '/signalen/contact-2',
    hrefLabel: 'Wijzig vraag',
  },
  {
    id: 'files',
    questionText: 'Heeft u een bestand om toe te voegen?',
    href: '/signalen/documenten',
    hrefLabel: 'Wijzig vraag',
  },
]

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const formatAnswer = (id: string, formData) => {
  switch (id) {
    case 'files':
      return formData?.files && formData?.files['0']?.name
    case 'permission':
      return formData?.permission ? 'Ja' : 'Nee'
    case 'mail':
      return formData?.mail
    default:
      return formData[id] && capitalizeFirstLetter(formData[id])
  }
}

function Summary() {
  const { formData, updateFormData } = useFormContext()

  const { register, handleSubmit } = useForm()

  const router = useRouter()
  const onSubmit = () => {
    // Reset form data
    updateFormData({
      body: null,
      when: null,
      type: null,
      who: null,
      phone: null,
      mail: null,
      permission: null,
    })
    router.push('/signalen/bedankt')
  }

  return (
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 9 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
      <BackLink href="/signalen/documenten" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <Column gap="medium">
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Samenvatting</Heading>
          <Paragraph>Stap 4 van 4</Paragraph>
        </hgroup>
        <Paragraph>Controleer de onderstaande gegevens.</Paragraph>
        <dl className="ams-summary-description-list">
          {questions.map(({ id, questionText, href, hrefLabel }) => (
            <Fragment key={id}>
              <dt className="ams-summary-description-list__term">{questionText}</dt>
              <div className="ams-summary-description-list__details-container">
                <dd className="ams-summary-description-list__details">
                  {formatAnswer(id, formData) || 'Niet ingevuld'}
                </dd>
                <dd className="ams-summary-description-list__details">
                  <Link href={href} legacyBehavior passHref>
                    <ADSLink variant="inline">{hrefLabel}</ADSLink>
                  </Link>
                </dd>
              </div>
            </Fragment>
          ))}
        </dl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" value="true" {...register('answers-checked')} />
          <Button type="submit">Verstuur melding</Button>
        </form>
      </Column>
    </Grid.Cell>
  )
}

export default Summary
