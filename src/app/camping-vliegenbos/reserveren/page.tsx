'use client'

import { Grid, Heading } from '@amsterdam/design-system-react'
import Script from 'next/script'
import { useState } from 'react'

export default function Reserveren() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={1} className="ams-mb-s">
          Reserveren
        </Heading>
        {loading && <Heading level={2}>Boekingsmodule wordt opgehaald...</Heading>}
        {error && <Heading level={2}>Er is iets mis gegaan bij het laden van de boekingsmodule</Heading>}
        <div
          className="TommyBookingSupport"
          data-app-start=""
          style={{ minHeight: '990px' }}
          id="TommyApp"
          data-keys='{"datapunt.apikey":"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExNjcyMDUwODk0MDg4MzA5NTcsImV4cCI6MTczMzMyNjk1OX0.8x_EnBNqKnXbcg9865T-2p3UynA2qsVSUOd_eVJ8jRyLj6yBXTqx5gt0vNKmfHdzDf7VB5xafER3M1JOnGrwAw"}'
          data-config='{"contentApi" : "https://www.amsterdam.nl/vliegenbos/algemene-onderdelen/online-boeken-app-(reserveren)/?AppIdt=app-data"}'
        >
          <div
            id="TommyBookingSupport"
            data-widget="boeken"
            data-apikey="8e2d91da4e36f2d82d3df133ac8f1f274430573c394b0b4a86cf18190e51cd5a"
            data-account="vliegenbos"
            data-language="nl"
            data-country="nl"
            data-locatie-keuze="true"
            data-locatie-keuze-voorkeursvraag="true"
            data-algemene-voorwaarden="https://www.amsterdam.nl/vliegenbos/algemene-onderdelen/algemene-voorwaarden/"
            data-url-success="https://www.amsterdam.nl/vliegenbos/algemene-onderdelen/succes/"
            data-url-error="https://www.amsterdam.nl/vliegenbos/algemene-onderdelen/error/"
            data-kalenderdatum="2022-05-25"
            data-url-privacy="https://www.amsterdam.nl/privacy/"
            data-actiecode="true"
          ></div>
        </div>
        <Script
          src="https://api.tommybookingsupport.com/widgets/js/widget.js"
          type="application/javascript"
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
        ></Script>
      </Grid.Cell>
    </Grid>
  )
}
