'use strict';


/* dependencies */
const _ = require('lodash');
const { expect } = require('@lykmapipo/mongoose-test-helpers');
const { Party } = require('../..');


describe('Party Static Put', () => {

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

  it('should be able to put', (done) => {
    party = party.fakeOnly('name');
    Party.put(party._id, party, (error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(party._id);
      expect(updated.name).to.eql(party.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    const fake = Party.fake().toObject();
    Party.put(fake._id, _.omit(fake, '_id'), (error, updated) => {
      expect(error).to.exist;
      // expect(error.status).to.exist;
      expect(error.name).to.be.equal('DocumentNotFoundError');
      expect(updated).to.not.exist;
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});


describe('Party Instance Put', () => {

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

  it('should be able to put', (done) => {
    party = party.fakeOnly('name');
    party.put((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(party._id);
      expect(updated.name).to.eql(party.name);
      done(error, updated);
    });
  });

  it('should throw if not exists', (done) => {
    party.put((error, updated) => {
      expect(error).to.not.exist;
      expect(updated).to.exist;
      expect(updated._id).to.eql(party._id);
      done();
    });
  });

  after((done) => {
    Party.deleteMany(done);
  });

});
