export default function List({ courses, children }) {
  return(
    <div className="grid grid-cols-2 gap-24">
      { courses.map((course, index) => children(course, index)) }
    </div>
  )
}