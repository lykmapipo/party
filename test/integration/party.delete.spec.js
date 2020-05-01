'use strict';


/* dependencies */
const { expect } = require('@lykmapipo/mongoose-test-helpers');
const { Party } = require('../..');

describe('Party Static Delete', () => {

  before((done) => {
    Party.deleteMany(done);
  });

  let party = Party.fake();

  before((done) => {
    party.post((error, created) => {
      party = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    Party.del(party._id, (error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    Party.del(party._id, (error, deleted) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(deleted).to.not.exist;
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});

describe('Party Instance Delete', () => {

  before((done) => {
    Party.deleteMany(done);
  });

  let party = Party.fake();

  before((done) => {
    party.post((error, created) => {
      party = created;
      done(error, created);
    });
  });

  it('should be able to delete', (done) => {
    party.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done(error, deleted);
    });
  });

  it('should throw if not exists', (done) => {
    party.del((error, deleted) => {
      expect(error).to.not.exist;
      expect(deleted).to.exist;
      expect(deleted._id).to.eql(party._id);
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});
