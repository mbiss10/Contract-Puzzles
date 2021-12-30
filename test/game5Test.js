const { assert } = require("chai");

describe("Game5", function () {
  it("should be a winner", async function () {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    let signers = await ethers.getSigners();
    for (const signer of signers) {
      try {
        console.log(signer.address);
        await game.connect(signer).win();
        break;
      } catch (err) {
        continue;
      }
    }

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
