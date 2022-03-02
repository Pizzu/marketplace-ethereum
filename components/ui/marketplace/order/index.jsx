import { MarketplaceNavigation } from "@components/ui/marketplace"
import { CourseList, OwnedCourseCard } from "@components/ui/course"
import { useOwnedCourses, useWalletInfo } from "@components/hooks/web3"

export default function MarketplaceOrders({ courses }) {

  const { isWalletConnected, account } = useWalletInfo()
  const { ownedCourses } = useOwnedCourses(courses, account.data, isWalletConnected)

  return (
    <div className="relative">
      <div className="container">
        <MarketplaceNavigation />
        { (isWalletConnected && ownedCourses.data) && (
          <div className="grid grid-rows-1 gap-20">
            <CourseList courses={ownedCourses.data}>
              {
                (course) => <OwnedCourseCard key={course._id} course={course} />
              }
            </CourseList>
          </div>
        )}
      </div>
    </div>
  )
}