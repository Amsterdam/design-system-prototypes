import NextLink from 'next/link'

import { Grid, Link, Screen } from '@amsterdam/design-system-react'

function About() {
  return (
    <Screen maxWidth="wide">
      <Grid gapVertical="large" paddingVertical="medium">
        <Grid.Cell span={3}>
          <NextLink href="/">Next Link to Home</NextLink>
        </Grid.Cell>
        <Grid.Cell span={3}>
          <Link href="/amopis">ADS Link to Amopis</Link>
        </Grid.Cell>
        <Grid.Cell span={3}>Test 3</Grid.Cell>
        <Grid.Cell span={3}>Test 4</Grid.Cell>
      </Grid>
    </Screen>
  )
}

export default About
