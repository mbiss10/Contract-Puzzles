require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      accounts: {
        count: 200,
        initialIndex: 19,
      },
    },
  },
};
