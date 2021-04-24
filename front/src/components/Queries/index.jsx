import React, {useState} from 'react';
import {
  depotCarGasStationsSelector,
  depotCarsByPetrolTypeSelector,
  depotSedanCarsWithDieselFuelTypeSelector,
  depotWithLargestCarAmountSelector,
  gasStationsByPetrolTypeSelector,
  gasStationWithMostCarsSelector
} from "../../store/selectors";
import {
  depotCarGasStationsRenderRow,
  depotCarRenderRow,
  depotRenderRow,
  gasStationRenderRow,
  gasStationWithMostCarsRenderRow
} from "../../utils/renderRow";
import InfoTable from '../InfoTable';


export default function () {
  const [depotCarWithGasStations, setDepotCarWithGasStations] = useState("");
  const [carFuelType, setCarFuelType] = useState("");
  const [gasStationFuelType, setGasStationFuelType] = useState("");

  return (
    <>
      <h2 className="text-white mt-5">Реализованы следующие запросы</h2>
      <div className="row mt-4">
        <div className="col">
          <h3 className="text-white" id="depotCarGasStationsHeader">На каких АЗС можно заправить конкретный автомобиль</h3>
        </div>
        <div className="col">
          <input
            value={depotCarWithGasStations} onChange={e => setDepotCarWithGasStations(e.target.value)}
            type="text" className="form-control" placeholder="Регистрационный знак"
            aria-labelledby="depotCarGasStationsHeader"/>
        </div>
      </div>
      <InfoTable
        headers={["Тип", "Модель", "Вид топлива", "Регистрационный знак", "Где заправить?"]}
        selector={depotCarGasStationsSelector(depotCarWithGasStations)}
        renderRow={depotCarGasStationsRenderRow}
      />
      <h3 className="text-white mt-4">Сколько автомобилей с кузовом седан заправляются дизельным топливом</h3>
      <InfoTable
        headers={["Тип", "Модель", "Вид топлива", "Регистрационный знак"]}
        selector={depotSedanCarsWithDieselFuelTypeSelector}
        renderRow={depotCarRenderRow}
      />
      <div className="row mt-4">
        <div className="col">
          <h3 className="text-white" id="gasStationFuelTypeHeader">Список АЗС, на которых отсутствует заданный сорт
            бензина</h3>
        </div>
        <div className="col">
          <input
            value={gasStationFuelType} onChange={e => setGasStationFuelType(e.target.value)}
            type="text" className="form-control" placeholder="Сорт бензина"
            aria-labelledby="gasStationFuelTypeHeader"/>
        </div>
      </div>
      <InfoTable
        headers={["Название", "Локация", "Состояние", "Виды топлива"]}
        selector={gasStationsByPetrolTypeSelector("бензин " + gasStationFuelType)}
        renderRow={gasStationRenderRow}
      />
      <h3 className="text-white mt-4">АЗС, обслуживающая максимальное количество автомобилей</h3>
      <InfoTable
        headers={["Название", "Локация", "Состояние", "Виды топлива", "Кол-во машин"]}
        selector={gasStationWithMostCarsSelector}
        renderRow={gasStationWithMostCarsRenderRow}
      />
      <div className="row mt-4">
        <div className="col">
          <h3 className="text-white" id="carFuelTypeHeader">Автомобили, заправляющиеся заданным сортом бензина</h3>
        </div>
        <div className="col">
          <input
            value={carFuelType} onChange={e => setCarFuelType(e.target.value)}
            type="text" className="form-control" placeholder="Сорт бензина" aria-labelledby="carFuelTypeHeader"/>
        </div>
      </div>
      <InfoTable
        headers={["Тип", "Модель", "Вид топлива", "Регистрационный знак"]}
        selector={depotCarsByPetrolTypeSelector("бензин " + carFuelType)}
        renderRow={depotCarRenderRow}
      />
      <h3 className="text-white mt-4">Автобаза с максимальным количеством автомобилей</h3>
      <InfoTable
        headers={["Название", "Локация", "Кол-во машин"]}
        selector={depotWithLargestCarAmountSelector}
        renderRow={depotRenderRow}
      />
    </>
  )
}
