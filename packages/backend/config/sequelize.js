// config/sequelize.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("splitwise", "celo", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
