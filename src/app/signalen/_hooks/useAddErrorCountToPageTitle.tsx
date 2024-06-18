import { useState, useEffect } from 'react'

export const useAddErrorCountToPageTitle = (errors: { id: string; label: string }[]) => {
  const [documentTitle, setDocumentTitle] = useState<string>()

  useEffect(() => {
    setDocumentTitle(document.title)
  }, [])

  useEffect(() => {
    if (documentTitle) {
      if (errors.length > 0) {
        document.title = `(${errors.length} invoerfout${errors.length === 1 ? '' : 'en'}) ${documentTitle}`
      } else {
        document.title = documentTitle
      }
    }
  }, [errors, documentTitle])

  return null
}
