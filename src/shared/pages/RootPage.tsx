import { Grid, Heading, LinkList, PageHeading, Screen } from '@amsterdam/design-system-react'
import { siteUrl as amopisSiteUrl } from '../../sites/amopis/constants'
import { siteUrl as amsterdamSiteUrl } from '../../sites/amsterdam/constants'
import { siteUrl as signalenSiteUrl } from '../../sites/signalen/constants'

type Site = {
  label: string
  href: string
}

const sites: Site[] = [
  {
    label: 'Amsterdam.nl',
    href: amsterdamSiteUrl,
  },
  {
    label: 'Amopis',
    href: amopisSiteUrl,
  },
  {
    label: 'Signalen',
    href: `${signalenSiteUrl}beschrijf`,
  },
]

export const RootPage = () => (
  <Screen maxWidth="wide">
    <Grid paddingVertical="large">
      <Grid.Cell span="all">
        <PageHeading>Prototypes</PageHeading>
        <Heading level={2} size="level-4" className="amsterdam-mb-md">
          Amsterdam Design System
        </Heading>
        <LinkList>
          {sites.map(({ href, label }) => (
            <LinkList.Link href={href}>{label}</LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>
    </Grid>
  </Screen>
)
