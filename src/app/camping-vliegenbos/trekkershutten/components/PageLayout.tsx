import {
  Breadcrumb,
  Column,
  Grid,
  Heading,
  Image,
  ImageSlider,
  Paragraph,
  Spotlight,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'
import formatPath from '../../../../formatPath'

interface PageLayoutProps {
  images: {
    src: string
    alt: string
  }[]
  heading: string
  paragraph: string
  items: string[]
  from?: 'search' | 'trekkershut'
  type?: 'hut' | 'kamperen'
  takeALookLink?: string
  iframeSrc?: string
}

const goodToKnowHut = [
  'De trekkershutten zijn geschikt voor 4 personen. Neem contact op met de receptie als je met 5 personen wil komen',
  'Parkeerplaatsen zijn beperkt en niet te reserveren. We raden aan om niet met de auto te komen, tenzij het niet anders kan. Er is goed openbaar vervoer naar het centrum.',
  'Bij de trekkershut zijn ook schoonmaakspullen. Als je de hut niet schoon achterlaat, rekenen we schoonmaakkosten.',
  'Roken is niet toegestaan in de trekkershutten.',
  'Huisdieren zijn niet toegestaan.',
]

const goodToKnowKamperen = [
  'Je moet 18 jaar of ouder zijn om een camper- of caravanplek te boeken.',
  'Je kunt CEE-adapters lenen bij de receptie. Hiervoor betaal je een borg.',
]

const arrivalDeparture = ['Aankomst vanaf 15.00 uur', 'Vertrek tot 11.00 uur']

const PageLayout = ({
  images,
  heading,
  paragraph,
  items,
  iframeSrc,
  takeALookLink,
  from = 'trekkershut',
  type = 'hut',
}: PageLayoutProps) => {
  return (
    <>
      <Grid paddingBottom="x-large">
        <Grid.Cell span="all">
          <Grid className="ams-mb-m">
            <Grid.Cell span="all">
              <Breadcrumb className="ams-mb-s">
                <Breadcrumb.Link href={formatPath('/camping-vliegenbos')}>Home</Breadcrumb.Link>
                <Breadcrumb.Link
                  href={formatPath(
                    from === 'search' ? '/camping-vliegenbos/zoek-en-boek' : '/camping-vliegenbos/trekkershutten',
                  )}
                >
                  {from === 'search' ? 'Zoek en boek' : 'Trekkershutten'}
                </Breadcrumb.Link>
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
              {takeALookLink && (
                <StandaloneLink target="_blank" href={takeALookLink}>
                  Neem een kijkje
                </StandaloneLink>
              )}
            </Grid.Cell>
            <Grid.Cell span={6} className="ams-mb-l">
              {images.length > 1 ? <ImageSlider controls images={images} /> : <Image alt="" src={images.at(0)?.src} />}
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
      <Spotlight color="green">
        <Grid paddingVertical="x-large">
          <Grid.Cell span="all">
            <Column>
              <Heading color="inverse" level={2}>
                In de {heading} overnachten?
              </Heading>
              <StandaloneLink color="inverse" href={formatPath('/camping-vliegenbos/reserveren')}>
                Reserveren
              </StandaloneLink>
            </Column>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="x-large">
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
              <UnorderedList className="ams-mb-m">
                {type === 'hut'
                  ? goodToKnowHut.map((item, index) => (
                      <UnorderedList.Item key={`${index}-goodtoknow-item`}>{item}</UnorderedList.Item>
                    ))
                  : goodToKnowKamperen.map((item, index) => (
                      <UnorderedList.Item key={`${index}-goodtoknow-item`}>{item}</UnorderedList.Item>
                    ))}
              </UnorderedList>
              {type === 'kamperen' && (
                <StandaloneLink href="https://assets.amsterdam.nl/publish/pages/870842/">
                  Dagontheffing voor campers en kampeerwagens
                </StandaloneLink>
              )}
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
