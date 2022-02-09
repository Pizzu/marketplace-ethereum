import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useRouter } from "next/router"

export default function Navbar() {

  const { isWeb3Loaded, isLoading, connect } = useWeb3()
  const router = useRouter()

  return (
    <header>
      <div className="container pt-8 pb-0">
        <nav className="flex items-center justify-between">
          <Link href="/" passHref>
            <button className="text-white text-xl font-bold">Marketplace ETH</button>
          </Link>
          <div className="grid grid-flow-col auto-cols-max gap-7">
            <Link href="/marketplace" passHref>
              <button className="text-white text-lg font-bold">Marketplace</button>
            </Link>
            <Link href="/blog" passHref>
              <button className="text-white text-lg font-bold">Blog</button>
            </Link>
            {isLoading ?
              <Button isDisabled={ true } className="px-4 py-3 text-white border-2 border-white">Connecting...</Button>
              : isWeb3Loaded ?
                <Button onClick={ connect } className="px-4 py-3 text-white border-2 border-white">Connect Wallet</Button>
                :
                <Button onClick={ () => router.push("https://metamask.io/download/") } className="px-4 py-3 text-white border-2 border-white">Install Metamask</Button>
            }
          </div>
        </nav>
      </div>
    </header>
  )
}