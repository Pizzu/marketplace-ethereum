export const coursesQuery = `*[_type == "course"] {
  _id,
  title,
  type,
  description,
  slug,
  coverImage,
  color,
  isFeatured
}`

export const courseQuery = `*[_type == "course" && slug.current == $slug][0] {
  _id,
  title,
  type,
  description,
  slug,
  coverImage,
  color,
  skills[] {
    _key,
    image,
    title
  }
}`

export const coursesPath = `*[_type == "course" && defined(slug.current)]{
  "params": {
    "slug": slug.current
  }
}`