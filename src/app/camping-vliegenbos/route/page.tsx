'use client'

import { Breadcrumb, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import ZoomControls from './components/ZoomControls'

export default function Route() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
        </Breadcrumb>
        <Heading level={1} size="level-2">
          Route
        </Heading>
        <Paragraph className="ams-mb-s">Je kunt Camping Vliegenbos vinden aan de Meeuwenlaan 138</Paragraph>
        <ZoomControls />
      </Grid.Cell>
    </Grid>
  )
}
