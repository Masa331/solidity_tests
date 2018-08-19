const Car = artifacts.require('Car');

contract('Car', async (accounts) => {
  const alice = accounts[0];

  let car;

  beforeEach(async () => {
    car = await Car.new({ from: alice });
  });

  describe("#fail", async () => {
    it("works", async () => {
      result = await car.fortyTwo();

      expect(result.toNumber()).to.eq(42);
    });
  });

  describe("#wheelsAndWindows", async () => {
    it("works", async () => {
      result = await car.wheelsAndWindows();

      expect(result.toNumber()).to.eq(8);
    });
  });
});
