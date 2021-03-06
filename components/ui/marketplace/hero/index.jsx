import { WalletBar } from "@components/ui/web3"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute w-80 h-80 top-20 -left-36 -z-10 rounded-full bg-primary blur-[150px] animate-rainbow"></div>
      <div className="absolute w-3 h-3 bottom-32 left-12 -z-10 rounded-full bg-primary/60 blur-[6px] animate-rainbow"></div>
      <div className="absolute w-3 h-3 bottom-52 left-[33rem] -z-10 rounded-full bg-primary/60 blur-[6px] animate-rainbow"></div>
      <div className="absolute w-3 h-3 top-[22rem] left-[41rem] -z-10 rounded-full bg-primary/60 blur-[4px] animate-rainbow"></div>
      <div className="absolute w-3 h-3 top-[28rem] left-[52rem] -z-10 rounded-full bg-primary/60 blur-[4px] animate-rainbow"></div>
      <div className="absolute w-2 h-2 top-[10rem] left-[25rem] -z-10 rounded-full bg-primary/60 blur-[4px] animate-rainbow"></div>
      <div className="container pt-40">
        <div className="grid grid-cols-2 items-center">
          <div className="text-white">
            <h1 className="text-7xl font-bold mb-5">Grow your career as a developer</h1>
            <p className="text-lg max-w-sm mb-8">Learn programming and web development the easy way! Get unlimited access to all of our courses</p>
            <div className="grid grid-flow-col auto-cols-max gap-6">
            </div>
          </div>
          <div>
            <WalletBar />
          </div>
        </div>
      </div>
    </section>
  )
}