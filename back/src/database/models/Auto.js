const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Auto = sequelize.define("Auto", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "auto",
  timestamps: false
});

module.exports = Auto;
