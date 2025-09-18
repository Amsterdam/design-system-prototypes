'use client'

import cityCamperImage1 from '../../_assets/city-camper-amsterdam.jpg'
import cityCamperImage2 from '../../_assets/city-camper-amsterdam-2.jpg'
import cityCamperImage3 from '../../_assets/city-camper-amsterdam-3.jpg'
import cityCamperImage4 from '../../_assets/city-camper-amsterdam-4.jpeg'
import cityCamperImage5 from '../../_assets/city-camper-amsterdam-5.jpeg'
import PageLayout from '../components/PageLayout'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4, cityCamperImage5]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))
const items = [
  '2 eenpersoonsbedden en 1 stapelbed inclusief beddengoed',
  'Een ingerichte Kitchenette met minikoelkast',
  'Een eigen toilet',
  'Tafel met een bank en 2 stoelen',
  'Vloerverwarming',
  'Veranda',
]

export default function CityCabinAmsterdam() {
  return (
    <PageLayout
      heading="City Cabin 'Amsterdam'"
      paragraph="De trekkershut is geïnspireerd op een Zweeds langhuis."
      items={items}
      images={reformattedImages}
      iframeSrc="https://www.google.com/maps/embed?pb=!4v1757946479997!6m8!1m7!1sCAoSLEFGMVFpcE5pTnhIYTZTaXBxb2t1eU1KTTFRb1Q0R3JqOG9IVU1EZFZFNDFU!2m2!1d52.39125479165292!2d4.931651391306213!3f214.39!4f-12.060000000000002!5f0.4000000000000002"
    />
  )
}
