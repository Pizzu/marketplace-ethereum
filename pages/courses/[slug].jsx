import { sanityClient } from "@lib/studio/sanity";
import { courseQuery, coursesPath } from "@lib/studio/query";
import { CourseHero, CourseKeyPoints, CourseCurriculum } from "@components/ui/course";
import { useOwnedCourse, useWalletInfo } from "@components/hooks/web3";

export default function CoursePage({ course }) {

  const { isWalletConnected, account } = useWalletInfo()
  const { ownedCourse } = useOwnedCourse(course, account.data, isWalletConnected)

  return (
    <>
      <CourseHero course={course} />
      <CourseKeyPoints skills={course.skills} color={course.color} />
      <CourseCurriculum lectures={course.lectures} color={course.color} locked={ownedCourse.data ? false : true} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  
  const course = await sanityClient.fetch(courseQuery, { slug })

  if (!course) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      course,
      revalidate: 3000
    }
  }
} 

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(coursesPath)

  return {
    paths,
    fallback: "blocking"
  }
}