const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Depot = sequelize.define("Depot", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "depot",
  timestamps: false
});

module.exports = Depot;
