import {
  ADD_DEPOT_CAR_FAILURE,
  ADD_DEPOT_CAR_SUCCESS,
  REMOVE_DEPOT_CAR_SUCCESS,
  REMOVE_DEPOT_CAR_FAILURE,
  FETCH_INITIAL_DATA_SUCCESS,
  CLEAR_MESSAGES
} from './actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_INITIAL_DATA_SUCCESS:
      return {...state, ...action.payload};
    case ADD_DEPOT_CAR_SUCCESS:
      return {...state, successMessage: "Машина успешно создана", errorMessage: null};
    case ADD_DEPOT_CAR_FAILURE:
      return {...state, successMessage: null, errorMessage: "Ошибка при создании машины"};
    case CLEAR_MESSAGES:
      return {...state, successMessage: null, errorMessage: null};
    case REMOVE_DEPOT_CAR_SUCCESS:
      return {...state, successMessage: "Машина успешно удалена", errorMessage: null};
    case REMOVE_DEPOT_CAR_FAILURE:
      return {...state, successMessage: null, errorMessage: "Ошибка при удалении машины"};
    default:
      return state;
  }
}
