import useSWR from "swr"
import { normalizeOwnedCourse } from "@utils/normalize"

export const handler = (web3, contract) => (course, account, isWalletConnected) => {
  const { data, error, isValidating, ...rest } = useSWR(() =>
    (web3 && contract && isWalletConnected) ? `web3/ownedCourse/${account}/${course._id}` : null,
    async () => {
      const courseId = course._id.replace(/-/g, "")
      const courseIdHex = web3.utils.asciiToHex(courseId)
      const courseHash = web3.utils.soliditySha3({type: "bytes32", value: courseIdHex}, {type: "address", value: account})
      const ownedCourse = await contract.methods.getCourseByHash(courseHash).call()

      if (ownedCourse.owner === "0x0000000000000000000000000000000000000000") {
        return null
      }

      return normalizeOwnedCourse(web3)(course, ownedCourse)
    }
  )

  return {
    data,
    error,
    isValidating,
    ...rest
  }
}