import {
  Column,
  Footer,
  Grid,
  Heading,
  Link,
  PageMenu,
  Paragraph,
  VisuallyHidden,
} from '@amsterdam/design-system-react'

export const SiteFooter = () => (
  <Footer>
    <Footer.Top>
      <VisuallyHidden>
        <Heading>Colofon</Heading>
      </VisuallyHidden>
      <Grid gapVertical="large" paddingVertical="medium">
        <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
          <Column gap="xs">
            <Heading level={2} size="level-4" inverseColor>
              Contact
            </Heading>
            <Paragraph size="small" inverseColor>
              Lukt het niet om een melding te doen? Bel het telefoonnummer{' '}
              <Link href="tel:+3114020" onBackground="dark" variant="inline">
                14 020
              </Link>
              .
            </Paragraph>
            <Paragraph size="small" inverseColor>
              Wij zijn bereikbaar van maandag tot en met vrijdag van 08.00 tot 18.00 uur.
            </Paragraph>
          </Column>
        </Grid.Cell>
      </Grid>
    </Footer.Top>
    <Footer.Bottom>
      <VisuallyHidden>
        <Heading level={2}>Over deze website</Heading>
      </VisuallyHidden>
      <Grid paddingVertical="small">
        <Grid.Cell span="all">
          <PageMenu>
            <PageMenu.Link href="#">Over deze site</PageMenu.Link>
            <PageMenu.Link href="#">Privacy</PageMenu.Link>
            <PageMenu.Link href="#">Toegankelijkheid</PageMenu.Link>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Footer.Bottom>
  </Footer>
)
