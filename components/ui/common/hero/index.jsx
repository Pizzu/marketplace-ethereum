import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute w-80 h-80 top-20 -left-36 -z-10 rounded-full bg-primary blur-[150px]"></div>
      <div className="absolute w-3 h-3 bottom-32 left-12 -z-10 rounded-full bg-primary/60 blur-[6px]"></div>
      <div className="absolute w-3 h-3 bottom-52 left-[33rem] -z-10 rounded-full bg-primary/60 blur-[6px]"></div>
      <div className="absolute w-3 h-3 top-[22rem] left-[41rem] -z-10 rounded-full bg-primary/60 blur-[4px]"></div>
      <div className="absolute w-3 h-3 top-[28rem] left-[52rem] -z-10 rounded-full bg-primary/60 blur-[4px]"></div>
      <div className="absolute w-2 h-2 top-[10rem] left-[24rem] -z-10 rounded-full bg-primary/60 blur-[4px]"></div>
      <div className="container pt-40">
        <div className="grid grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-7xl font-bold mb-5">Grow your career as a developer</h1>
            <p className="text-lg max-w-sm mb-8">Learn programming and web development the easy way! Get unlimited access to all of our courses</p>
            <div className="grid grid-flow-col auto-cols-max gap-6">
              <button className="bg-primary text-white font-bold px-6 py-4 rounded-md">Get Started Now</button>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-6 items-center mt-24">
              <div className="py-2">
                <p className="font-bold text-2xl">1526K</p>
                <span>Users</span>
              </div>
              <span className="w-0.5 bg-white h-full"></span>
              <div className="py-2">
                <p className="font-bold text-2xl">356K</p>
                <span>Artworks</span>
              </div>
              <span className="w-0.5 bg-white h-full"></span>
              <div className="py-2">
                <p className="font-bold text-2xl">150K</p>
                <span>Artists</span>
              </div>
            </div>
          </div>
          <div className="pr-6 relative">
            <div className="relative w-[26rem] h-[32rem] ml-auto">
              <div className="absolute w-full h-full bottom-2 left-2 border-2 border-primary/50 rounded-sm"></div>
              <div className="absolute w-full h-full bottom-4 left-4 border-2 border-primary/50 rounded-sm"></div>
              <div className="absolute w-full h-full bottom-6 left-6 border-2 border-primary/50 rounded-sm"></div>
              <Image className="rounded-sm" src="/hero.jpg" alt="hero-image" layout="fill" objectFit="cover" />
              <div className="absolute w-80 h-80 -bottom-4 -left-4 -z-10 rounded-full bg-primary blur-[120px]"></div>
            </div>
            <div className="absolute bottom-12 left-0 backdrop-blur-[80px] bg-white/20 grid grid-flow-col auto-cols-max gap-6 items-stretch px-4 py-6 rounded-md">
              <div>
                <p className="text-xl font-bold text-white/70 mb-2">Current Eth Price</p>
                <p className="text-xl text-white">$3058</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white/70 mb-2">Course Price</p>
                <p className="text-xl text-white">$15</p>
              </div>
              <div>
                <button className="bg-primary text-white font-bold h-full px-6 py-4 rounded-md">How to Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}