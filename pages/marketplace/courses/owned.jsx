import { MarketplaceHero, MarketplaceStore } from "@components/ui/marketplace"
import { sanityClient } from "@lib/studio/sanity"
import { coursesQuery } from "@lib/studio/query"

export default function OwnedCourses({ courses }) {
  return (
    <>
      <MarketplaceHero />
      <MarketplaceStore courses={courses} />
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