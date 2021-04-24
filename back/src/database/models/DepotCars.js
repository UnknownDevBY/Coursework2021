const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const DepotCars = sequelize.define("DepotCars", {
  licensePlateNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  depotId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  },
  fuelTypeId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true
  }
}, {
  tableName: "depot_cars",
  timestamps: false
});

module.exports = DepotCars;
