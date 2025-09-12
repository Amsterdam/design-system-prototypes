'use client'

import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export default function Trekkershutten() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={1}>Trekkershutten</Heading>
        <Paragraph>Hallo nieuwe pagina</Paragraph>
      </Grid.Cell>
    </Grid>
  )
}
