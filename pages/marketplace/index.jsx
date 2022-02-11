import { MarketplaceHero } from "@components/ui/marketplace"
import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceHeader } from "@components/ui/marketplace"
import { sanityClient } from "@lib/studio/sanity"
import { coursesQuery } from "@lib/studio/query"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"

export default function Marketplace({ courses }) {

  const { requireInstall } = useWeb3()
  const { isConnecting, isWalletConnected, network } = useWalletInfo()
  const courseWalletInfo = { requireInstall, isConnecting, isWalletConnected, network }

  const [selectedCourse, setSelectedCourse] = useState(null)
  const onSelectedCourse = (course) => setSelectedCourse(course)
  const resetSelectedCourse = () => setSelectedCourse(null)


  return (
    <>
      <MarketplaceHero />
      <section className="relative">
        <div className="container">
          <MarketplaceHeader />
          <CourseList courses={courses}>
            {
              (course, index) => <CourseCard key={course._id} course={course} index={index} courseWalletInfo={courseWalletInfo} onSelectedCourse={onSelectedCourse} />
            }
          </CourseList>
        </div>
      </section>
      {
        selectedCourse &&
        <OrderModal course={selectedCourse} onClose={resetSelectedCourse} />
      }

    </>
  )
}

export async function getServerSideProps(context) {
  const courses = await sanityClient.fetch(coursesQuery)

  return {
    props: {
      courses
    }
  }
}