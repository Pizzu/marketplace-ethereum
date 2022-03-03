const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys = require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [keys.PRIVATE_ACCOUNT_KEY],
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
        }),
      network_id: "3",
      gas: 5500000, // Gas Limit, how much gas we are willing to spend
      gasPrice: 40000000000, // how much we are willing to spend per unit of gas
      confirmations: 2, // number of blocks to wait beetween deployment
      timeoutBlocks: 200 // number of blocks before deployment timeout
    }
  },
  compilers: {
    solc: {
      version: "0.8.10"
    }
  },
};