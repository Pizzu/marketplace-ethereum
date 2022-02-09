import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { Button } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3/useAccount"

export default function Navbar() {

  const { web3, isLoading, connect } = useWeb3()
  const { account } = useAccount()

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
              : web3 ?
                account.data ?
                  <Button className="px-4 py-3 text-white border-2 border-white">Connected {account.isAdmin && "as Admin"}</Button>
                  :
                  <Button onClick={ connect } className="px-4 py-3 text-white border-2 border-white">Connect Wallet</Button>
                :
                <Button onClick={ () => window.open("https://metamask.io/download/", "_blank") } className="px-4 py-3 text-white border-2 border-white">Install Metamask</Button>
            }
          </div>
        </nav>
      </div>
    </header>
  )
}