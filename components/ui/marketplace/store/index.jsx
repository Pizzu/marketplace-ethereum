import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceNavigation } from "@components/ui/marketplace"
import { OrderModal } from "@components/ui/order"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { useState } from "react"

export default function MarketplaceStore({ courses }) {
  
  const { requireInstall } = useWeb3()
  const { isConnecting, isWalletConnected, network } = useWalletInfo()
  const courseWalletInfo = { requireInstall, isConnecting, isWalletConnected, network }

  const [selectedCourse, setSelectedCourse] = useState(null)
  const onSelectedCourse = (course) => setSelectedCourse(course)
  const resetSelectedCourse = () => setSelectedCourse(null)

  const purchaseCourse = ({ course, email, price }) => {
    console.log(course),
    console.log(email)
    console.log(price)
  }
  
  return (
    <>
      <section className="relative">
        <div className="container">
          <MarketplaceNavigation />
          <div className="grid grid-cols-2 gap-24">
            <CourseList courses={courses}>
              {
                (course, index) => <CourseCard key={course._id} course={course} index={index} courseWalletInfo={courseWalletInfo} onSelectedCourse={onSelectedCourse} />
              }
            </CourseList>
          </div>
        </div>
      </section>
      {
        selectedCourse &&
        <OrderModal course={selectedCourse} purchaseCourse={purchaseCourse} resetCourse={resetSelectedCourse} />
      }
    </>
  )
}