const knex = require('knex');

const config = require('../knexfile.js')[process.env.DBENV];

module.exports = knex(config);