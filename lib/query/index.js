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