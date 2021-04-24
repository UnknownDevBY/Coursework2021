export const carInfoRenderRow = (car) => [
  car.type,
  car.model,
  car.entries.length
];

export const gasStationRenderRow = (gasStation) => [
  gasStation.title,
  gasStation.location,
  gasStation.isOpen ? 'Открыто' : 'Закрыто',
  gasStation.fuelTypes.map(fuelType => fuelType.name).join(", ")
];

export const gasStationWithMostCarsRenderRow = (gasStation) => [
  ...gasStationRenderRow(gasStation),
  gasStation.count
];

export const depotRenderRow = (depot) => [
  depot.title,
  depot.location,
  depot.cars.length
];

export const depotCarRenderRow = (depotCar) => [
  depotCar.type,
  depotCar.model,
  depotCar.fuelType,
  depotCar.licensePlateNumber
];

export const depotCarGasStationsRenderRow = (data) => [
  ...depotCarRenderRow(data),
  data.locations || "Нигде"
];
