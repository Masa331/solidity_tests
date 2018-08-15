const Warehouse = artifacts.require('Warehouse');

contract('Warehouse', async (accounts) => {
  const alice = accounts[0];

  let warehouse;
  beforeEach(async () => {
    warehouse = await Warehouse.new({ from: alice });
  });

  it('works', async () => {
    initialValue = await warehouse.storageInt();

    expect(initialValue.toNumber()).to.eq(0);
  });

  describe("addition of 1'", async () => {
    it("adds just one", async () => {
      await warehouse.add(1);
      await warehouse.add(1);

      let result = await warehouse.storageInt();
      expect(result.toNumber()).to.eq(2);
    });
  });
});

