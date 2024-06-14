export const formatErrors = (errors) => {
  if (!errors) return []

  return Object.keys(errors).map((key) => ({
    id: `#${errors[key].ref.id}`,
    message: errors[key].message,
  }))
}
