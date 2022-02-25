import { createContext, useContext, useEffect, useMemo, useState } from "react"
import Web3 from "web3"
import detectEthereumProvider from "@metamask/detect-provider"
import { setupHooks } from "./hooks/setupHooks"
import { loadContract } from "@utils/loadContract"

const Web3Context = createContext({})

export default function Web3Provider({ children }) {
  
  const [web3Api, setWeb3Api] = useState({ provider: null, web3: null, contract: null, isLoading: true })
  
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)
        const contract = await loadContract("CourseMarketplace", web3)
        setWeb3Api({provider, web3, contract, isLoading: false})
      } else {
        setWeb3Api((web3Api) => ({ ...web3Api, isLoading: false }))
        console.error("Please, install Metamask")
      }
    }

    loadProvider()
  }, [])
 
  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading, contract } = web3Api
    return {
      ...web3Api,
      requireInstall: (!isLoading && !web3),
      hooks: setupHooks(web3, provider, contract),
      connect: async () => {
        if (provider) {
          // await provider.request({method: 'eth_requestAccounts',})
          await web3Api.web3.eth.requestAccounts()
        }
      }
    }
  }, [web3Api])
  
  return (
    <Web3Context.Provider value={_web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}

export function useHooks(cb) {
  const { hooks } = useWeb3()
  return cb(hooks)
}