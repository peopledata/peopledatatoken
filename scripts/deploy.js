const hre = require("hardhat");

async function main() {


  const PeopleDataToken = await hre.ethers.getContractFactory("PeopleDataToken");
  const PDT = await PeopleDataToken.deploy("1000000000000000000000000000");

  await PDT.deployed();

  console.log("Token deployed to:", PDT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });