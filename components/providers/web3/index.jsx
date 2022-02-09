import { createContext, useContext, useEffect, useMemo, useState } from "react"
import Web3 from "web3"
import detectEthereumProvider from "@metamask/detect-provider"

const Web3Context = createContext({})

export default function Web3Provider({ children }) {

  const [web3Api, setWeb3Api] = useState({ provider: null, web3: null, contract: null, isLoading: true })
  
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      if (provider) {
        const web3 = new Web3(provider)
        setWeb3Api({provider, web3, contract: null, isLoading: false})
      } else {
        setWeb3Api((web3Api) => ({ ...web3Api, isLoading: false }))
        console.error("Please, install Metamask")
      }
    }

    loadProvider()
  }, [])
 
  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      isWeb3Loaded: web3Api.web3,
      connect: async () => {
        if (web3Api.provider) {
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