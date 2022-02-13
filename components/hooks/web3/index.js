import { useHooks } from "@components/providers/web3";


const enhanceHooks = (hookRes) => {
  return {
    ...hookRes,
    isInitialized: !!(hookRes.data || hookRes.error)
  }
}

export const useAccount = () => {
  const accountHookRes = enhanceHooks(useHooks(hooks => hooks.useAccount)())
  return {
    account: accountHookRes
  }
}

export const useNetwork = () => {
  const networkHookRes = enhanceHooks(useHooks(hooks => hooks.useNetwork)())
  return {
    network: networkHookRes
  }
}

export const useWalletInfo = () => {
  const { account } = useAccount()
  const { network } = useNetwork()

  const isConnecting = !account.isInitialized && !network.isInitializeds
  // We consider our wallet valid when it has an address and the network is set to the supported one
  const isWalletConnected = account.data && network.isSupported

  return {
    account,
    network,
    isConnecting,
    isWalletConnected
  }
}