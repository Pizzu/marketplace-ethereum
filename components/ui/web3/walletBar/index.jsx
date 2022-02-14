import { EthRates } from "@components/ui/web3"
import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button } from "@components/ui/common"

export default function WalletBar() {

  const { requireInstall } = useWeb3()
  const { account, network } = useWalletInfo()

  return (
    <div className="relative ml-auto max-w-xl">
      <div className="backdrop-blur-[80px] bg-black/20 grid grid-flow-row gap-6 px-4 py-6 rounded-md border-2 border-white/40">
        <EthRates />
        <div>
          <p className="text-xl font-bold text-white/70 mb-2">Your Address</p>
          { account.isInitialized && (
              <p className="text-xl text-white">{account.data ? account.data : "Not connected"}</p>
            )
          }
        </div>
        <div>
          <p className="text-xl font-bold text-white/70 mb-2">Currently on</p>
          { network.isInitialized &&
            (
              network.isSupported ?
                <p className="text-xl text-white">{network.data}</p>
                :
                <div>
                  <p className="text-xl text-white">{network.data}</p>
                  <p className="text-xl text-primary font-bold mt-1 mb-3">Not supported network - Switch to {network.target}</p>
                  <Button onClick={network.switchToTargetNetwork} className={`bg-primary text-white`}>Switch to target network</Button>
                </div>
            )
          }
          { requireInstall &&
             <p className="text-xl text-white bg-primary p-5 font-bold mt-1 mb-3 rounded-md">Please Install Metamask</p>
          }
        </div>
      </div>
      <div className="absolute w-80 h-80 -bottom-4 -left-4 -z-10 rounded-full bg-primary blur-[160px] animate-rainbow"></div>
    </div>
  )
}