import { MarketplaceNavigation } from "@components/ui/marketplace"
import { CourseList, OwnedCourseCard } from "@components/ui/course"

export default function MarketplaceOrders({ courses }) {
  return (
    <div className="relative">
      <div className="container">
        <MarketplaceNavigation />
        <div className="grid grid-rows-1 gap-20 ">
          <CourseList courses={courses}>
            {
              (course) => <OwnedCourseCard key={course._id} course={course} />
            }
          </CourseList>
        </div>
      </div>
    </div>
  )
}