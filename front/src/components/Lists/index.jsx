import React from 'react';
import {carInfoSelector, depotsInfoSelector, gasStationsInfoSelector} from "../../store/selectors";
import {carInfoRenderRow, depotRenderRow, gasStationRenderRow} from "../../utils/renderRow";
import InfoTable from '../InfoTable';


export default function () {
  return (
    <>
      <h2 className="text-white mt-5">Созданы обобщенные списки</h2>
      <h3 className="text-white mt-4">Сведения об автомобилях</h3>
      <InfoTable
        headers={["Вид", "Модель", "Кол-во на базах"]}
        selector={carInfoSelector}
        renderRow={carInfoRenderRow}
      />
      <h3 className="text-white mt-4">Сведения об АЗС</h3>
      <InfoTable
        headers={["Название", "Локация", "Состояние", "Виды топлива"]}
        selector={gasStationsInfoSelector}
        renderRow={gasStationRenderRow}
      />
      <h3 className="text-white mt-4">Сведения об автобазах</h3>
      <InfoTable
        headers={["Название", "Локация", "Кол-во машин"]}
        selector={depotsInfoSelector}
        renderRow={depotRenderRow}
      />
    </>
  )
}
