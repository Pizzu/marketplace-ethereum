import { MarketplaceHero, MarketplaceOrders } from "@components/ui/marketplace"
import { sanityClient } from "@lib/studio/sanity"
import { coursesQuery } from "@lib/studio/query"

export default function OwnedCoursesPage({ courses }) {
  return (
    <>
      <MarketplaceHero />
      <MarketplaceOrders courses={courses} />
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