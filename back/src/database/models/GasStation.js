const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const GasStation = sequelize.define("GasStation", {
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
  },
  isOpen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: "gas_station",
  timestamps: false
});

module.exports = GasStation;
