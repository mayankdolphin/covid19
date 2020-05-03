import React  from 'react';
import { Link } from "react-router-dom";


function StateData({stateData}) {
    if (stateData.statecode !== 'TT' && parseInt(stateData.confirmed)){       
    return (
        <tr key={stateData.statecode}>
                <th>{stateData.statecode === 'TT' ? 'India' : <Link to={`/covid19/statewise/${stateData.statecode}`}>{stateData.state}</Link>}</th>
                <td>
                    {stateData.confirmed} {parseInt(stateData.deltaconfirmed) ? (<span className="text-danger">[+{stateData.deltaconfirmed}]</span>) : ''}
                </td>
                <td>
                    {stateData.active}
                </td>
                <td>
                    {stateData.recovered} {parseInt(stateData.deltarecovered) ? (<span className="text-success">[+{stateData.deltarecovered}]</span>) : ''}
                </td>
                <td>
                    {stateData.deaths} {parseInt(stateData.deltadeaths) ? (<span className="text-secondary">[+{stateData.deltadeaths}]</span>) : ''}
                </td>
            </tr>
    );
    } else {
        return ('');
    }
}
export default StateData;