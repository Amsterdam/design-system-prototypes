'use client'

import cityCamperImage1 from '../../_assets/city-cabin-noord-1.jpeg'
import cityCamperImage2 from '../../_assets/city-cabin-noord-2.jpeg'
import cityCamperImage3 from '../../_assets/city-cabin-noord-3.jpg'
import cityCamperImage4 from '../../_assets/city-cabin-noord-4.jpeg'
import PageLayout from '../components/PageLayout'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))
const items = [
  '1 tweepersoonsbed en 1 stapelbed inclusief beddengoed',
  'Een ingerichte Kitchenette met minikoelkast',
  'Een eigen toilet',
  'Tafel met een hoekbank en 2 krukjes',
  'Vloerverwarming',
  'Veranda',
]

export default function CityCabinNoord() {
  return (
    <PageLayout
      heading="City Cabin 'Noord'"
      images={reformattedImages}
      items={items}
      paragraph="Deze unieke blauwe trekkershut staat op stelten."
      iframeSrc="https://www.google.com/maps/embed?pb=!4v1758008947400!6m8!1m7!1sCAoSLEFGMVFpcE9QR0N0TGN2TlFZWFBTZ3B3dWRwYXB0Z2JwcDg4djBFOUxQd01s!2m2!1d52.39107630174996!2d4.930939843785731!3f270.11!4f0!5f0.7820865974627469"
    />
  )
}
