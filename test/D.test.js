const D = artifacts.require('D');
const E = artifacts.require('E');

contract('Addressar', async (accounts) => {
  const alice = accounts[0];

  let e, d;

  beforeEach(async () => {
    e = await E.new({ from: alice });
    d = await D.new({ from: alice });
  });

  describe('#delc', async () => {
    it('calls arbitrary func on addr', async () => {
      await d.delegatecallSetN(e.address, 7);

      result = await d.n();

      eresult = await e.n();

      expect(result.toNumber()).to.eq(7);
      expect(eresult.toNumber()).to.eq(0);
    });
  });
});
