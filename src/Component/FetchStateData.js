import React from "react";
import DistrictData from "./DistrictData";

export default class FetchStateData extends React.Component {
    state = {
        loading: true,
        statesWiseData: null
    };

    async componentDidMount() {
        const code = this.props.match.params.code;
        const url = "https://api.covid19india.org/v2/state_district_wise.json";
        const response = await fetch(url);
        const data = await response.json();
        data.map(stateData => (
            stateData.statecode === code ? this.setState({ statesWiseData: stateData, loading: false  }) : ''
        ));
        
    }

    render() {
        console.log(this.props.match);
        if (this.state.loading) {
            return <div className="loader"></div>;
        }

        if (!this.state.statesWiseData) {
            return <div>didn't get a states</div>;
        }
        
        return (
            <div className="table-responsive table-responsive-sm">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr className="bg-dark">
                            <th className="table-active" scope="col">#</th>
                            <th className="table-danger" scope="col">Confirmed</th>
                            <th className="table-primary" scope="col">Active</th>
                            <th className="table-success" scope="col">Recovered</th>
                            <th className="table-secondary" scope="col">Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center"><td colSpan="5"><strong>{this.state.statesWiseData.state} District Report</strong></td></tr>
                        {this.state.statesWiseData.districtData.map(districtData => (                            
                            <DistrictData stateData={districtData} stateName={districtData.district} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}