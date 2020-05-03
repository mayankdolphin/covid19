import React from 'react';

function DistrictData(props) {
    return (
        <tr>
            <th>{props.stateName === 'Ahmadabad' ? 'Ahmedabad' : props.stateName}</th>
            <td>
                {props.stateData.confirmed} {props.stateData.delta.confirmed ? (<span className="text-danger">[+{props.stateData.delta.confirmed}]</span>) : ''}
            </td>
            <td>
                {props.stateData.active}
            </td>
            <td>
                {props.stateData.recovered} {props.stateData.delta.recovered ? (<span className="text-success">[+{props.stateData.delta.recovered}]</span>) : ''}
            </td>
            <td>
                {props.stateData.deceased} {props.stateData.delta.deceased ? (<span className="text-secondary">[+{props.stateData.delta.deceased}]</span>) : ''}
            </td>
        </tr>
    );
}
export default DistrictData;