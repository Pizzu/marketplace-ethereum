import Button from "@components/ui/common/button"
import { shadowVariants, backgroundVariants } from "@lib/utils/variations"

export default function OwnedCourseCard({ course }) {
  return (
    <div className={`backdrop-blur-[80px] bg-black/20 divide-y grid grid-flow-row gap-2 rounded-md border-2 border-white/40 shadow-xl ${shadowVariants[course.color]}`}>
      <div className="px-6 py-8">
        <h3 className="text-2xl text-white font-bold">{course.title}</h3>
        <p className="text-lg text-white/70">0.0065 ETH</p>
      </div>
      <div className="grid grid-flow-row gap-7 px-6 py-8">
        <div className="grid grid-cols-2 items-center">
          <h4 className="text-white text-lg font-bold">Order ID</h4>
          <p className="text-white">0x95f147a2c0ced33a2dd49b7ce780bc2a9cf404593c5454</p>
        </div>
        <div className="grid grid-cols-2 items-center">
          <h4 className="text-white text-lg font-bold">Proof</h4>
          <p className="text-white">0x95f147a2c0ced33a2dd49b7ce780bc2a9cf404593c5454839843fcv348</p>
        </div>
        <Button className={`${backgroundVariants[course.color]} text-white justify-self-start`}>Watch Course</Button>
      </div>
    </div>
  )
}