import { shadowVariants, backgroundVariants } from "@lib/utils/variations"

export default function Curriculum({ lectures, locked=true, color }) {
  return (
    <section>
      <div className="container px-60">
        <div className={`grid grid-cols-1 divide-white/40 divide-y backdrop-blur-[80px] py-6 last:pb-0 bg-black/20 rounded-md border-2 border-white/40 shadow-lg ${shadowVariants[color]}`}>
          <div className="px-8 grid grid-cols-2 pb-4">
            <h4 className="font-bold text-xl text-white/80">
              Section
            </h4>
            <h4 className="font-bold text-xl text-white/80">
              Status
            </h4>
          </div>
          {lectures.map((lecture, index) => (
            <div key={index} className="px-8 py-6 grid grid-cols-2">
              <h4 className="font-bold text-xl text-white">
                {lecture}
              </h4>
              <div className="flex justify-between">
                <h4 className="font-semibold text-lg text-red-800 py-1 px-4 bg-red-400 rounded-full">
                  { locked ? "Locked" : "Unlocked" }
                </h4>
                <button className={`font-semibold text-lg text-white py-1 px-4 ${backgroundVariants[color]} rounded-full`}>
                  { locked ? "Get Access" : "Play" }
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}