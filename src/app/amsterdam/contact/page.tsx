'use client'

import { Breadcrumb, Button, FieldSet, Grid, Heading, Link, Paragraph, Radio } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Contact() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/amsterdam/contact/vraag')
  }

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <NextLink href="/amsterdam" legacyBehavior passHref>
            <Breadcrumb.Link>Home</Breadcrumb.Link>
          </NextLink>
        </Breadcrumb>
        <form className="ams-gap-l" onSubmit={handleSubmit}>
          <Heading level={1}>Contact</Heading>
          <FieldSet legend="Waar gaat uw melding over?">
            <Radio name="soort" value="vraag" defaultChecked>
              Vraag
            </Radio>
            <Radio name="soort" value="klacht" disabled>
              Klacht
            </Radio>
            <Radio name="soort" value="meldingen" disabled>
              Meldingen openbare ruimte en overlast
            </Radio>
            <Radio name="soort" value="idee" disabled>
              Idee of suggestie
            </Radio>
          </FieldSet>
          <Paragraph size="small">
            U dient een klacht in als u vindt dat de gemeente Amsterdam u niet netjes heeft behandeld. Lees meer over de
            klachtenprocedure op <Link href="https://amsterdam.nl/klachten">amsterdam.nl/klachten</Link>.
          </Paragraph>
          <Paragraph size="small">
            Een melding openbare ruimte en overlast gaat bijvoorbeeld over afval dat niet is opgehaald, volle
            prullenbakken of containers, een losliggende stoeptegel of een kapotte lantaarnpaal. Ook overlast van horeca
            of personen kunt u melden via een melding openbare ruimte en overlast.
          </Paragraph>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact
