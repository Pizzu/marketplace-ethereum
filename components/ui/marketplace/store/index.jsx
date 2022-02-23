import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceNavigation } from "@components/ui/marketplace"
import { OrderModal } from "@components/ui/order"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { useState } from "react"

export default function MarketplaceStore({ courses }) {
  
  const { requireInstall, web3, contract } = useWeb3()
  const { isConnecting, isWalletConnected, network, account } = useWalletInfo()
  const courseWalletInfo = { requireInstall, isConnecting, isWalletConnected, network }

  const [selectedCourse, setSelectedCourse] = useState(null)
  const onSelectedCourse = (course) => setSelectedCourse(course)
  const resetSelectedCourse = () => setSelectedCourse(null)

  const purchaseCourse = async ({ course, email, price }) => {
    const courseId = course._id.replace(/-/g, "")
    const courseIdHex = web3.utils.asciiToHex(courseId)
    const emailHash = web3.utils.sha3(email)
    const weiPrice = web3.utils.toWei(price)

    try {
      await contract.methods.purchaseCourse(courseIdHex, emailHash).send({from: account.data, value: weiPrice})
    } catch {
      console.log("Purcharse Course: Operation Failed")
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