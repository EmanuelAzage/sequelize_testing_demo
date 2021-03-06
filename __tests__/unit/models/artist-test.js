const { expect } = require('chai');
const Artist = require('./../../../models/artist');


describe('artist', () => {
  describe('name', () => {
    it('should be at least 2 characters', async () => {
      try {
        let artist = new Artist({ name: 'a'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      }
    });

    it('should be at less than 11 characters', async () => {
      try {
        let artist = new Artist({ name: 'aaaaaabbbcc'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      }
    });

    it('should contain only letters', async () => {
      try {
        let artist = new Artist({ name: '23'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Name must only contain letters');
      }
    });
  });
});
