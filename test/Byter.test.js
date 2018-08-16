const Byter = artifacts.require('Byter');

contract('Byter', async (accounts) => {
  const alice = accounts[0];

  let byter;
  beforeEach(async () => {
    byter = await Byter.new({ from: alice });
  });

  describe('#getSecond', async () => {
    it('returns second element from bytes', async () => {
      result = await byter.getSecond();

      expect(result).to.eq(11);
    });
  });
});
