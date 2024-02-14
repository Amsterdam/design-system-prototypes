import { AspectRatio, Card, Grid, Heading, Image, Paragraph } from '@amsterdam/design-system-react'
import stormschadeImage from '../../assets/images/stormschade.jpg'
import vervoerImage from '../../assets/images/vervoer.jpg'
import woonwijkImage from '../../assets/images/woonwijk.jpg'
import zonnepanelenImage from '../../assets/images/zonnepanelen.jpg'

export const CurrentAffairs = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span={3}>
      <Heading className="amsterdam-mb-sm">Kalender</Heading>
      <div className="amsterdam-gap--md">
        <Card>
          <Heading level={2} size="level-4">
            <Card.Link href="#">29 juni 2023</Card.Link>
          </Heading>
          <Paragraph size="small">Presentatie nieuwe Stopera-gebouw</Paragraph>
          <Paragraph size="small">Tijd: 18.00 – 21.00 uur</Paragraph>
        </Card>
        <Card>
          <Heading level={2} size="level-4">
            <Card.Link href="#">22 juni 2023</Card.Link>
          </Heading>
          <Paragraph size="small">Praat mee over het toekomstige slavernijmuseum</Paragraph>
          <Paragraph size="small">Tijd: 13.00 – 16.00 uur</Paragraph>
        </Card>
        <Card>
          <Heading level={2} size="level-4">
            <Card.Link href="#">15 juni 2023</Card.Link>
          </Heading>
          <Paragraph size="small">Opening tentoonstelling schilderijen Van Rijn</Paragraph>
          <Paragraph size="small">Tijd: 10.00 – 11.30 uur</Paragraph>
        </Card>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
      <Heading className="amsterdam-mb-sm">Nieuws</Heading>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src={stormschadeImage} />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Waar u stormschade kunt melden</Card.Link>
          </Heading>
        </Card.HeadingGroup>
        <Paragraph size="small">
          Storm Poly raasde woensdag 5 juli over de stad. Het zal in sommige gevallen nog enkele dagen duren voordat
          alle schade is opgeruimd. U kunt een melding doen van afgebroken takken, andere stormschade of wateroverlast.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src={woonwijkImage} />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src={vervoerImage} />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Gratis openbaar vervoer voor kinderen</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={4}>
      <Card>
        <AspectRatio ratio="x-wide">
          <Image alt="" src={zonnepanelenImage} />
        </AspectRatio>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-4">
            <Card.Link href="#">Zonnepanelen op uw dak? Zo houdt u uw huis veilig</Card.Link>
          </Heading>
        </Card.HeadingGroup>
      </Card>
    </Grid.Cell>
  </Grid>
)
