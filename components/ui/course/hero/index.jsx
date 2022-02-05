import Image from "next/image"
import { urlFor } from "@lib/studio/sanity"
import { borderVariants, backgroundVariants } from "@lib/utils/variations"
export default function Hero({ course }) {
  return (
    <section className="relative">
      <div className={`absolute w-80 h-80 top-20 -left-36 -z-10 rounded-full ${backgroundVariants[course.color]} blur-[150px]`}></div>
      <div className={`absolute w-3 h-3 bottom-32 left-12 -z-10 rounded-full ${backgroundVariants[course.color]} blur-[6px]`}></div>
      <div className={`absolute w-3 h-3 bottom-52 left-[33rem] -z-10 rounded-full ${backgroundVariants[course.color]} blur-[6px]`}></div>
      <div className={`absolute w-3 h-3 top-[22rem] left-[41rem] -z-10 rounded-full ${backgroundVariants[course.color]} blur-[4px]`}></div>
      <div className={`absolute w-3 h-3 top-[28rem] left-[52rem] -z-10 rounded-full ${backgroundVariants[course.color]} blur-[4px]`}></div>
      <div className={`absolute w-2 h-2 top-[10rem] left-[24rem] -z-10 rounded-full ${backgroundVariants[course.color]} blur-[4px]`}></div>
      <div className="container pt-40">
        <div className="grid grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-5">{course.title}</h1>
            <p className="text-lg max-w-sm mb-8">{course.description}</p>
          </div>
          <div className="pr-6 relative">
            <div className="relative w-[26rem] h-[32rem] ml-auto">
              <div className={`absolute w-full h-full bottom-2 left-2 border-2 ${borderVariants[course.color]} rounded-sm`}></div>
              <div className={`absolute w-full h-full bottom-4 left-4 border-2 ${borderVariants[course.color]} rounded-sm`}></div>
              <div className={`absolute w-full h-full bottom-6 left-6 border-2 ${borderVariants[course.color]} rounded-sm`}></div>
              <Image className="rounded-sm" src={urlFor(course.coverImage).url()} alt="hero-image" layout="fill" objectFit="cover" />
              <div className={`absolute w-80 h-80 -bottom-4 -left-4 -z-10 rounded-full ${backgroundVariants[course.color]} blur-[120px]`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}