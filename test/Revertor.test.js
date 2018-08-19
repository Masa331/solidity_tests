const Revertor = artifacts.require('Revertor');

contract('Revertor', async (accounts) => {
  const alice = accounts[0];

  let revertor;

  beforeEach(async () => {
    revertor = await Revertor.new({ from: alice });
  });

  describe("#fail", async () => {
    it("works", async () => {
      try {
        await revertor.fail();
        assert(false)
      } catch {
        assert(true)
      }
    });
  });

  describe("#failwithMessage", async () => {
    it("works", async () => {
      try {
        await revertor.failWithMessage();
        assert(false);
      } catch(e) {
        assert(true);
      }
    });
  });
});
