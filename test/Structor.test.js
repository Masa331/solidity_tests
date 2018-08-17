const Structor = artifacts.require('Structor');

contract('Structor', async (accounts) => {
  const alice = accounts[0];

  let structor;

  beforeEach(async () => {
    structor = await Structor.new({ from: alice });
  });

  describe('#getter', async () => {
    it('returns person', async () => {

      result = await structor.customer();

      name = result[0]
      age = result[1].toNumber()

      expect(name).to.eq('');
      expect(age).to.eq(0);
    });
  });

  describe('#setTom', async () => {
    it('sets person', async () => {
      await structor.setTom();
      result = await structor.customer();

      name = result[0]
      age = result[1].toNumber()

      expect(name).to.eq('Tom');
      expect(age).to.eq(12);
    });
  });

  describe('#setAndy', async () => {
    it('sets person', async () => {
      await structor.setAndy();
      result = await structor.customer();

      name = result[0]
      age = result[1].toNumber()

      expect(name).to.eq('Andy');
      expect(age).to.eq(24);
    });
  });

  describe('#setName', async () => {
    it('sets person', async () => {
      await structor.setName('Fred');
      result = await structor.customer();

      name = result[0]

      expect(name).to.eq('Fred');
    });
  });

  describe('#getName', async () => {
    it('returns person name', async () => {
      await structor.setName('Fred');

      result = await structor.getName();

      expect(name).to.eq('Fred');
    });
  });
});
