import React from 'react';
import $ from 'jquery';
import {useDispatch, useSelector} from "react-redux";
import {depotCarsSelector} from "../../store/selectors";
import {removeDepotCarRequestAction} from "../../store/actions";


export default function() {
  const dispatch = useDispatch();
  const depotCars = useSelector(depotCarsSelector);
  const deleteCar = (id) => {
    dispatch(removeDepotCarRequestAction(id));
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <>
      <h2 className="text-white mt-5">Предусмотрена возможность удаления автомобилей</h2>
      <table className="table table-hover table-dark">
        <thead>
        <tr>
          <th>Тип</th>
          <th>Модель</th>
          <th>Вид топлива</th>
          <th>Регистрационный знак</th>
          <th>Действие</th>
        </tr>
        </thead>
        <tbody>
        {
          depotCars
            .map(depotCar => (
              <tr key={depotCar.id}>
                <td>{depotCar.type}</td>
                <td>{depotCar.model}</td>
                <td>{depotCar.fuelType}</td>
                <td>{depotCar.licensePlateNumber}</td>
                <td>
                  <button onClick={() => deleteCar(depotCar.id)} type="button" className="btn btn-outline-light">Удалить</button>
                </td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </>
  )
}
