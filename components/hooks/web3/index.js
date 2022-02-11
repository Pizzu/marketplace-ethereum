import { useHooks } from "@components/providers/web3";

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


const enhanceHooks = (hookRes) => {
  return {
    ...hookRes,
    isInitialized: (hookRes.data || hookRes.error) ? true : false
  }
}