'use client'

import { Breadcrumb, Button, FieldSet, Grid, Heading, Link, Paragraph, Radio } from '@amsterdam/design-system-react'
import formatPath from '../../../utils/formatPath'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'

function Contact() {
  const router = useRouter()

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault()
    router.push('/amsterdam/contact/vraag')
  }

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link href={formatPath('/amsterdam')}>Home</Breadcrumb.Link>
        </Breadcrumb>
        <form className="ams-gap-l" onSubmit={handleSubmit}>
          <Heading level={1}>Contact</Heading>
          <FieldSet legend="Waar gaat uw melding over?">
            <Radio defaultChecked name="soort" value="vraag">
              Vraag
            </Radio>
            <Radio disabled name="soort" value="klacht">
              Klacht
            </Radio>
            <Radio disabled name="soort" value="meldingen">
              Meldingen openbare ruimte en overlast
            </Radio>
            <Radio disabled name="soort" value="idee">
              Idee of suggestie
            </Radio>
          </FieldSet>
          <Paragraph>
            U dient een klacht in als u vindt dat de gemeente Amsterdam u niet netjes heeft behandeld. Lees meer over de
            klachtenprocedure op <Link href="https://amsterdam.nl/klachten">amsterdam.nl/klachten</Link>.
          </Paragraph>
          <Paragraph>
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
