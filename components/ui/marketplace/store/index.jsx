import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceNavigation } from "@components/ui/marketplace"
import { OrderModal } from "@components/ui/order"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { useState } from "react"
import { withToast } from "@utils/toast";

export default function MarketplaceStore({ courses }) {
  
  const { requireInstall, web3, contract } = useWeb3()
  const { isConnecting, isWalletConnected, network, account } = useWalletInfo()
  const courseWalletInfo = { requireInstall, isConnecting, isWalletConnected, network, account }

  const [selectedCourse, setSelectedCourse] = useState(null)
  const onSelectedCourse = (course) => setSelectedCourse(course)
  const resetSelectedCourse = () => setSelectedCourse(null)

  const purchaseCourse = async ({ course, price }) => {
    const courseId = course._id.replace(/-/g, "")
    const courseIdHex = web3.utils.asciiToHex(courseId)
    const weiPrice = web3.utils.toWei(price)

    withToast(_purchaseCourse(courseIdHex, account.data, weiPrice))
  }

  const _purchaseCourse = async (courseIdHex, account, value) => {
    try {
      const result = await contract.methods.purchaseCourse(courseIdHex).send({from: account, value})
      return result
    } catch(error) {
      throw new Error(error.message)
    }
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