import { Breadcrumb, Card, Checkbox, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

export const Search = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={3}>
      <div style={{ display: 'grid', gap: 'var(--amsterdam-grid-gap)' }}>
        <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 4)' }}>
          <Heading level={2} size="level-4">
            Contenttype
          </Heading>
          <Checkbox>Nieuws (10)</Checkbox>
          <Checkbox>Regeling (10)</Checkbox>
          <Checkbox>Werkzaamheden (5)</Checkbox>
        </div>
        <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 4)' }}>
          <Heading level={2} size="level-4">
            Groep
          </Heading>
          <Checkbox>Bewoners (10)</Checkbox>
          <Checkbox>Bedrijven (10)</Checkbox>
          <Checkbox>Bezoekers (5)</Checkbox>
        </div>
        <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 4)' }}>
          <Heading level={2} size="level-4">
            Soort afval
          </Heading>
          <Checkbox>Grofvuil (6)</Checkbox>
          <Checkbox>Tuinafval (4)</Checkbox>
          <Checkbox>Groente-, fruit-, etensresten en tuinafval (gfe/t) (3)</Checkbox>
          <Checkbox>Textiel (3)</Checkbox>
          <Checkbox>Huisvuil (2)</Checkbox>
          <Checkbox>Papier en karton (2)</Checkbox>
          <Checkbox>Glas (2)</Checkbox>
          <Checkbox>Brood (1)</Checkbox>
          <Checkbox>Asbest (1)</Checkbox>
          <Checkbox>KCA (klein chemisch afval) (1)</Checkbox>
        </div>
      </div>
    </Grid.Cell>
    <Grid.Cell span={8} start={5}>
      <div style={{ display: 'grid', gap: 'calc(var(--amsterdam-grid-gap) / 2)' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Zoekresultaten</Breadcrumb.Item>
        </Breadcrumb>
        <Paragraph size="small">25 resultaten</Paragraph>
        <Heading>Zoeken</Heading>
        <input
          type="text"
          style={{
            width: '100%',
            padding: '1em',
            borderWidth: '0 0 2px',
            borderStyle: 'solid',
            fontFamily: 'var(--amsterdam-paragraph-font-family)',
            fontSize: 'var(--amsterdam-paragraph-wide-font-size)',
          }}
        />
        <Card>
          <Card.HeadingGroup tagline="Nieuws">
            <Heading level={2} size="level-3">
              <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te
            halen in het centrum.
          </Paragraph>
          <Paragraph size="small">Gepubliceerd: 1 juli 2023</Paragraph>
        </Card>
        <Card>
          <Card.HeadingGroup tagline="Nieuws">
            <Heading level={2} size="level-3">
              <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
            vuilniswagens en een afvalboot.
          </Paragraph>
          <Paragraph size="small">Gepubliceerd: 15 juni 2023</Paragraph>
        </Card>
      </div>
    </Grid.Cell>
  </Grid>
)
