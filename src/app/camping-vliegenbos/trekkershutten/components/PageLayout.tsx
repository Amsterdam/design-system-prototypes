import {
  Breadcrumb,
  CallToActionLink,
  Column,
  Grid,
  Heading,
  ImageSlider,
  Paragraph,
  Row,
  Spotlight,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'

interface PageLayoutProps {
  images: {
    src: string
    alt: string
  }[]
  heading: string
  paragraph: string
  items: string[]
  iframeSrc?: string
}

const goodToKnow = [
  'De trekkershutten zijn geschikt voor 4 personen. Neem contact op met de receptie als je met 5 personen wil komen',
  'Parkeerplaatsen zijn beperkt en niet te reserveren. We raden aan om niet met de auto te komen, tenzij het niet anders kan. Er is goed openbaar vervoer naar het centrum.',
  'Bij de trekkershut zijn ook schoonmaakspullen. Als je de hut niet schoon achterlaat, rekenen we schoonmaakkosten.',
  'Roken is niet toegestaan in de trekkershutten.',
  'Huisdieren zijn niet toegestaan.',
]

const arrivalDeparture = ['Aankomst vanaf 15.00 uur', 'Vertrek tot 11.00 uur']

const PageLayout = ({ images, heading, paragraph, items, iframeSrc }: PageLayoutProps) => {
  return (
    <>
      <Grid className="ams-mb-l">
        <Grid.Cell span="all">
          <Grid className="ams-mb-m">
            <Grid.Cell span="all">
              <Breadcrumb className="ams-mb-s">
                <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
                <Breadcrumb.Link href="/camping-vliegenbos/trekkershutten">Trekkershutten</Breadcrumb.Link>
              </Breadcrumb>
              <Heading level={1}>{heading}</Heading>
            </Grid.Cell>
          </Grid>
          <Grid>
            <Grid.Cell span={6}>
              <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
              <UnorderedList className="ams-mb-m">
                {items.map((item, index) => (
                  <UnorderedList.Item key={`${index}-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Grid.Cell>

            <Grid.Cell span={6} className="ams-mb-l">
              <ImageSlider controls images={images} />
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
      <Spotlight color="azure" className="ams-mb-l">
        <Grid paddingVertical="x-large">
          <Grid.Cell span="all">
            <Column>
              <Heading color="inverse" level={2}>
                In de {heading} overnachten?
              </Heading>
              <StandaloneLink color="inverse" href="camping-vliegenbos/reserveren">
                Reserveren
              </StandaloneLink>
            </Column>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingBottom="x-large">
        <Grid.Cell
          {...(!iframeSrc
            ? {
                span: { narrow: 4, medium: 5, wide: 7 },
                start: { narrow: 1, medium: 2, wide: 3 },
              }
            : { span: 6 })}
        >
          <Tabs>
            <Tabs.List>
              <Tabs.Button aria-controls="goed-om-te-weten">Goed om te weten</Tabs.Button>
              <Tabs.Button aria-controls="aankomst-en-vertrek">Aankomst en vertrek</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="goed-om-te-weten">
              <UnorderedList>
                {goodToKnow.map((item, index) => (
                  <UnorderedList.Item key={`${index}-goodtoknow-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="aankomst-en-vertrek">
              <UnorderedList>
                {arrivalDeparture.map((item, index) => (
                  <UnorderedList.Item key={`${index}-arrival-departure-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
        {iframeSrc && (
          <Grid.Cell span={6}>
            <iframe
              src={iframeSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid.Cell>
        )}
      </Grid>
    </>
  )
}

export default PageLayout
