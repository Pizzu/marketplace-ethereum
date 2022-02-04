import { MarketplaceHero } from "@components/ui/marketplace"
import { CourseList, CourseCard } from "@components/ui/course"
import { sanityClient } from "@lib/sanity"
import { coursesQuery } from "@lib/query"

export default function Marketplace({ courses, featuredCourse }) {
  return(
    <>
      <MarketplaceHero />
      <section className="relative">
        <div className="container">
          <h2 className="text-white font-bold text-5xl mb-24">Available courses</h2>
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