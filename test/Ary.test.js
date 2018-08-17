const Ary = artifacts.require('Ary');

contract('Ary', async (accounts) => {
  const alice = accounts[0];

  let ary;

  beforeEach(async () => {
    ary = await Ary.new({ from: alice });
  });

  describe('#getter', async () => {
    it('returns array', async () => {
      await ary.setAry();

      result = await ary.acumulator(0);

      expect(result.toNumber()).to.eq(1);
    });
  });

  describe('#length', async () => {
    it('returns array length', async () => {
      await ary.setAry();

      result = await ary.length();

      expect(result.toNumber()).to.eq(3);
    });
  });

  describe('#append', async () => {
    it('returns array length', async () => {
      await ary.setAry();
      await ary.append(3);

      result = await ary.length();

      expect(result.toNumber()).to.eq(4);
    });
  });

  describe('#secondElement', async () => {
    it('returns array length', async () => {
      await ary.setAry();

      result = await ary.secondElement();

      expect(result.toNumber()).to.eq(2);
    });
  });

  describe('#setMember', async () => {
    it('returns array length', async () => {
      await ary.setAry();

      result = await ary.fixedAc(1);

      expect(result.toNumber()).to.eq(6);
    });
  });
});
