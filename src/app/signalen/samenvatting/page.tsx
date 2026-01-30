'use client'

import { Button, Column, Grid, Heading, Link, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import '../_components/SummaryDescriptionList/summary-description-list.css'
import './edit-link.css'
import { capitalizeFirstLetter } from '../_utils/capitalizeFirstLetter'
import { useFormContext } from '../FormContext'

const questions = [
  {
    href: '/signalen',
    id: 'body',
    questionText: 'Waar gaat het om?',
  },
  {
    href: '/signalen/vul-aan-1',
    id: 'when',
    questionText: 'Wanneer heeft u de overlast?',
  },
  {
    href: '/signalen/vul-aan-1b',
    id: 'whenDay',
    questionText: 'Welke dag was het?',
  },
  {
    href: '/signalen/vul-aan-1c',
    id: 'whenTime',
    questionText: 'Hoe laat was het?',
  },
  {
    href: '/signalen/vul-aan-2',
    id: 'type',
    questionText: 'Welk afval is verkeerd neergezet?',
  },
  {
    href: '/signalen/vul-aan-3',
    id: 'who',
    questionText: 'Weet u wie de eigenaar is van het verkeerd geplaatste afval?',
  },
  {
    href: '/signalen/contact-1',
    id: 'phone',
    questionText: 'Wat is uw telefoonnummer?',
  },
  {
    href: '/signalen/contact-1',
    id: 'mail',
    questionText: 'Wat is uw e-mailadres?',
  },
  {
    href: '/signalen/contact-2',
    id: 'permission',
    questionText: 'Mogen we uw melding doorsturen?',
  },
  {
    href: '/signalen/documenten',
    id: 'files',
    questionText: 'Heeft u een bestand om toe te voegen?',
  },
]

const formatAnswer = (id: string, formData) => {
  switch (id) {
    case 'files':
      return formData?.files && formData?.files['0']?.name
    case 'mail':
      return formData?.mail
    case 'permission':
      return formData?.permission ? 'Ja' : 'Nee'
    default:
      return formData[id] && capitalizeFirstLetter(formData[id])
  }
}

function Summary() {
  const { formData } = useFormContext()

  const { handleSubmit, register } = useForm()

  const router = useRouter()
  const onSubmit = () => router.push('/signalen/bedankt')

  useEffect(() => {
    document.title = 'Stap 4 van 4, samenvatting - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 9 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-xl" href="/signalen/documenten">
          Vorige vraag
        </BackLink>
        <Column>
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Samenvatting</Heading>
            <Paragraph>Stap 4 van 4</Paragraph>
          </hgroup>
          <Paragraph>Controleer de onderstaande gegevens.</Paragraph>
          <dl className="ams-summary-description-list ams-gap-m">
            {questions.map(({ href, id, questionText }) => {
              // Don't show whenX questions if when is now
              if ((id === 'whenDay' || id === 'whenTime') && formData.when === 'nu') return undefined

              return (
                <div className="ams-summary-description-list__container" key={id}>
                  <dt className="ams-summary-description-list__term">{questionText}</dt>
                  <dd className="ams-summary-description-list__description" dir="auto">
                    {formatAnswer(id, formData) || 'Niet ingevuld'}
                  </dd>
                  <dd className="ams-summary-description-list__link">
                    <NextLink href={href} legacyBehavior passHref>
                      <Link className="ams-edit-link">
                        Wijzig
                        <span className="ams-visually-hidden"> vraag: {questionText}</span>
                      </Link>
                    </NextLink>
                  </dd>
                </div>
              )
            })}
          </dl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value="true" {...register('answers-checked')} />
            <Button type="submit">Verstuur melding</Button>
          </form>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Summary
