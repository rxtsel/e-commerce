export const slugToTitle = slug => {
  return String(slug).includes('-')
    ? slug.split('-').join(' ')
    : slug
}
