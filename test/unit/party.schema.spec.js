'use strict';


/* dependencies */
const { expect } = require('@lykmapipo/mongoose-test-helpers');
const { Schema } = require('mongoose');
const { Role } = require('@lykmapipo/role');
const Party = require('../../lib/party.model');


describe('Party Schema', () => {

  it('should have party field', () => {
    const party = Party.path('party');

    expect(party).to.exist;
    expect(party).to.be.an.instanceof(Schema.Types.ObjectId);
    expect(party.options).to.exist;
    expect(party.options).to.be.an('object');
    expect(party.options.type).to.exist;
    expect(party.options.ref).to.exist;
    expect(party.options.exists).to.be.true;
    expect(party.options.autopopulate).to.exist;
    expect(party.options.index).to.be.true;
  });

  it('should have type field', () => {
    const type = Party.path('type');

    expect(type).to.exist;
    expect(type).to.be.an.instanceof(Schema.Types.String);
    expect(type.options).to.exist;
    expect(type.options).to.be.an('object');
    expect(type.options.type).to.exist;
    expect(type.options.trim).to.be.true;
    expect(type.options.enum).to.exist;
    expect(type.options.index).to.be.true;
    expect(type.options.searchable).to.be.true;
    expect(type.options.fake).to.be.true;
  });

  it('should have name field', () => {
    const name = Party.path('name');

    expect(name).to.exist;
    expect(name).to.be.an.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
  });

  it('should have nickname field', () => {
    const nickname = Party.path('nickname');

    expect(nickname).to.exist;
    expect(nickname).to.be.an.instanceof(Schema.Types.String);
    expect(nickname.options).to.exist;
    expect(nickname.options).to.be.an('object');
    expect(nickname.options.type).to.exist;
    expect(nickname.options.trim).to.be.true;
    expect(nickname.options.index).to.be.true;
    expect(nickname.options.searchable).to.be.true;
    expect(nickname.options.fake).to.exist;
  });

  it('should have abbreviation field', () => {
    const abbreviation = Party.path('abbreviation');

    expect(abbreviation).to.exist;
    expect(abbreviation).to.be.an.instanceof(Schema.Types.String);
    expect(abbreviation.options).to.exist;
    expect(abbreviation.options).to.be.an('object');
    expect(abbreviation.options.type).to.exist;
    expect(abbreviation.options.trim).to.be.true;
    expect(abbreviation.options.uppercase).to.be.true;
    expect(abbreviation.options.index).to.be.true;
    expect(abbreviation.options.searchable).to.be.true;
    expect(abbreviation.options.fake).to.exist;
  });

  it('should have title field', () => {
    const title = Party.path('title');

    expect(title).to.exist;
    expect(title).to.be.an.instanceof(Schema.Types.String);
    expect(title.options).to.exist;
    expect(title.options).to.be.an('object');
    expect(title.options.type).to.exist;
    expect(title.options.trim).to.be.true;
    expect(title.options.index).to.be.true;
    expect(title.options.searchable).to.be.true;
    expect(title.options.fake).to.exist;
  });

  it('should have about field', () => {
    const about = Party.path('about');

    expect(about).to.exist;
    expect(about).to.be.an.instanceof(Schema.Types.String);
    expect(about.options).to.exist;
    expect(about.options).to.be.an('object');
    expect(about.options.type).to.exist;
    expect(about.options.trim).to.be.true;
    expect(about.options.index).to.be.true;
    expect(about.options.searchable).to.be.true;
    expect(about.options.fake).to.exist;
  });

  it('should have locale field', () => {
    const locale = Party.path('locale');

    expect(locale).to.exist;
    expect(locale).to.be.an.instanceof(Schema.Types.String);
    expect(locale.options).to.exist;
    expect(locale.options).to.be.an('object');
    expect(locale.options.type).to.exist;
    expect(locale.options.trim).to.be.true;
    expect(locale.options.enum).to.be.exist;
    expect(locale.options.index).to.be.true;
    expect(locale.options.searchable).to.be.true;
    expect(locale.options.fake).to.exist;
  });

  it('should have timezone field', () => {
    const timezone = Party.path('timezone');

    expect(timezone).to.exist;
    expect(timezone).to.be.an.instanceof(Schema.Types.String);
    expect(timezone.options).to.exist;
    expect(timezone.options).to.be.an('object');
    expect(timezone.options.type).to.exist;
    expect(timezone.options.trim).to.be.true;
    expect(timezone.options.enum).to.exist;
    expect(timezone.options.index).to.be.true;
    expect(timezone.options.searchable).to.be.true;
    expect(timezone.options.fake).to.exist;
  });

  it('should have email field', () => {
    const email = Party.path('email');

    expect(email).to.exist;
    expect(email).to.be.an.instanceof(Schema.Types.String);
    expect(email.options).to.exist;
    expect(email.options).to.be.an('object');
    expect(email.options.type).to.exist;
    expect(email.options.trim).to.be.true;
    expect(email.options.required).to.be.true;
    expect(email.options.lowercase).to.be.true;
    expect(email.options.email).to.be.true;
    expect(email.options.searchable).to.be.true;
    expect(email.options.fake).to.exist;
    expect(email.options.index).to.be.true;
    expect(email.options.unique).to.be.true;
  });

  it('should have mobile field', () => {
    const mobile = Party.path('mobile');

    expect(mobile).to.exist;
    expect(mobile).to.be.an.instanceof(Schema.Types.String);
    expect(mobile.options).to.exist;
    expect(mobile.options).to.be.an('object');
    expect(mobile.options.type).to.exist;
    expect(mobile.options.trim).to.be.true;
    expect(mobile.options.required).to.be.true;
    expect(mobile.options.searchable).to.be.true;
    expect(mobile.options.fake).to.exist;
    expect(mobile.options.index).to.be.true;
    expect(mobile.options.unique).to.be.true;
  });

  it('should have landline field', () => {
    const landline = Party.path('landline');

    expect(landline).to.exist;
    expect(landline).to.be.an.instanceof(Schema.Types.String);
    expect(landline.options).to.exist;
    expect(landline.options).to.be.an('object');
    expect(landline.options.type).to.exist;
    expect(landline.options.trim).to.be.true;
    expect(landline.options.searchable).to.be.true;
    expect(landline.options.fake).to.exist;
    expect(landline.options.index).to.be.true;
  });

  it('should have fax field', () => {
    const fax = Party.path('fax');

    expect(fax).to.exist;
    expect(fax).to.be.an.instanceof(Schema.Types.String);
    expect(fax.options).to.exist;
    expect(fax.options).to.be.an('object');
    expect(fax.options.type).to.exist;
    expect(fax.options.trim).to.be.true;
    expect(fax.options.searchable).to.be.true;
    expect(fax.options.fake).to.exist;
    expect(fax.options.index).to.be.true;
  });

  it('should have website field', () => {
    const website = Party.path('website');

    expect(website).to.exist;
    expect(website).to.be.an.instanceof(Schema.Types.String);
    expect(website.options).to.exist;
    expect(website.options).to.be.an('object');
    expect(website.options.type).to.exist;
    expect(website.options.trim).to.be.true;
    expect(website.options.searchable).to.be.true;
    expect(website.options.fake).to.exist;
    expect(website.options.index).to.be.true;
  });

  it('should have avatar field', () => {
    const avatar = Party.path('avatar');

    expect(avatar).to.exist;
    expect(avatar).to.be.an.instanceof(Schema.Types.String);
    expect(avatar.options).to.exist;
    expect(avatar.options).to.be.an('object');
    expect(avatar.options.type).to.exist;
    expect(avatar.options.trim).to.be.true;
    expect(avatar.options.fake).to.exist;
  });

  it('should have location field', () => {
    const location = Party.path('location');
    const type = Party.path('location.type');
    const coordinates = Party.path('location.coordinates');

    expect(location).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(coordinates).to.be.instanceof(Schema.Types.Array);
  });

  it('should have boundary field', () => {
    const boundary = Party.path('boundary');
    const type = Party.path('boundary.type');
    const coordinates = Party.path('boundary.coordinates');

    expect(boundary).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(coordinates).to.be.instanceof(Schema.Types.Array);
  });

  it('should have roles field', () => {
    const roles = Party.path('roles');

    expect(roles).to.exist;
    expect(roles).to.be.instanceof(Schema.Types.Array);
    expect(roles.options).to.exist;
    expect(roles.options).to.be.an('object');
    expect(roles.options.type).to.exist;
    expect(roles.options.ref).to.exist;
    expect(roles.options.ref).to.be.equal(Role.MODEL_NAME);
    expect(roles.options.default).to.be.undefined;
    expect(roles.options.index).to.be.true;
    expect(roles.options.exists).to.be.true;
    expect(roles.options.autopopulate).to.exist;
  });

});
