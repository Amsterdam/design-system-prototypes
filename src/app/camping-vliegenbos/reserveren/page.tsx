'use client'

import { Grid, Heading } from '@amsterdam/design-system-react'

export default function Reserveren() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={1} size="level-2">
          Reserveren
        </Heading>
        <div
          className="TommyBookingSupport"
          data-app-start=""
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
        <script src="https://api.tommybookingsupport.com/widgets/js/widget.js" type="application/javascript"></script>
      </Grid.Cell>
    </Grid>
  )
}
