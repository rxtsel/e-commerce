export const slugToTitle = slug => {
  return String(slug).includes('-')
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : slug.charAt(0).toUpperCase() + slug.slice(1)
}
