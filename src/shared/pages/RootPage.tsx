import { Grid, Heading, Link, PageHeading, Screen, UnorderedList } from '@amsterdam/design-system-react'
import { siteUrl as amopisSiteUrl } from '../../sites/amopis/constants'
import { siteUrl as amsterdamSiteUrl } from '../../sites/amsterdam/constants'
import { siteUrl as signalenSiteUrl } from '../../sites/signalen/constants'
/* Append siteUrl import here */

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
  /* Append site object here */
]

export const RootPage = () => (
  <Screen maxWidth="wide">
    <Grid paddingVertical="large">
      <Grid.Cell span="all">
        <PageHeading>Prototypes</PageHeading>
        <Heading level={2} size="level-4" className="amsterdam-mb-md">
          Amsterdam Design System
        </Heading>
        <UnorderedList markers={false}>
          {sites.map(({ href, label }) => (
            <UnorderedList.Item>
              <Link href={href} variant="inList" style={{ paddingInline: '1rem' }}>
                {label}
              </Link>
            </UnorderedList.Item>
          ))}
        </UnorderedList>
      </Grid.Cell>
    </Grid>
  </Screen>
)
