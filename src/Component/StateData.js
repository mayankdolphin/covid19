import React  from 'react';

function StateData({stateData}) {
    if (stateData.statecode === 'GJ' || stateData.statecode === 'TT'){       
    return (
        <tr key={stateData.statecode}>
            <th>{stateData.statecode === 'TT'? 'India': stateData.state}</th>
            <td className="table-danger">{stateData.confirmed} [+{stateData.deltaconfirmed}]</td>
            <td className="table-primary">{stateData.active}</td>
            <td className="table-success">{stateData.recovered} [+{stateData.deltarecovered}]</td>
            <td className="table-secondary">{stateData.deaths} [+{stateData.deltadeaths}]</td>
        </tr>
    );
    }else{
        return('');
    }
}
export default StateData;