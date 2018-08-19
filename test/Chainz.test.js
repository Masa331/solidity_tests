const TheEnd = artifacts.require('TheEnd');

contract('TheEnd.test.js', async (accounts) => {
  const alice = accounts[0];

  let end;

  beforeEach(async () => {
    end = await TheEnd.new(21, { from: alice });
  });

  describe("initial state", async () => {
    it("works", async () => {
      await end.increment();
      result = await end.counter();

      expect(result.toNumber()).to.eq(7);
    });
  });

  describe("what", async () => {
    it("works", async () => {
      result = await end.memo();

      expect(result.toNumber()).to.eq(84);
    });
  });
});
