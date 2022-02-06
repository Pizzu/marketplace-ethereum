import Image from "next/image"
import { urlFor } from "@lib/studio/sanity"
import { shadowVariants } from "@lib/utils/variations"

export default function KeyPoints({ skills, color }) {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-x-11 gap-y-14">
          {skills.map(skill =>  
            <div key={skill._key} className={`relative grid grid-flow-col gap-8 px-6 py-4 backdrop-blur-[80px] bg-black/20 rounded-md border-2 border-white/40 shadow-lg ${shadowVariants[color]}`}>
              <div className="relative w-10 h-10">
                <Image className="invert" src={urlFor(skill.image).url()} alt="hero-image" layout="fill"/>
              </div>
              <div>
                <h3 className="text-white text-3xl mb-5">{skill.title}</h3>
                <p className="text-white/60 text-lg">{skill.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}