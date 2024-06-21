'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Next doesn't automatically reset the focus to the top of the page on navigation.
 * This is especially noticeable when using a screen reader.
 * This component fixes that. For some applications it might be useful to focus on something
 * other than body on page load. Focusing on body mimics regular MPA functionality.
 */
export function ResetFocusOnNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Temporarily add tabIndex=-1 to body and set focus.
    document.body.setAttribute('tabIndex', '-1')
    document.body.focus()

    document.body.addEventListener('click', () => {
      // Remove tabIndex on click. We don't want to focus the body if the user clicks on a part
      // of the body that is not interactive.
      document.body.removeAttribute('tabIndex')
    })
  }, [pathname, searchParams])

  return null
}
