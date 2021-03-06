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

export const useOwnedCourses = (courses, account, isWalletConnected) => {
  const ownedCoursesRes = enhanceHooks(useHooks(hooks => hooks.useOwnedCourses)(courses, account, isWalletConnected))
  return {
    ownedCourses: ownedCoursesRes
  }
}

export const useOwnedCourse = (course, account, isWalletConnected) => {
  const ownedCourseRes = enhanceHooks(useHooks(hooks => hooks.useOwnedCourse)(course, account, isWalletConnected))
  return {
    ownedCourse: ownedCourseRes
  }
}

export const useWalletInfo = () => {
  const { account } = useAccount()
  const { network } = useNetwork()

  const isConnecting = !account.isInitialized && !network.isInitialized
  // We consider our wallet valid when it has an address and the network is set to the supported one
  const isWalletConnected = account.data && network.isSupported

  return {
    account,
    network,
    isConnecting,
    isWalletConnected
  }
}