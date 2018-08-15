const Stringator = artifacts.require('Stringator');

contract('Stringator', async (accounts) => {
  const alice = accounts[0];

  let stringator;
  beforeEach(async () => {
    stringator = await Stringator.new({ from: alice });
  });

  it('works', async () => {
    initialValue = await stringator.memo();

    expect(initialValue).to.eq('');
  });

  describe("memo change'", async () => {
    it("works", async () => {
      await stringator.change("new memo");

      let result = await stringator.memo();
      expect(result).to.eq("new memo");
    });
  });

  it("length can be measured", async () => {
    await stringator.change("new memo");

    let result = await stringator.memoLength();
    expect(result.toNumber()).to.eq(7);
  });
});

