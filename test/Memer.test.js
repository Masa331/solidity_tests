const Memer = artifacts.require('Memer');
const Memo = artifacts.require('Memo');

contract('Memer', async (accounts) => {
  const alice = accounts[0];

  let memer, memo;

  beforeEach(async () => {
    memer = await Memer.new({ from: alice });
  });

  describe("initial length", async () => {
    it("works", async () => {
      result = await memer.memoCount();

      expect(result.toNumber()).to.eq(0);
    });
  });

  describe("createMemo", async () => {
    it("works", async () => {
      await memer.createMemo("heloo wiorld!");

      result = await memer.memoCount();
      memoAdr = await memer.memos(0);

      memo = await Memo.at(memoAdr);
      memoText = await memo.memo();

      expect(result.toNumber()).to.eq(1);
      expect(memoText).to.eq("heloo wiorld!");
    });
  });

  describe("getFirstMemo", async () => {
    it("works", async () => {
      await memer.createMemo("heloo wiorld!");

      result = await memer.getFirstMemo();

      expect(result).to.eq("heloo wiorld!");
    });
  });

  describe("getTwoMemos", async () => {
    it("works", async () => {
      await memer.createMemo("heloo wiorld!");
      await memer.createMemo("buy milk");

      result = await memer.getTwoMemos();

      expect(result[0]).to.eq('heloo wiorld!');
      expect(result[1]).to.eq('buy milk');
    });
  });
});
