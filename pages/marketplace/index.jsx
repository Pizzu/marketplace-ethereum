import { MarketplaceHero } from "@components/ui/marketplace"
import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceHeader } from "@components/ui/marketplace"
import { sanityClient } from "@lib/studio/sanity"
import { coursesQuery } from "@lib/studio/query"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"

export default function Marketplace({ courses }) {

  const { requireInstall } = useWeb3()
  const { isConnecting, isWalletConnected, network } = useWalletInfo()
  const courseWalletInfo = { requireInstall, isConnecting, isWalletConnected, network }

  return(
    <>
      <MarketplaceHero />
      <section className="relative">
        <div className="container">
          <MarketplaceHeader />
          <CourseList courses={courses}>
            {
              (course, index) => <CourseCard key={course._id} course={course} index={index} courseWalletInfo={courseWalletInfo}/>
            }
          </CourseList>
        </div>
      </section>
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