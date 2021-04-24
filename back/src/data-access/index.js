const connection = require('../database/connection');
const database = require('../database/models');


const getAllCars = () => database.Auto.findAll({});

const getAllGasStations = () => database.GasStation.findAll({
  include: {
    association: database.GasStation.associations.fuelTypes
  }
});

const getAllFuelTypes = () => database.FuelType.findAll();

const getAllDepots = () => database.Depot.findAll({
  include: {
    association: database.Depot.associations.cars
  }
});

const deleteDepotCarById = (id) => database.DepotCars.destroy({where: {id}});

const createCar = ({type, model}) => database.Auto.create({type, model});

const createDepotCar = ({licensePlateNumber, carId, depotId, fuelTypeId}) =>
  database.DepotCars.create({licensePlateNumber, carId, depotId, fuelTypeId});

const executeScript = (script) => connection.query(script);


module.exports = {
  getAllCars,
  getAllGasStations,
  getAllFuelTypes,
  getAllDepots,
  deleteDepotCarById,
  createCar,
  createDepotCar,
  executeScript
};
