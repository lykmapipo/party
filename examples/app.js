'use strict';


/* ensure mongodb uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/party');


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const {
  Party,
  Role,
  Permission,
  info,
  app
} = require(path.join(__dirname, '..'));


/* establish mongodb connection */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


function boot() {

  async.waterfall([

    function clearParties(next) {
      Party.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function clearRoles(next) {
      Role.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function clearPermissions(next) {
      Permission.deleteMany(function ( /*error, results*/ ) {
        next();
      });
    },

    function seedPermission(next) {
      Permission.seed(next);
    },

    function seedRoles(permissions, next) {
      let roles = ['IT Officer', 'Billing Officer', 'Human Resource'];
      roles = _.map(roles, function (role) {
        return {
          name: role,
          permissions: [].concat(permissions)
        };
      });
      Role.seed(roles, next);
    },

    function seedParties(roles, next) {
      const parties = Party.fake(20);
      _.forEach(parties, function (party, index) {
        party.roles = [].concat(roles[index % roles.length]);
      });
      Party.insertMany(parties, next);
    }

  ], function (error, results) {

    /* expose module info */
    app.get('/', function (request, response) {
      response.status(200);
      response.json(info);
    });

    /* fire the app */
    app.start(function (error, env) {
      console.log(`visit http://0.0.0.0:${env.PORT}`);
    });

  });

}

boot();
