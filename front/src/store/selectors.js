export const carInfoSelector = (state) => {
  const {cars, depots} = state;
  return Array.isArray(cars)
    ? cars.map(car => ({
      ...car,
      entries: depots
        .flatMap(depot => depot.cars)
        .filter(depotCar => depotCar.carId === car.id)
    }))
    : [];
};

export const gasStationsInfoSelector = (state) => {
  const {gasStations, fuelTypes} = state;
  return gasStations && fuelTypes
    ? gasStations.map(gasStation => ({
      ...gasStation,
      fuelTypes: gasStation.fuelTypes
        .map(stationFuelType => ({
          ...stationFuelType,
          name: fuelTypes.find(
            fuelType => stationFuelType.fuelTypeId === fuelType.id
          ).name
        }))
    }))
    : [];
};

export const gasStationsByPetrolTypeSelector = (petrolType) =>
  (state) => gasStationsInfoSelector(state)
    .filter(
      gasStation => gasStation.fuelTypes.some(
        fuelType => fuelType.name.toLowerCase()
          .indexOf(petrolType.toLowerCase()) !== -1
      )
    );

export const depotsInfoSelector = (state) => {
  return state.depots || [];
};

export const depotWithLargestCarAmountSelector = (state) => {
  const depots = depotsInfoSelector(state);
  const largestDepot = depots.reduce(
    (acc, depot) => depot.cars.length > acc.cars.length ? depot : acc,
    depots[0]
  );
  return largestDepot ? [largestDepot] : [];
};

export const depotCarsSelector = (state) => {
  const {depots, cars, fuelTypes} = state;
  return depots ? depots
    .flatMap(depot => depot.cars)
    .map(depotCar => ({
      fuelType: fuelTypes.find(fuelType => fuelType.id === depotCar.fuelTypeId).name,
      ...cars.find(car => car.id === depotCar.carId),
      ...depotCar
    })) : [];
};

export const depotSedanCarsWithDieselFuelTypeSelector = (state) =>
  depotCarsSelector(state)
    .filter(car => car.fuelType.toLowerCase().indexOf("дизель") !== -1
      && car.type.toLowerCase().indexOf("седан") !== -1);

export const depotCarsByPetrolTypeSelector = (petrolType) =>
  (state) => depotCarsSelector(state)
    .filter(
      car => car.fuelType.toLowerCase()
        .indexOf(petrolType.toLowerCase()) !== -1
    );

export const gasStationWithMostCarsSelector = (state) => {
  const depotCars = depotCarsSelector(state);
  const gasStations = gasStationsInfoSelector(state);
  const {index, count} = gasStations
    .filter(gasStation => gasStation.isOpen)
    .reduce((acc, gasStation, idx) => {
      let {index, count} = acc;
      let currentCount = 0;
      gasStation.fuelTypes.forEach(fuelType => {
        currentCount += depotCars.filter(depotCar => depotCar.fuelTypeId === fuelType.id).length;
      });
      if(currentCount > count) {
        index = idx;
        count = currentCount;
      }
      return {index, count};
    }, {index: 0, count: 0});
  return gasStations[index] ? [{...gasStations[index], count}] : [];
};

export const depotCarGasStationsSelector = (licensePlateNumber) => (state) => {
  const depotCars = depotCarsSelector(state).filter(depotCar => depotCar.licensePlateNumber.toLowerCase()
    .indexOf(licensePlateNumber.toLowerCase()) !== -1);
  const gasStations = gasStationsInfoSelector(state);
  return depotCars.map(depotCar => {
    const locations = gasStations
      .filter(gasStation => gasStation.isOpen
        && gasStation.fuelTypes.find(fuelType => fuelType.fuelTypeId === depotCar.fuelTypeId))
      .map(gasStation => gasStation.location)
      .join(", ");
    return {...depotCar, locations};
  })
};

export const fuelTypesSelector = (state) => state.fuelTypes || [];

export const successMessageSelector = (state) => state.successMessage;

export const errorMessageSelector = (state) => state.errorMessage;
