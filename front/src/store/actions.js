import {
  FETCH_INITIAL_DATA_REQUESTED,
  ADD_DEPOT_CAR_REQUESTED,
  REMOVE_DEPOT_CAR_REQUESTED,
  CLEAR_MESSAGES
} from './actionTypes';

export const fetchInitialDataRequestAction = () => ({type: FETCH_INITIAL_DATA_REQUESTED});

export const addDepotCarRequestAction = (payload) => ({type: ADD_DEPOT_CAR_REQUESTED, payload});

export const removeDepotCarRequestAction = (payload) => ({type: REMOVE_DEPOT_CAR_REQUESTED, payload});

export const clearMessagesAction = () => ({type: CLEAR_MESSAGES});
