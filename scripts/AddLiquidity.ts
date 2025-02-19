import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const main = async () => {
    
    const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
   
  
    const RouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
  
    const theAddressIFoundWithWETHAndDAI = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";

  
    await helpers.impersonateAccount(theAddressIFoundWithWETHAndDAI);
    const impersonatedSigner = await ethers.getSigner(theAddressIFoundWithWETHAndDAI);

    

}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });