import { sanityClient } from "@lib/sanity";
import { courseQuery, coursesPath } from "@lib/query";
import { CourseHero, CourseKeyPoints, Curriculum } from "@components/ui/course";

export default function CoursePage({ course }) {

  return (
    <>
      <CourseHero course={course} />
      <CourseKeyPoints />
      <Curriculum />
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