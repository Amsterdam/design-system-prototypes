'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Projecten() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/amopis/projecten/projectdetails/kerngegevens')
  }, [router])
  return null
}
