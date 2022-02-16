import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@lib/studio/sanity"
import { borderVariants, backgroundVariants } from "@lib/utils/variations"
import { Button, Loader } from "@components/ui/common"

export default function Card({ course, index, courseWalletInfo, onSelectedCourse }) {

  const { requireInstall, isConnecting, isWalletConnected, network } = courseWalletInfo

  return (
    <div className={`${index % 2 == 0 ? "pl-6" : "pr-6"} relative mb-14`}>
      <div className={`relative w-[26rem] h-[32rem] ${index % 2 == 0 ? "ml-0" : "ml-auto"}`}>
        <div className={`absolute w-full h-full ${index % 2 == 0 ? "bottom-2 -left-2" : "bottom-2 left-2"}  border-2 ${borderVariants[course.color]} rounded-sm`}></div>
        <div className={`absolute w-full h-full ${index % 2 == 0 ? "bottom-4 -left-4" : "bottom-4 left-4"}  border-2 ${borderVariants[course.color]} rounded-sm`}></div>
        <div className={`absolute w-full h-full ${index % 2 == 0 ? "bottom-6 -left-6" : "bottom-6 left-6"}  border-2 ${borderVariants[course.color]} rounded-sm`}></div>
        <Image className="rounded-sm" src={urlFor(course.coverImage).url()} alt="hero-image" layout="fill" objectFit="cover" />
        <div className={`absolute w-60 h-60 -bottom-4 -left-4 -z-10 rounded-full ${backgroundVariants[course.color]} blur-[120px]`}></div>
      </div>
      <div className="absolute max-w-lg -bottom-12 right-0 backdrop-blur-[80px] bg-black/20 grid grid-flow-row gap-6 items-stretch px-4 py-6 rounded-md border-2 border-white/40">
        <div className="grid grid-flow-col auto-cols-max gap-4 items-center">
          <p className="text-base font-bold text-white">{course.type}</p>
          <span className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">Status</span>
        </div>
        <div>
          <Link href={`/courses/${course.slug.current}`} passHref>
            <a className="text-xl font-bold text-white mb-2">{course.title}</a>
          </Link>
          <p className="text-xl text-white/75">{course.description.substring(0, 75)}...</p>
        </div>
        <div>
          {requireInstall ?
            <div>
              <Button onClick={() => window.open("https://metamask.io/download/", "_blank")} className={`${backgroundVariants[course.color]} text-white`}>Install Metamask</Button>
              <p className="text-lg text-primary font-bold mt-3">You need to download metamask in order to purchase this course</p>
            </div>
            :
            isConnecting ?
              <Button isDisabled={true} className={`${backgroundVariants[course.color]} text-white`}><Loader>Loading...</Loader></Button>
              :
              isWalletConnected ?
                <Button onClick={() => onSelectedCourse(course)} className={`${backgroundVariants[course.color]} text-white`}>Buy Course</Button>
                :
                <div>
                  <Button isDisabled={true} className={`${backgroundVariants[course.color]} text-white`}>Buy Course</Button>
                  <p className="text-lg text-primary font-bold mt-3">Make sure you are connected to the {network.target} and you are logged into your metamask account</p>
                </div>
          }
        </div>
      </div>
    </div>
  )
}