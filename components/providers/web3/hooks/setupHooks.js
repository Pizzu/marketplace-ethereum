import { handler as createUseAccount } from "./useAccount"
import { handler as createUseNetwork } from "./useNetwork"

export const setupHooks = (web3, provider) => {
    return {
        useAccount: createUseAccount(web3, provider),
        useNetwork: createUseNetwork(web3, provider)
    }
}