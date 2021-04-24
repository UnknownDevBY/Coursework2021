const fs = require('fs');
const {INITIAL_SCRIPT_PATH} = require('../utils/constants');
const dataAccess = require('../data-access');

const getInitialData = async () => {
  const cars = await dataAccess.getAllCars();
  const gasStations = await dataAccess.getAllGasStations();
  const fuelTypes = await dataAccess.getAllFuelTypes();
  const depots = await dataAccess.getAllDepots();
  return {cars, gasStations, fuelTypes, depots};
};

const isAddDepotCarPayloadValid = (payload) => {
  return payload
    && payload.licensePlateNumber
    && payload.carId
    && payload.depotId
    && payload.fuelTypeId;
};

const addCar = (payload) => {
  const {model, type} = payload;
  return dataAccess.createCar({type, model});
};

const addDepotCar = (payload) => {
  const {licensePlateNumber, carId, depotId, fuelTypeId} = payload;
  return dataAccess.createDepotCar({licensePlateNumber, carId, depotId, fuelTypeId});
};

const deleteDepotCarById = (id) => dataAccess.deleteDepotCarById(id);

const executeInitialScript = () => fs.readFile(INITIAL_SCRIPT_PATH, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  return Promise.all(
    data
      .split('\n')
      .filter(line => line.indexOf("INSERT INTO") !== -1)
      .map(query => dataAccess.executeScript(query))
  );
});

module.exports = {
  getInitialData,
  isAddDepotCarPayloadValid,
  addCar,
  addDepotCar,
  deleteDepotCarById,
  executeInitialScript
};
