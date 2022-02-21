/* eslint-disable react-hooks/exhaustive-deps */
import useSWR from "swr"
import { useCallback, useEffect } from "react"


const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache Local Network"
}

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3, provider) => () => {
  const { data, error, mutate, ...rest } = useSWR(() => 
    web3 ? "web3/network" : null,
    async () => {
      const chainId = await web3.eth.getChainId()
      const currentNetwork = NETWORKS[chainId]
      return currentNetwork
    }
  )

  useEffect(() => {
    const mutator = (chainId) => mutate(NETWORKS[parseInt(chainId, 16)])
    provider?.on("chainChanged", mutator)

    return () => {
      provider?.removeListener("chainChanged", mutator)
    }

  }, [provider])
  
  const switchToTargetNetwork = useCallback(async () => {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: "0x539"}],
    });
  }, [provider])

  return {
    data,
    error,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    switchToTargetNetwork,
    ...rest
  }
}