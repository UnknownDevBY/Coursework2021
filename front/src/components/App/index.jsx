import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchInitialDataRequestAction} from "../../store/actions";
import Lists from '../Lists';
import Queries from '../Queries';
import AddCar from '../AddCar';
import DeleteCar from '../DeleteCar';


export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialDataRequestAction());
    const fetchInterval = setInterval(dispatch, 5000, fetchInitialDataRequestAction());
    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div className="container mb-4">
      <h1 className="text-white">Программная система, предназначенная отслеживать заправку автомобилей на разных
        автозаправочных станциях (АЗС)</h1>
      <Lists/>
      <Queries/>
      <AddCar/>
      <DeleteCar/>
    </div>
  )
}
