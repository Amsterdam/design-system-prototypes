'use client'

import { Heading, Paragraph, Link, Column, Grid } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useEffect } from 'react'
import { useFormContext } from '../FormContext'
import { docTitle } from '../../../constants'

function Thanks() {
  const { updateFormData } = useFormContext()

  useEffect(() => {
    // Reset form data
    updateFormData({
      body: null,
      when: null,
      whenDay: null,
      whenTime: null,
      type: null,
      who: null,
      phone: null,
      mail: null,
      permission: null,
    })
  }, [])

  useEffect(() => {
    document.title = 'Bedankt - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Column>
          <Heading level={1}>Melding openbare ruimte</Heading>
          <Column>
            <Heading level={2}>Bedankt</Heading>
            <Paragraph>
              Bedankt voor uw melding. Wij hebben uw melding ontvangen op{' '}
              <time dateTime={new Date(Date.now()).toLocaleDateString('nl')}>
                {new Date(Date.now()).toLocaleDateString('nl', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>{' '}
              om <time>{new Date(Date.now()).toLocaleTimeString('nl', { hour: 'numeric', minute: 'numeric' })}</time>.
              Uw meldnummer is 1977916.
            </Paragraph>

            <Heading level={3} size="level-4">
              Wat doen we met uw melding?
            </Heading>
            <Paragraph>Meldingen pakken we binnen 3 werkdagen op.</Paragraph>

            <Heading level={3} size="level-4">
              Vragen of meer informatie?{' '}
            </Heading>
            <Paragraph>
              Neem dan contact met ons op via <Link href="tel:14020">14 020</Link>. Vermeld hierbij alstublieft uw
              meldnummer. Meer informatie kunt u eventueel ook vinden op{' '}
              <Link href="https://www.amsterdam.nl/">amsterdam.nl</Link>.
            </Paragraph>

            <Heading level={3} size="level-4">
              Wilt u nog een andere melding doen?
            </Heading>
            <div>
              <NextLink href="/signalen" legacyBehavior passHref>
                <Link>Doe een melding</Link>
              </NextLink>
            </div>
          </Column>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Thanks
