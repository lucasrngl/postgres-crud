const { DataTypes } = require("sequelize");
const sequelize = require("../db/postgres");

const Person = sequelize.define(
  "person",
  {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      required: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      required: true,
      allowNull: false,
    },
  },
  {
    tableName: "people",
    timestamps: false,
  }
);

module.exports = Person;
