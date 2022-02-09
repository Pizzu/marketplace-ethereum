import { EthRates } from "@components/ui/web3"
import { useAccount } from "@components/hooks/web3/useAccount"

export default function WalletBar() {

  const { account } = useAccount()

  return (
      <div className="relative ml-auto max-w-xl">
        <div className="backdrop-blur-[80px] bg-black/20 grid grid-flow-row gap-6 px-4 py-6 rounded-md border-2 border-white/40">
          <EthRates />
          <div>
            <p className="text-xl font-bold text-white/70 mb-2">Your Address</p>
            <p className="text-xl text-white">{ account.data ? account.data : "Not connected" }</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white/70 mb-2">Currently on</p>
            <p className="text-xl text-white">Ropsten Test Network</p>
          </div>
        </div>
        <div className="absolute w-80 h-80 -bottom-4 -left-4 -z-10 rounded-full bg-primary blur-[160px] animate-rainbow"></div>
      </div>
  )
}