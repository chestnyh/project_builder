const mongo = require('./mongo/index.js');
const postgresql = require('./postgresql/index.js');
const mysql = require('./mysql/index.js');

module.exports = {
    mongo,
    postgresql,
    mysql
}