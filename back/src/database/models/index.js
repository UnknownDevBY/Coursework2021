const Auto = require("./Auto");
const Depot = require("./Depot");
const DepotCars = require("./DepotCars");
const FuelType = require("./FuelType");
const GasStation = require("./GasStation");
const GasStationFuel = require("./GasStationFuel");


Depot.hasMany(DepotCars, {
  sourceKey: "id",
  foreignKey: "depotId",
  as: "cars"
});

Auto.hasMany(DepotCars, {
  sourceKey: "id",
  foreignKey: "carId",
  as: "depots"
});

FuelType.hasMany(DepotCars, {
  sourceKey: "id",
  foreignKey: "fuelTypeId",
  as: "cars"
});

GasStation.hasMany(GasStationFuel, {
  sourceKey: "id",
  foreignKey: "gasStationId",
  as: "fuelTypes"
});

FuelType.hasMany(GasStationFuel, {
  sourceKey: "id",
  foreignKey: "fuelTypeId",
  as: "gasStations"
});


module.exports = {
  Auto,
  Depot,
  DepotCars,
  FuelType,
  GasStation
};
