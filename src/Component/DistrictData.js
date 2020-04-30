import React from 'react';

function DistrictData(props) {
    return (
        <tr>
            <th>{props.stateName === 'Ahmadabad' ? 'Ahmedabad' : props.stateName}</th>
            <td className="table-danger">{props.stateData.confirmed} [+{props.stateData.delta.confirmed}]</td>
            <td className="table-primary">{props.stateData.active}</td>
            <td className="table-success">{props.stateData.recovered} [+{props.stateData.delta.recovered}]</td>
            <td className="table-secondary">{props.stateData.deceased} [+{props.stateData.delta.deceased}]</td>
        </tr>
    );
}
export default DistrictData;