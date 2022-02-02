import Link from "next/link"

export default function Navbar() {
  return (
    <header>
      <div className="container pt-8 pb-0">
        <nav className="flex items-center justify-between">
          <Link href="/" passHref>
            <button className="text-white text-xl font-bold">Marketplace ETH</button>
          </Link>
          <div className="grid grid-flow-col auto-cols-max gap-7">
            <Link href="/course" passHref>
              <button className="text-white text-lg font-bold">Marketplace</button>
            </Link>
            <Link href="/blog" passHref>
              <button className="text-white text-lg font-bold">Blog</button>
            </Link>
            <button className="bg-primary text-white font-bold px-4 py-3 rounded-md">Connect Wallet</button>
          </div>
        </nav>
      </div>
    </header>
  )
}