import { MarketplaceHero } from "@components/ui/marketplace"
import { CourseList, CourseCard } from "@components/ui/course"
import { MarketplaceHeader } from "@components/ui/marketplace"
import { sanityClient } from "@lib/studio/sanity"
import { coursesQuery } from "@lib/studio/query"
import { useWeb3 } from "@components/providers"

export default function Marketplace({ courses }) {

  const data = useWeb3()
  console.log(data)
  return(
    <>
      <MarketplaceHero />
      <section className="relative">
        <div className="container">
          <MarketplaceHeader />
          <CourseList courses={courses}>
            {
              (course, index) => <CourseCard key={course._id} course={course} index={index}/>
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