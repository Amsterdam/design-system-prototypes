'use client'

import cityCamperImage1 from '../../_assets/city-cabin-mokum-1.jpeg'
import cityCamperImage2 from '../../_assets/city-cabin-mokum-2.jpeg'
import cityCamperImage3 from '../../_assets/city-cabin-mokum-3.jpeg'
import cityCamperImage4 from '../../_assets/city-cabin-mokum-4.jpeg'
import cityCamperImage5 from '../../_assets/city-cabin-mokum-5.jpeg'
import PageLayout from '../components/PageLayout'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4, cityCamperImage5]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))

const items = [
  '2 stapelbedden inclusief beddengoed',
  'Een ingerichte Kitchenette met minikoelkast',
  'Tafel met een hoekbank en 2 stoelen',
  'Verwarming',
  'Picknick tafel',
]

export default function CityCabinAmsterdam() {
  return (
    <PageLayout
      heading="City Cabin 'Mokum'"
      paragraph="Deze simpele maar unieke trekkershut is nieuw in 2024!"
      images={reformattedImages}
      items={items}
    />
  )
}
