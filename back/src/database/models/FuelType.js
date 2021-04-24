const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const FuelType = sequelize.define("FuelType", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "fuel_type",
  timestamps: false
});

module.exports = FuelType;
