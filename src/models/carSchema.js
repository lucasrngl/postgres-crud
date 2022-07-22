const { DataTypes } = require("sequelize");
const sequelize = require("../db/postgres");

const Car = sequelize.define(
  "car",
  {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.TEXT,
      required: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      required: true,
      allowNull: false,
    },
  },
  {
    tableName: "cars",
    timestamps: false,
  }
);

module.exports = Car;
