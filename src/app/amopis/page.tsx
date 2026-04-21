'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AmopisIndex() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/amopis/projecten')
  }, [router])
  return null
}
