'use client'

import { Breadcrumb, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import dynamic from 'next/dynamic'
import formatPath from '../../../utils/formatPath'

const Map = dynamic(() => import('./components/ZoomControls'), { ssr: false })

export default function Route() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Breadcrumb>
          <Breadcrumb.Link href={formatPath('/camping-vliegenbos')}>Home</Breadcrumb.Link>
        </Breadcrumb>
        <Heading level={1}>Route</Heading>
        <Paragraph className="ams-mb-s">Je kunt Camping Vliegenbos vinden aan de Meeuwenlaan 138</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <div
          style={{
            // NOTE: Because the Map component loads in dynamically we need to set a min height to prevent layout shift
            minHeight: '460px',
          }}
        >
          <Map />
        </div>
      </Grid.Cell>
    </Grid>
  )
}
