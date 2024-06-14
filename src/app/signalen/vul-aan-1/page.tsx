/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, FieldSet, Heading, Icon, Radio } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function VulAan1() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/vul-aan-2')

  return (
    <>
      <Link className="ams-link-list__link ams-mb--sm" href="/signalen">
        <Icon svg={ChevronLeftIcon} size="level-5" />
        Vorige vraag
      </Link>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <Heading level={2}>Beschrijf uw melding</Heading>
        <FieldSet legend="Wanneer heeft u de overlast? (niet verplicht)" role="radiogroup">
          <Radio value="nu" {...register('when')}>
            Nu
          </Radio>
          <Radio value="eerder" {...register('when')}>
            Eerder
          </Radio>
        </FieldSet>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </>
  )
}

export default VulAan1
