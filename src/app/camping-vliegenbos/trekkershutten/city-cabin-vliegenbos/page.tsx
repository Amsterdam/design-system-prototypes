'use client'

import cityCamperImage1 from '../../_assets/city-cabin-vliegenbos-1.jpg'
import cityCamperImage2 from '../../_assets/city-cabin-vliegenbos-2.jpg'
import cityCamperImage3 from '../../_assets/city-cabin-vliegenbos-3.jpg'
import cityCamperImage4 from '../../_assets/city-cabin-vliegenbos-4.jpg'
import cityCamperImage5 from '../../_assets/city-cabin-vliegenbos-5.jpg'
import PageLayout from '../components/PageLayout'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4, cityCamperImage5]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))

const items = [
  '2 tweepersoonsbedden (opklapbed) inclusief beddengoed.',
  'Een ingerichte Kitchenette met minikoelkast.',
  'Een eigen toilet',
  'Tafel met een bank en 2 krukjes.',
  'Vloerverwarming',
  'Veranda',
]

export default function CityCabinAmsterdam() {
  return (
    <PageLayout
      heading="City Cabin 'Vliegenbos'"
      paragraph="De trekkershut is gemaakt met gerecycled materiaal."
      items={items}
      images={reformattedImages}
      iframeSrc="https://www.google.com/maps/embed?pb=!4v1758011480356!6m8!1m7!1sCAoSLEFGMVFpcE1Cd0dxTXZYb3RIeU5CMmJIZHBxTVNsVVBqaXVnRDBOamItOVVZ!2m2!1d52.39125026793637!2d4.931213150507417!3f290.4!4f0!5f0.7820865974627469"
    />
  )
}
