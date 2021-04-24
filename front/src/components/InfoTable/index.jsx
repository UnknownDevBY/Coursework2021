import React from 'react';
import {useSelector} from "react-redux";


export default function(props) {
  const {headers, selector, renderRow} = props;
  const data = useSelector(selector);

  return (
    <table className="table table-hover table-dark">
      <thead>
      <tr>
        {
          Array.isArray(headers)
          && headers.map(header => <th key={header}>{header}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        Array.isArray(data)
        && data
          .map(renderRow)
          .map(item => (
            <tr key={item.join()}>
              {
                item.map(cell => <td key={cell}>{cell}</td>)
              }
            </tr>
          ))
      }
      </tbody>
    </table>
  )
}
