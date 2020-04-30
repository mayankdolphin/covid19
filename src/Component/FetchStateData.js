import React from "react";
import DistrictData from "./DistrictData";
import FetchData from "./FetchData";

export default class FetchStateData extends React.Component {
    state = {
        loading: true,
        GJData: null
    };

    async componentDidMount() {
        const url = "https://api.covid19india.org/v2/state_district_wise.json";
        const response = await fetch(url);
        const data = await response.json();
        data.map(stateData => (
            stateData.statecode === 'GJ' ? this.setState({ statesWiseData: stateData, loading: false  }) : ''
        ));
        
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.statesWiseData) {
            return <div>didn't get a states</div>;
        }
        
        console.log(this.state.GJData);
        return (
            <div class="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th className="table-active" scope="col">District</th>
                            <th className="table-danger" scope="col">Confirmed</th>
                            <th className="table-primary" scope="col">Active</th>
                            <th className="table-success" scope="col">Recovered</th>
                            <th className="table-secondary" scope="col">Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FetchData />
                        {this.state.statesWiseData.districtData.map(districtData => (                            
                            <DistrictData stateData={districtData} stateName={districtData.district} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}