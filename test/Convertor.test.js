const Convertor = artifacts.require('Convertor');

contract('Convertor', async (accounts) => {
  const alice = accounts[0];

  let convertor;

  beforeEach(async () => {
    convertor = await Convertor.new({ from: alice });
  });

  describe("#szbo", async () => {
    it("works", async () => {
      result = await convertor.szbo();

      expect(result.toNumber()).to.eq(100000000000000);
    });
  });

  describe("#blk", async () => {
    it("works", async () => {
      result = await convertor.blk();

      expect(result.toNumber()).to.eq(3);
    });
  });

  describe("#gasLimit", async () => {
    it("works", async () => {
      result = await convertor.gasLimit();

      expect(result.toNumber()).to.eq(6721975);
    });
  });

  describe("#kekkak", async () => {
    it("works", async () => {
      result = await convertor.kekkak('hi world');

      expect(result).to.eq('0x41d1912757c5eb38ddffbb7255e75ebfd1bbbfcd80666b1ca18b79d4fdec2e7e');
    });
  });

  describe("#isEven", async () => {
    it("works", async () => {
      result = await convertor.isEven(2);

      expect(result).to.eq(true);
    });
  });
});
