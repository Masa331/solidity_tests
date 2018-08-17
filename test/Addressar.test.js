const Addressar = artifacts.require('Addressar');
const Warehouse = artifacts.require('Warehouse');

contract('Addressar', async (accounts) => {
  const alice = accounts[0];

  let address, address2, warehouse;

  beforeEach(async () => {
    address = await Addressar.new({ from: alice, value: 10 });
    address2 = await Addressar.new({ from: alice });
    warehouse = await Warehouse.new({ from: alice });
  });

  describe('#getter', async () => {
    it('returns bytes', async () => {
      result = await address.addr();

      expect(result).to.eq('0x0000000000000000000000000000000000000000');
    });
  });

  describe('#balance', async () => {
    it('returns balance', async () => {
      await address.setAddr('0x72bcfa6932feacd91cb2ea44b0731ed8ae04d0d3');

      result = await address.balance();
      expect(result.toNumber()).to.eq(0);
    });
  });

  describe('#balance', async () => {
    it('returns balance', async () => {
      await address.setAddr(accounts[1]);

      result = await address.balance();

      expect(web3.fromWei(result.toNumber())).to.eq('100');
    });
  });

  describe('#thisBalance', async () => {
    it('returns balance of this contract', async () => {
      await web3.eth.sendTransaction({ from: accounts[0], to: address.address, value: 1 });

      result = await address.thisBalance();

      expect(result.toNumber()).to.eq(11);
    });
  });

  describe('#trans', async () => {
    it('transfers funds', async () => {
      await address.trans(address2.address, 5);

      result = await address2.thisBalance();

      expect(result.toNumber()).to.eq(5);
    });
  });

  describe('#sendr', async () => {
    it("sends funds and doesn't throw on errorr", async () => {
      await address.sendr(address2.address, 5);

      result = await address2.thisBalance();

      expect(result.toNumber()).to.eq(5);
    });
  });

  describe('#calr', async () => {
    it('calls arbitrary func on addr', async () => {
      await address.setAddr(warehouse.address);

      await address.calr(7);

      result = await warehouse.storageInt();

      expect(result.toNumber()).to.eq(7);
    });
  });
});
