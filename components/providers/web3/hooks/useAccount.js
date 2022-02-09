/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0x07a8c5103fC59e260d0dd0333309C5224FA9F546": true
}

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0] ?? null
    }
  )

  useEffect(() => {
    const setAccountListener = () => {
      provider.on("accountsChanged", (accounts) => {
        mutate(accounts[0] ?? null)
      })
    }

    provider && setAccountListener()

  }, [provider])

  return {
    account: { 
      data, 
      isAdmin: (data && adminAddresses[data]) ?? false,
      mutate, 
      ...rest 
    }
  }
}