'use strict';


/**
 * @module Party
 * @name Party
 * @description A representation of an entity describing information about a
 * particular person or organization, consisting of contact information (e.g.
 * name, e-mail addresses, phone numbers) and other descriptive information of
 * interest.
 *
 * It may be a self managed entity or division within another
 * entity(party) in case there is hierarchy.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @licence MIT
 * @since  0.1.0
 * @version 0.1.0
 * @example
 *
 * const { app } = require('@lykmapipo/party');
 * app.start();
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { app, mount } = require('@lykmapipo/express-common');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
const { Permission, permissionRouter } = require('@lykmapipo/permission');
const { Role, roleRouter } = require('@lykmapipo/role');


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  `${__dirname}/package.json`,
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* export package(module) info */
exports.info = info;


/* import models */
const Party = require(path.join(__dirname, 'lib', 'party.model'));


/* export models */
exports.Party = Party;
exports.Role = Role;
exports.Permission = Permission;


/* import routers*/
const partyRouter =
  require(path.join(__dirname, 'lib', 'party.http.router'));


/* export party router */
exports.apiVersion = partyRouter.version;
exports.partyRouter = partyRouter;
exports.roleRouter = roleRouter;
exports.permissionRouter = permissionRouter;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {
    /* @todo bind oauth middlewares authenticate, token, authorize */
    mount(permissionRouter);
    mount(roleRouter);
    mount(partyRouter);
    return app;
  }
});
