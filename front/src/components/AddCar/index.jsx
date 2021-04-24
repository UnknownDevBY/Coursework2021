import React, {useState} from 'react';
import $ from 'jquery';
import {useDispatch, useSelector} from "react-redux";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";
import {
  carInfoSelector,
  depotsInfoSelector,
  errorMessageSelector,
  fuelTypesSelector,
  successMessageSelector
} from "../../store/selectors";
import {addDepotCarRequestAction} from "../../store/actions";


export default function () {
  const dispatch = useDispatch();
  const fuelTypes = useSelector(fuelTypesSelector);
  const depots = useSelector(depotsInfoSelector);
  const cars = useSelector(carInfoSelector);
  const successMessage = useSelector(successMessageSelector);
  const errorMessage = useSelector(errorMessageSelector);
  const [licensePlateNumber, setLicensePlateNumber] = useState("");
  const [model, setModel] = useState();
  const [depot, setDepot] = useState();
  const [fuelType, setFuelType] = useState();

  const clearFields = () => {
    setLicensePlateNumber("");
    setModel("");
    setDepot("");
    setFuelType("");
  };
  const submitNewDepotCar = () => {
    dispatch(addDepotCarRequestAction({
      licensePlateNumber,
      carId: model,
      depotId: depot,
      fuelTypeId: fuelType
    }));
    $("html, body").animate({ scrollTop: 0 }, "slow");
    clearFields();
  };
  const isSubmitButtonDisabled = !licensePlateNumber || !model || !depot || !fuelType;

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage}/>}
      {successMessage && <SuccessMessage message={successMessage}/>}
      <h2 className="text-white mt-5">Предусмотрена возможность добавления автомобилей в заданную автобазу</h2>
      <table className="table table-hover table-dark">
        <TableHeader/>
        <tbody>
        <tr>
          <td>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="прим. 1111АА-1"
              aria-labelledby="regPlateTh"
              value={licensePlateNumber}
              onChange={e => setLicensePlateNumber(e.target.value)}
            />
          </td>
          <td>
            <NewCarSelect
              placeholderOption="Выберите модель"
              ariaLabelledBy="modelTh"
              itemsList={cars}
              getKey={item => item.id}
              getValue={item => item.id}
              getText={item => item.model}
              selectValue={model}
              selectValueSetter={setModel}
            />
          </td>
          <td>
            <NewCarSelect
              placeholderOption="Выберите автобазу"
              ariaLabelledBy="depotTh"
              itemsList={depots}
              getKey={item => item.id}
              getValue={item => item.id}
              getText={item => `${item.title} (${item.location})`}
              selectValue={depot}
              selectValueSetter={setDepot}
            />
          </td>
          <td>
            <NewCarSelect
              placeholderOption="Выберите вид топлива"
              ariaLabelledBy="fuelTypeTh"
              itemsList={fuelTypes}
              getKey={item => item.id}
              getValue={item => item.id}
              getText={item => item.name}
              selectValue={fuelType}
              selectValueSetter={setFuelType}
            />
          </td>
        </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-dark w-100"
        onClick={submitNewDepotCar}
        disabled={isSubmitButtonDisabled}
      >
        Добавить автомобиль
      </button>
    </>
  )
}

function NewCarSelect(props) {
  const {
    ariaLabelledBy,
    placeholderOption,
    itemsList,
    getKey,
    getValue,
    getText,
    selectValue,
    selectValueSetter
  } = props;

  return (
    <select
      value={selectValue}
      onChange={e => selectValueSetter(e.target.value)}
      className="form-control form-control-sm"
      aria-labelledby={ariaLabelledBy}
    >
      <option>{placeholderOption}</option>
      {
        itemsList.map(item => <option key={getKey(item)} value={getValue(item)}>{getText(item)}</option>)
      }
    </select>
  )
}

function TableHeader() {
  return (
    <thead>
    <tr>
      <th id="regPlateTh">Регистрационный знак</th>
      <th id="modelTh">Модель</th>
      <th id="depotTh">Депо</th>
      <th id="fuelTypeTh">Вид топлива</th>
    </tr>
    </thead>
  )
}
