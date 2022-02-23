export const loadContract = async (contractName, web3) => {
  const res = await fetch(`/contracts/${contractName}.json`)
  const Artifact = await res.json()
  let contract = null

  try {
    contract = new web3.eth.Contract(Artifact.abi, Artifact.networks[process.env.NEXT_PUBLIC_NETWORK_ID].address)
  } catch {
    console.log(`Contract ${contractName} cannot be loaded`)
  }

  return contract
}