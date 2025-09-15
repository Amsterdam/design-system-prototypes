'use client'

import { Grid, Heading, ImageSlider, Paragraph, UnorderedList } from '@amsterdam/design-system-react'

import cityCamperImage1 from '../../_assets/city-camper-amsterdam.jpg'
import cityCamperImage2 from '../../_assets/city-camper-amsterdam-2.jpg'
import cityCamperImage3 from '../../_assets/city-camper-amsterdam-3.jpg'
import cityCamperImage4 from '../../_assets/city-camper-amsterdam-4.jpeg'
import cityCamperImage5 from '../../_assets/city-camper-amsterdam-5.jpeg'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4, cityCamperImage5]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))

export default function CityCabinAmsterdam() {
  return (
    <Grid paddingBottom="x-large" gapVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={1} size="level-2">
          City Cabin Amsterdam
        </Heading>
        <Paragraph>De trekkershut is geïnspireerd op een Zweeds langhuis.</Paragraph>
      </Grid.Cell>
      <Grid.Cell span="all">
        <ImageSlider controls images={reformattedImages} />
      </Grid.Cell>
      <Grid.Cell span="all">
        <Grid>
          <Grid.Cell span={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757946479997!6m8!1m7!1sCAoSLEFGMVFpcE5pTnhIYTZTaXBxb2t1eU1KTTFRb1Q0R3JqOG9IVU1EZFZFNDFU!2m2!1d52.39125479165292!2d4.931651391306213!3f214.39!4f-12.060000000000002!5f0.4000000000000002"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid.Cell>
          <Grid.Cell span={6}>
            <UnorderedList>
              <UnorderedList.Item>2 eenpersoonsbedden en 1 stapelbed inclusief beddengoed</UnorderedList.Item>
              <UnorderedList.Item>Een ingerichte Kitchenette met minikoelkast</UnorderedList.Item>
              <UnorderedList.Item>Een eigen toilet</UnorderedList.Item>
              <UnorderedList.Item>Tafel met een bank en 2 stoelen</UnorderedList.Item>
              <UnorderedList.Item>Vloerverwarming</UnorderedList.Item>
              <UnorderedList.Item>Veranda</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
        </Grid>
      </Grid.Cell>
    </Grid>
  )
}
