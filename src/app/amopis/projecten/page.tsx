'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Projecten() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/amopis/projecten/projectdetails/kerngegevens')
  }, [router])
  return null
}
