/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0x8c3591334738ba86fc54577cca7155439b2121f9c2ff0348248ec180ea66342e": true
}

export const handler = (web3, provider) => () => {
  const { data, error, isValidating, mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      
      if (accounts.length === 0) {
        throw new Error("Cannot retrive account. Please connect account on Metamask")
      }

      return accounts[0]
    },
    { shouldRetryOnError: false }
  )

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0])
    provider?.on("accountsChanged", mutator)

    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }

  }, [provider])

  return {
    data, 
    error,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate, 
    isValidating,
    ...rest 
  }
}