import { Alert, Grid, Paragraph } from '@amsterdam/design-system-react'
import { useState } from 'react'

export const CityOfficesClosed = () => {
  const [visible, setVisible] = useState(true)

  return (
    visible && (
      <Grid>
        <Grid.Cell span="all">
          <Alert className="amsterdam-mb--md" closeable onClose={() => setVisible(false)}>
            <Paragraph>
              Tijdens Koningsdag zijn alle Stadsloketten gesloten. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Aliquid aspernatur modi, omnis quam vitae. Ook 14 020 en alle andere telefoonnummers van de gemeente
              zijn niet bereikbaar.
            </Paragraph>
          </Alert>
        </Grid.Cell>
      </Grid>
    )
  )
}
