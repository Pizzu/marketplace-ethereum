import Button from "@components/ui/common/button"
import Link from "next/link"
import { shadowVariants, backgroundVariants, statusColors } from "@lib/utils/variations"

export default function OwnedCourseCard({ course }) {
  const courseState = course.state.charAt(0).toUpperCase() + course.state.slice(1)
  
  return (
    <div className={`backdrop-blur-[80px] bg-black/20 divide-y grid grid-flow-row gap-2 rounded-md border-2 border-white/40 shadow-xl ${shadowVariants[course.color]}`}>
      <div className="px-6 py-8">
        <div className="grid grid-flow-col auto-cols-max gap-6 items-center">
          <h3 className="text-2xl text-white font-bold">{course.title}</h3>
          <span className={`${statusColors[course.state]} text-white text-sm font-medium px-3 py-1 rounded-full`}>{courseState}</span>
        </div>
        <p className="text-lg text-white/70">{course.price} ETH</p>
      </div>
      <div className="grid grid-flow-row gap-7 px-6 py-8">
        <div className="grid grid-cols-2 items-center">
          <h4 className="text-white text-lg font-bold">Order ID</h4>
          <p className="text-white">{course.ownedId}</p>
        </div>
        <div className="grid grid-cols-2 items-center">
          <h4 className="text-white text-lg font-bold">Proof</h4>
          <p className="text-white">{course.proof}</p>
        </div>
        <Link href={`/courses/${course.slug.current}`} passHref>
          <a>
            <Button className={`${backgroundVariants[course.color]} text-white justify-self-start`}>Watch Course</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}