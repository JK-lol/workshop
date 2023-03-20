const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.dbworkshop.databse,
  dbConfig.dbworkshop.user,
  dbConfig.dbworkshop.password,
  { ...dbConfig.dbworkshop.config }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer.model.js")(sequelize, Sequelize);

module.exports = db;