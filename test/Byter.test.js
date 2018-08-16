const Byter = artifacts.require('Byter');

contract('Byter', async (accounts) => {
  const alice = accounts[0];

  let byter;
  beforeEach(async () => {
    byter = await Byter.new({ from: alice });
  });

  describe('#getter', async () => {
    it('returns bytes', async () => {
      result = await byter.myBytes();

      expect(result).to.eq('0x');
    });
  });

  describe('#setBytes', async () => {
    it('changes bytes', async () => {
      await byter.setBytes('257');

      result = await byter.myBytes();

      expect(result).to.eq('0x10');
    });

    it('changes bytes', async () => {
      await byter.setBytes('0x1010');

      result = await byter.myBytes();

      expect(result).to.eq('0x1010');
    });
  });

  describe('#getSecond', async () => {
    it('returns second byte', async () => {
      await byter.setBytes("0x1101ff");

      result = await byter.getSecond();

      expect(result).to.eq('0x01');
    });
  });

  describe('#compare', async () => {
    it('compares input with myBytes', async () => {
      await byter.setBytes('273');

      result = await byter.compare('273');

      expect(result).to.eq(true);
    });
  });

  describe('#append', async () => {
    it('appends byte to myBytes', async () => {
      await byter.setBytes('0x11ff');

      await byter.append("0xcc");
      result = await byter.myBytes();

      expect(result).to.eq("0x11ffcc");
    });
  });
});
