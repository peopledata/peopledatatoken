require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-chai-matchers');
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",

  networks: {
    hardhat:{},
    goerli: {
      url: 'https://goerli.infura.io/v3/291a07fc83f8438a84bc72d86689978b',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
