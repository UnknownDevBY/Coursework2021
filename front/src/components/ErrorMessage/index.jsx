import React from 'react';
import ReactDOM from 'react-dom';
import {useDispatch} from "react-redux";
import {clearMessagesAction} from "../../store/actions";


export default function ({message}) {
  const dispatch = useDispatch();
  const onDismiss = () => dispatch(clearMessagesAction());
  return ReactDOM.createPortal(
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Ошибка!</strong> {message}
      <button onClick={onDismiss} type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>,
    document.getElementById('alerts')
  )
}
