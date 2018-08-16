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

    let result = await stringator.length();
    expect(result.toNumber()).to.eq(8);
  });

  it("cyrilic string length", async () => {
    let result = await stringator.bytesLengthIsNotReliable();
    expect(result.toNumber()).to.eq(2);
  });


  describe("#clear", async () => {
    it("clears string", async () => {
      await stringator.change("new memo");
      await stringator.clear();

      let result = await stringator.length();

      expect(result.toNumber()).to.eq(0);
    });
  });

});
