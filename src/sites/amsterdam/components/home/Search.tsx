import { AspectRatio, Grid, Image, Overlap, SearchField } from '@amsterdam/design-system-react'
import vindenImage from '../../assets/images/vinden.jpg'

export const Search = () => (
  <Overlap>
    <AspectRatio ratio="2x-wide">
      <Image alt="" cover src={vindenImage} />
    </AspectRatio>
    <Grid style={{ alignSelf: 'center' }}>
      <Grid.Cell span={{ medium: 6, narrow: 4, wide: 8 }} start={{ medium: 2, narrow: 1, wide: 3 }}>
        <SearchField onSubmit={() => {}}>
          <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
          <SearchField.Button />
        </SearchField>
      </Grid.Cell>
    </Grid>
  </Overlap>
)
