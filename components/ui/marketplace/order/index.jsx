import { MarketplaceNavigation } from "@components/ui/marketplace"
import { CourseList, OwnedCourseCard } from "@components/ui/course"
import { useWalletInfo } from "@components/hooks/web3"

export default function MarketplaceOrders({ courses }) {

  const { isWalletConnected } = useWalletInfo()

  return (
    <div className="relative">
      <div className="container">
        <MarketplaceNavigation />
        { isWalletConnected && (
          <div className="grid grid-rows-1 gap-20">
            <CourseList courses={courses}>
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