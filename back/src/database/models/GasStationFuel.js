const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const GasStationFuel = sequelize.define("GasStationFuel", {
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  fuelTypeId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  gasStationId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: "gas_station_fuel",
  timestamps: false
});

module.exports = GasStationFuel;
