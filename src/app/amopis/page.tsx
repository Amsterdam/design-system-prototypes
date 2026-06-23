'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AmopisIndex() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/amopis/projecten')
  }, [router])
  return null
}
