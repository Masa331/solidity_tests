const Enumz = artifacts.require('Enumz');

contract('Enumz', async (accounts) => {
  const alice = accounts[0];

  let enm;

  beforeEach(async () => {
    enm = await Enumz.new({ from: alice });
  });

  describe("setSad", async () => {
    it("sets sad mood", async () => {
      await enm.setSad();

      result = await enm.enm();

      expect(result.toNumber()).to.eq(1);
    });
  });
});
