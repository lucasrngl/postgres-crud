const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.URL, { logging: false });

module.exports = sequelize;
