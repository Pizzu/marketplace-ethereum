import { useEthPrice } from "@components/hooks/useEthPrice"

export default function EthRates() {

  const { eth } = useEthPrice()

  return (
    <>
      <div>
        <p className="text-xl font-bold text-white/70 mb-2">Current Eth Price</p>
        <p className="text-xl text-white">${eth.data}</p>
      </div>
      <div>
        <p className="text-xl font-bold text-white/70 mb-2">Course Price</p>
        <p className="text-xl text-white">$15</p>
      </div>
    </>
  )
}