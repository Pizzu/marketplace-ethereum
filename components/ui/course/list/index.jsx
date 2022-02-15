export default function List({ courses, children }) {
  return(
    <>
      { courses.map((course, index) => children(course, index)) }
    </>
  )
}