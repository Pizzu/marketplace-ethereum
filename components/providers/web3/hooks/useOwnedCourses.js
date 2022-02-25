import useSWR from "swr"

export const handler = (web3, contract) => (courses, account) => {
  const { data, error, isValidating, ...rest } = useSWR(() =>
    (web3 && contract && account) ? `web3/ownedCourses/${account}` : null,
    async () => {
      const ownedCourses = []
      for (const course of courses) {
        const courseId = course._id.replace(/-/g, "")
        const courseIdHex = web3.utils.asciiToHex(courseId)
        const courseHash = web3.utils.soliditySha3({type: "bytes32", value: courseIdHex}, {type: "address", value: account})
        const ownedCourse = await contract.methods.getCourseByHash(courseHash).call()

        if (ownedCourse.owner != "0x0000000000000000000000000000000000000000") {
          ownedCourses.push(ownedCourse)
        }
      }

      return ownedCourses
    }
  )

  return {
    data,
    error,
    isValidating,
    ...rest
  }
}