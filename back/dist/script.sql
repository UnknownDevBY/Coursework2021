INSERT INTO fuel_type(name) VALUES ('Дизель');
INSERT INTO fuel_type(name) VALUES ('Бензин 92');
INSERT INTO fuel_type(name) VALUES ('Бензин 95');
INSERT INTO fuel_type(name) VALUES ('Бензин 98');
INSERT INTO fuel_type(name) VALUES ('Бензин 80');

INSERT INTO depot(location, title) VALUES ('г. Минск, ул. Ольшевского 10', 'Депо 1');
INSERT INTO depot(location, title) VALUES ('г. Минск, ул. Притыцкого 20', 'Депо 2');
INSERT INTO depot(location, title) VALUES ('г. Минск, пр-т. Победителей 1', 'Депо 3');
INSERT INTO depot(location, title) VALUES ('г. Минск, пр-т. Победителей 12', 'Депо 4');
INSERT INTO depot(location, title) VALUES ('г. Минск, пр-т. Независимости 5', 'Депо 5');

INSERT INTO auto(type, model) VALUES ('Универсал', '2021 Acura ILX');
INSERT INTO auto(type, model) VALUES ('Седан', '2021 Audi A4');
INSERT INTO auto(type, model) VALUES ('Седан', '2020 Audi A6');
INSERT INTO auto(type, model) VALUES ('Седан', '2014 Audi A8');
INSERT INTO auto(type, model) VALUES ('Джип', '2010 Audi Q7');
INSERT INTO auto(type, model) VALUES ('Купе', '2021 Audi A5');
INSERT INTO auto(type, model) VALUES ('Купе', '2017 Volkswagen Golf VI Cabriolet');

INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AA-7', 1, 1, 1);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AB-7', 1, 2, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AC-7', 1, 3, 2);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AD-7', 1, 1, 4);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AE-7', 1, 4, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('1111AT-7', 1, 5, 5);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('7337BE-7', 2, 2, 2);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('7337AB-7', 2, 3, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('7337EB-7', 2, 1, 1);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('7337CC-7', 3, 3, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('7337CA-7', 3, 2, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('4337CC-7', 4, 3, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('5337CC-7', 5, 1, 3);
INSERT INTO depot_cars(licensePlateNumber, carId, depotId, fuelTypeId) VALUES ('6337CC-7', 6, 3, 1);

INSERT INTO gas_station(location, title, isOpen) VALUES ('г. Минск, ул. Ольшевского 10', 'LUKOIL', true);
INSERT INTO gas_station(location, title, isOpen) VALUES ('г. Минск, ул. Ольшевского 11', 'БЕЛНЕФТЬ', true);
INSERT INTO gas_station(location, title, isOpen) VALUES ('г. Минск, ул. Ольшевского 12', 'БЕЛНЕФТЬ', false);

INSERT INTO gas_station_fuel(price, fuelTypeId, gasStationId) VALUES (1.0, 1, 1), (1.2, 2, 1), (1.4, 3, 1), (1.5, 4, 1);
INSERT INTO gas_station_fuel(price, fuelTypeId, gasStationId) VALUES (1.1, 1, 2), (1.3, 2, 2), (1.5, 3, 2);
INSERT INTO gas_station_fuel(price, fuelTypeId, gasStationId) VALUES (1.2, 1, 3), (1.4, 2, 3), (1.6, 3, 3);
