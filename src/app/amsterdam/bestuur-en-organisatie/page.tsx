'use client'

import { Breadcrumb, Card, Grid, Heading, Link, PageHeading, Paragraph } from '@amsterdam/design-system-react'
import clsx from 'clsx'
import NextLink from 'next/link'

type SubsectionProps = {
  isEven: boolean
  title: string
}

const linkUrls: Record<string, string> = {
  Gemeenteraad: '/amsterdam/bestuur-en-organisatie/gemeenteraad',
  'College van burgemeester en wethouders': '/amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders',
}

function Subsection({ isEven, title }: SubsectionProps) {
  return (
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={isEven ? { narrow: 1, medium: 1, wide: 2 } : undefined}>
      <Card>
        <Heading level={3} size="level-4">
          <Card.Link href={linkUrls[title] ?? '#'}>{title}</Card.Link>
        </Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore.</Paragraph>
      </Card>
    </Grid.Cell>
  )
}

type SectionProps = {
  description?: string
  linkText?: string
  subsections: Array<string>
  title: string
}

function Section({ description, linkText, subsections, title }: SectionProps) {
  return (
    <Grid paddingBottom="large" gapVertical="small">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className={clsx({ 'ams-mb--xs': description || linkText })} level={2}>
          {title}
        </Heading>
        {description && <Paragraph className="ams-mb--sm">{description}</Paragraph>}
        {linkText && (
          <Link href="#" variant="standalone">
            {linkText}
          </Link>
        )}
      </Grid.Cell>
      {subsections.map((subtitle, index) => (
        <Subsection isEven={index % 2 === 0} key={subtitle} title={subtitle} />
      ))}
    </Grid>
  )
}

Section.defaultProps = {
  description: undefined,
  linkText: undefined,
}

export default function BestuurEnOrganisatie() {
  return (
    <>
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
          <PageHeading className="ams-mb--sm">Bestuur en Organisatie</PageHeading>
          <Paragraph size="large">
            Aenean lorem elit, commodo eget elit sit amet, auctor venenatis ligula. Phasellus faucibus fringilla
            viverra. Aliquam vestibulum vehicula enim, ac consequat nisl mattis id.{' '}
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Section
        description="De gemeente Amsterdam kent verschillende bestuursorganen. Op het hoogste niveau zijn dat de gemeenteraad en het college van burgemeester en wethouders. Alle stadsdelen hebben een stadsdeelcommissie en stadsgebied Weesp heeft een bestuurscommissie. De stadsdelen en het stadsgebied hebben elk een dagelijks bestuur. De manier waarop deze verschillende besturen samenwerken noemen we het bestuurlijk stelsel."
        linkText="Zo wordt de gemeente bestuurd"
        subsections={[
          'Gemeenteraad',
          'Dagelijks bestuur',
          'Stadsdeelcommissies en bestuurscommissie',
          'College van burgemeester en wethouders',
        ]}
        title="Bestuur"
      />
      <Section subsections={['Hoe werkt de gemeente Amsterdam', 'Vacatures', 'Financiën']} title="Organisatie" />
      <Section
        subsections={[
          'Ons beleid',
          'Meepraten en meedoen',
          'Bekendmakingen',
          'Inspraaktrajecten',
          'Openbaarmakingen',
          'Regelgevingsregister',
        ]}
        title="Beleid en inspraak"
      />
      <Section subsections={['Pers', 'Huisstijl']} title="Pers en huisstijl" />
    </>
  )
}
