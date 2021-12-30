const { assert } = require("chai");

describe("Game3", function () {
  it("should be a winner", async function () {
    const Game = await ethers.getContractFactory("Game3");
    const game = await Game.deploy();
    await game.deployed();

    // hardhat will create 10 accounts for you by default
    // you can get one of this accounts with ethers.provider.getSigner
    // and passing in the zero-based indexed of the signer you want
    let addresses = [];
    const signer1 = ethers.provider.getSigner(0);
    addresses.push(await signer1.getAddress());
    const signer2 = ethers.provider.getSigner(1);
    addresses.push(await signer2.getAddress());
    const signer3 = ethers.provider.getSigner(2);
    addresses.push(await signer3.getAddress());

    // to call a contract as a signer you can use contract.connect
    await game.connect(signer1).buy({ value: "2" });
    await game.connect(signer2).buy({ value: "3" });
    await game.connect(signer3).buy({ value: "1" });

    await game.win(addresses[0], addresses[1], addresses[2]);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
