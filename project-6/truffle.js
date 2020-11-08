require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider")
const testnet_private_key = process.env.ETH_PRIVATE_KEY
const http_provider = process.env.HTTP_PROVIDER

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      network_id: 4,
      gas: 7897368,
      provider: new HDWalletProvider(testnet_private_key, http_provider)
    },
  }
};