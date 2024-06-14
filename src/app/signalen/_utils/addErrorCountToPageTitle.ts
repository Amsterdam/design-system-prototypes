export const addErrorCountToPageTitle = (errors, initialDocTitle) => {
  if (errors.length > 0) {
    document.title = `(${errors.length} invoerfout${errors.length === 1 ? '' : 'en'}) ${initialDocTitle}`
  } else {
    document.title = initialDocTitle
  }
}
