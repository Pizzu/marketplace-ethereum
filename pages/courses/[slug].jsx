import { sanityClient } from "@lib/studio/sanity";
import { courseQuery, coursesPath } from "@lib/studio/query";
import { CourseHero, CourseKeyPoints, CourseCurriculum } from "@components/ui/course";

export default function CoursePage({ course }) {
  return (
    <>
      <CourseHero course={course} />
      <CourseKeyPoints skills={course.skills} color={course.color} />
      <CourseCurriculum lectures={course.lectures} color={course.color} />
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