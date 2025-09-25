/**
 * Converts path to path with basePath.
 *
 * Example: "/contact" → "/demo-contact-page/contact"
 *
 * @param path - The path to convert
 * @returns The converted path
 */

const formatPath = (path: string) => {
  return `${process.env.basePath}${path}`
}

export default formatPath
