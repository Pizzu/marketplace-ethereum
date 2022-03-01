import { handler as createUseAccount } from "./useAccount"
import { handler as createUseNetwork } from "./useNetwork"
import { handler as createOwnedCourses } from "./useOwnedCourses"
import { handler as createOwnedCourse } from "./useOwnedCourse"

export const setupHooks = (web3, provider, contract) => {
  return {
    useAccount: createUseAccount(web3, provider),
    useNetwork: createUseNetwork(web3, provider),
    useOwnedCourses: createOwnedCourses(web3, contract),
    useOwnedCourse: createOwnedCourse(web3, contract)
  }
}