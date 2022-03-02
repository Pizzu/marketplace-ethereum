import { MarketplaceNavigation } from "@components/ui/marketplace"
import { CourseList, OwnedCourseCard } from "@components/ui/course"
import { useOwnedCourses, useWalletInfo } from "@components/hooks/web3"

export default function MarketplaceOrders({ courses }) {

  const { isConnecting, isWalletConnected, account } = useWalletInfo()
  const { ownedCourses } = useOwnedCourses(courses, account.data, isWalletConnected)

  return (
    <div className="relative">
      <div className="container">
        <MarketplaceNavigation />
        { !isConnecting && 
          ((isWalletConnected && ownedCourses.data?.length > 0) ? 
            <div className="grid grid-rows-1 gap-20">
              <CourseList courses={ownedCourses.data}>
                {
                  (course) => <OwnedCourseCard key={course._id} course={course} />
                }
              </CourseList>
            </div>
            :
            <p className="bg-primary rounded-md mx-auto max-w-xl p-8 text-white text-2xl text-center">No orders found! Buy a course first!!!</p>
          )}
      </div>
    </div>
  )
}